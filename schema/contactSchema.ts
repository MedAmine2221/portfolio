import * as yup from "yup";

export const contactSchema = (t: any) =>
  yup.object().shape({
    lastName: yup.string().required(t("lastName")),
    firstName: yup.string().required(t("firstName")),
    email: yup.string().required(t("email")),
    object: yup.string().required(t("object")),
    message: yup.string().required(t("message")),
  });

export default contactSchema;
