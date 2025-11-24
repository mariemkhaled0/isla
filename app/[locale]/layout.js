import { NextIntlClientProvider } from "next-intl";
import { headers } from "next/headers";
import { hasLocale } from "next-intl";
import localFont from "next/font/local";
import "../globals.css";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import Navbar from "@/src/components/Navbar";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

const locales = ["en", "ar"];
const defaultLocale = "ar";

export default async function RootLayout({ children, params }) {
  const locale = hasLocale(locales, params.locale)
    ? params.locale
    : defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <headers>
            <Navbar />
            <LanguageSwitcher />
          </headers>
          {children}
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
