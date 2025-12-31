import * as yup from "yup";

export const contactSchema = () =>
  yup.object().shape({
    lastName: yup.string().required("Last Name is required"),
    firstName: yup.string().required("First Name is required"),
    email: yup.string().required("Email is required"),
    object: yup.string().required("Object is required"),
    message: yup.string().required("Message is required"),
  });

export default contactSchema;
