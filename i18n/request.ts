import { getRequestConfig } from "next-intl/server";

const locales = ["en", "fr", "it"];

export default getRequestConfig(async ({ locale }) => {
  const active =
    typeof locale === "string" && locales.includes(locale) ? locale : "en";

  const messages = await import(`../messages/${active}.json`).then(
    (m) => m.default,
  );

  return {
    locale: active,
    messages,
  };
});
