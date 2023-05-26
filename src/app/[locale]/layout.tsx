import "./globals.css";
import { Kanit } from "next/font/google";
import clsx from "clsx";
import NextAuthProvider from "@/provider/NextAuthProvider";
import ReduxProvider from "@/provider/ReduxProvider";
import { NextIntlClientProvider } from "next-intl";
import NavBar from "@/components/NavBar";
import store from "@/redux/store";
import { useEffect } from "react";
import { setupLanguage } from "@/redux/slice/settingSlice";

const kanit = Kanit({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin", "thai"],
});

export const metadata = {
  title: "Movie Application",
  description: "Generated by thanachai aktananan.",
};

interface RootLayoutProps {
  children: React.ReactNode;
  params: {
    locale: string;
  };
}

export default async function RootLayout({
  children,
  params: { locale },
}: RootLayoutProps) {
  /**
   * setup message locale
   */
  let messages;
  try {
    messages = (await import(`../../messages/${locale}.json`)).default;
  } catch (error) {}

  return (
    <ReduxProvider locale={locale}>
      <html lang={locale}>
        <body className={clsx(kanit.className)}>
          <NextIntlClientProvider locale={locale} messages={messages}>
            <NextAuthProvider>
              <NavBar />
              {children}
            </NextAuthProvider>
          </NextIntlClientProvider>
        </body>
      </html>
    </ReduxProvider>
  );
}
