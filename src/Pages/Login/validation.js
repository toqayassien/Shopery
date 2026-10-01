import * as yup from "yup";

const loginValidation = yup.object({
  identifier: yup
    .string()
    .required("Email or username is required"),
  password: yup
    .string()
    .matches(
      /[^A-Za-z0-9]/,
      "Password Incorrect",
    )
    .required("please enter password"),
});

export default loginValidation;
