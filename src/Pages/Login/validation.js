import * as yup from "yup";

const loginValidation = yup.object({
  identifier: yup.string().required("Email or username is required"),
  password: yup
    .string()
    .required("please enter password"),
});

export default loginValidation;
