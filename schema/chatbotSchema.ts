import * as yup from "yup"

export const chatbotSchema = () =>
  yup.object().shape({
    prompt: yup
      .string()
      .required("Prompt is required"),
  });

export default chatbotSchema;
