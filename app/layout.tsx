import "@/styles/globals.css";
import { Metadata } from "next";
import { Link } from "@heroui/link";
import clsx from "clsx";

import { Providers } from "./providers";
import { FaCopyright } from "react-icons/fa";
import { siteConfig } from "@/config/site";
import { fontSans } from "@/config/fonts";
import { Navbar } from "@/components/navbar";
import PageTransition from "@/components/page-transition";
import ChatFloating from "@/components/app/chat-floating";
import { ReduxProviders } from "@/components/redux-provider";

export const metadata: Metadata = {
  title: {
    default: siteConfig.name,
    template: `%s - ${siteConfig.name}`,
  },
  description: siteConfig.description,
  icons: {
    icon: "/amine.png",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html suppressHydrationWarning lang="en">
      <head />
      <body
        className={clsx(
          "min-h-screen text-foreground bg-background font-sans antialiased",
          fontSans.variable,
        )}
        // eslint-disable-next-line react/no-unknown-property
        cz-shortcut-listen="true"
      >
        <Providers themeProps={{ attribute: "class", defaultTheme: "dark" }}>
          <ReduxProviders>
            <div className="relative flex flex-col h-screen">
              <Navbar />
              <main className="container mx-auto max-w-7xl pt-16 px-6 flex-grow">
                <PageTransition>{children}</PageTransition>
              </main>
              <ChatFloating />
              <footer className="w-full flex items-center justify-center py-3">
                <Link
                  isExternal
                  className="flex items-center gap-1 text-current"
                  href={siteConfig.links.linkedIn}
                  title="heroui.com homepage"
                >
                  <FaCopyright className="text-white" />
                  <span className="text-default-600 text-sm">
                    All rights reserved 2025,
                  </span>
                  <p className="text-primary text-sm">Mohamed Amine LAZREG</p>
                </Link>
              </footer>
            </div>
          </ReduxProviders>
        </Providers>
      </body>
    </html>
  );
}
