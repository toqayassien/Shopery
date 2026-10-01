import * as yup from "yup";

const signUpValidation = yup.object({
  username: yup.string().required("Username is required"),
  email: yup
    .string()
    .email("innvalid email address")
    .required("Email is required"),
  password: yup
    .string()
    .matches(
      /[^A-Za-z0-9]/,
      "Password must contain at least one special character, uppercase & lowercase letters",
    )
    .required("please enter password"),
  confirmPassword: yup
    .string()
    .oneOf([yup.ref("password")], "Passwords not identical")
    .matches()
    .required("confirm password"),
});

export default signUpValidation;
