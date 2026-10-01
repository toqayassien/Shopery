import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import loginValidation from "./validation.js";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext, useEffect } from "react";
import { UserContext } from "../../Context/index.jsx";

export default function Login() {
  const navigate = useNavigate();
  const { jwt, setJwt } = useContext(UserContext);
  let {username} = useContext(UserContext)
  const token = JSON.parse(localStorage.getItem("token"));

  async function handleLogin(values) {
    const user = {
      identifier: values.identifier,
      password: values.password,
    };
    username = values.identifier
    console.log(values.identifier, username)
    try {
      const req = await axios.post(
        "http://localhost:1337/api/auth/local",
        user,
      );
      const token = req.data.jwt;
      setJwt(token);
      localStorage.setItem("token", JSON.stringify(token));
      toast.success(`Welcome Back ${values.identifier}`);
      setTimeout(() => {
        navigate("/");
      }, 2000);
    } catch (err) {
      // toast.error(err?.response.data.error.message);
    }
  }
  return (
    <>
      <div className="h-full py-10 px-5">
        <div className="form-box w-full md:w-lg mx-auto text-center py-5 border border-gray-200 rounded shadow-lg">
          <h2 className="font-poppins font-bold text-xl md:text-3xl py-4">Sign In</h2>
          <Formik
            onSubmit={handleLogin}
            validationSchema={loginValidation}
            initialValues={{ identifier: "", password: "" }}
          >
            <Form className="flex items-center flex-col gap-5 px-5">
              <Field
                name="identifier"
                type="text"
                placeholder="Email / username"
                className="w-full p-2 border border-gray-200 rounded font-poppins text-xs md:text-base "
              />
              <ErrorMessage name="identifier" component="p" />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-200 rounded font-poppins text-xs md:text-base"
              />
              <ErrorMessage name="password" component="p" />
              <div className="w-full flex items-start justify-between text-gray">
                <label className="flex items-center gap-1 text-xs md:text-base">
                  <Field type="checkbox" name="terms" />
                  Remember me
                </label>
                <div className="text-xs md:text-base">
                  <Link to="forgot">Forgot Password</Link>
                </div>
              </div>
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold p-1 text-sm md:text-base md:py-2 w-30 md:w-full rounded-full cursor-pointer"
              >
                Sign In
              </button>
              <label className="text-gray text-xs md:text-base">
                Don't have account?{" "}
                <Link to="../../signup" className="text-black font-semibold">
                  Register
                </Link>
              </label>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
