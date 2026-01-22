import "@/styles/globals.css";
import { Metadata } from "next";
import clsx from "clsx";
import { getMessages } from "next-intl/server";
import { NextIntlClientProvider } from "next-intl";
import { FaCopyright } from "react-icons/fa";
import { Link } from "@heroui/link";

import { Providers } from "./providers";

import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import ChatFloating from "@/components/app/chat-floating";
import { ReduxProviders } from "@/components/redux-provider";

export const metadata: Metadata = {
  title: {
    default: "Mohamed Amine LAZREG",
    template: `%s - Mohamed Amine LAZREG`,
  },
  description: "Mohamed Amine's portfolio",

  icons: {
    icon: "/amine.png",
  },

  openGraph: {
    title: "Mohamed Amine LAZREG",
    description: "Mohamed Amine's portfolio",
    images: [
      {
        url: "https://portfolio-rho-brown-aosm4qjgn0.vercel.app/amine.png",
        width: 1200,
        height: 630,
        alt: "Mohamed Amine Lazreg",
      },
    ],
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    images: ["https://portfolio-rho-brown-aosm4qjgn0.vercel.app/amine.png"],
  },
};

export default async function RootLayout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;

  if (!locale) throw new Error("Locale undefined");

  const messages = await getMessages({ locale });

  return (
    <html suppressHydrationWarning lang={locale}>
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
        // eslint-disable-next-line react/no-unknown-property
        cz-shortcut-listen="true"
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
            <ReduxProviders>
              <div className="relative flex flex-col h-screen">
                <Navbar />
                <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                  {children}
                </main>
                <ChatFloating />
                <footer className="w-full flex items-center justify-center py-3">
                  <Link
                    isExternal
                    className="flex items-center gap-1 text-current"
                    href="https://www.linkedin.com/in/mohamed-amine-lazreg-831b1817a/"
                    title="heroui.com homepage"
                  >
                    <FaCopyright className="text-white" />
                    <span className="text-default-600 text-sm">
                      {locale === "fr"
                        ? "Tous droits réservés ©"
                        : locale === "it"
                          ? "Tutti i diritti riservati ©"
                          : "All rights reserved ©"}{" "}
                      {new Date().getFullYear()},
                    </span>
                    <p className="text-primary text-sm">Mohamed Amine LAZREG</p>
                  </Link>
                </footer>
              </div>
            </ReduxProviders>
          </Providers>
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
