import * as yup from "yup";

export const chatbotSchema = (t: any) =>
  yup.object().shape({
    prompt: yup.string().trim().required(t("prompt")),
  });

export default chatbotSchema;
