import { ErrorMessage, Field, Form, Formik } from "formik";
import { Link, useNavigate } from "react-router";
import signUpvalidation from "./validation.js";
import axios from "axios";
import toast from "react-hot-toast";
import { useContext } from "react";
import { UserContext} from "../../Context/index.jsx";

export default function SignUp() {
  const { jwt, setJwt } = useContext(UserContext);
  let { username } = useContext(UserContext);
  const navigate = useNavigate();

  async function autoLogin(user) {
    const req2 = await axios.post("http://localhost:1337/api/auth/local", {
      identifier: user.username,
      password: user.password,
    });
    username = values.identifier
    const token = req2.data.jwt;
    setJwt(token);
    localStorage.setItem("token", JSON.stringify(token));
    setTimeout(() => {
      navigate("/");
    }, 2000);
  }

  async function handleSignUp(values) {
    const user = {
      username: values.username,
      email: values.email,
      password: values.password,
      role: 2,
    };
    try {
      const req = await axios.post("http://localhost:1337/api/users", user);
      toast.success("Account Created Successfully!");
      autoLogin(user);
    } catch (err) {
      toast.error(`${err.response.data.error.message}`);
    }
  }
  return (
    <>
      <div className="h-full py-10 px-5">
        <div className="form-box w-full md:w-lg mx-auto text-center py-5 border border-gray-200 rounded shadow-lg">
          <h2 className="font-poppins font-bold text-lg md:text-3xl py-4">
            Create Account
          </h2>
          <Formik
            onSubmit={handleSignUp}
            validationSchema={signUpvalidation}
            initialValues={{
              username: "",
              email: "",
              password: "",
              confirmPassword: "",
            }}
          >
            <Form className="flex items-center flex-col gap-5 px-5">
              <Field
                name="username"
                type="text"
                placeholder="User Name"
                className="w-full p-2 border border-gray-200 rounded font-poppins text-xs md:text-base"
              />
              <ErrorMessage name="username" component="p" />
              <Field
                name="email"
                type="email"
                placeholder="Email"
                className="w-full p-2 border border-gray-200 rounded font-poppins text-xs md:text-base"
              />
              <ErrorMessage name="email" component="p" />
              <Field
                name="password"
                type="password"
                placeholder="Password"
                className="w-full p-2 border border-gray-200 rounded font-poppins text-xs md:text-base"
              />
              <ErrorMessage name="password" component="p" />
              <Field
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                className="w-full p-2 border border-gray-200 rounded font-poppins text-xs md:text-base"
              />
              <ErrorMessage name="confirmPassword" component="p" />
              <label className="flex items-center gap-2 text-gray text-xs md:text-base">
                <Field type="checkbox" name="terms" />
                Accept all terms & Conditions
              </label>
              <button
                type="submit"
                className="bg-green-600 text-white font-semibold py-1 px-2 text-sm md:text-base md:py-2 w-30 md:w-full rounded-full cursor-pointer"
              >
                Create Account
              </button>
              <label className="text-gray">
                Already have account?{" "}
                <Link to="../../login" className="text-black font-semibold">
                  Login
                </Link>
              </label>
            </Form>
          </Formik>
        </div>
      </div>
    </>
  );
}
