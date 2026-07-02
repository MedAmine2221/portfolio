import * as yup from "yup";

export const contactSchema = (t: any) =>
  yup.object().shape({
    lastName: yup.string().required(t("lastName")),
    firstName: yup.string().required(t("firstName")),
    email: yup.string().required(t("email")),
    object: yup.string().required(t("object")),
    frameworks: yup.array().when("object", {
      is: "formation",
      then: (schema) => schema.min(1, t("required")),
    }),
    devTech: yup.array().when("object", {
      is: "dev",
      then: (schema) => schema.min(1, t("required")),
    }),
    message: yup.string().required(t("message")),
  });

export default contactSchema;
