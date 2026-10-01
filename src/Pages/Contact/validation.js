import * as yup from "yup";

const contactValidation = yup.object({
  name: yup.string().required("Please let us know your name."),
  email: yup.string().required("Enter Email so we can contact you!"),
  subject: yup.string(),
  message: yup.string(),
});

export default contactValidation;