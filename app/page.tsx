import { headers } from "next/headers";
import { redirect } from "next/navigation";

export default async function RootPage() {
  const acceptLanguage = (await headers()).get("accept-language") || "";

  if (acceptLanguage.startsWith("fr")) {
    redirect("/fr");
  }
  if (acceptLanguage.startsWith("it")) {
    redirect("/it");
  }

  redirect("/en");
}
