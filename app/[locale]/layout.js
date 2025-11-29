import { NextIntlClientProvider } from "next-intl";
import { hasLocale } from "next-intl";
import localFont from "next/font/local";
import "../globals.css";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import Navbar from "@/src/components/Navbar";
import Footer from "@/src/components/Footer";

const alexandria = localFont({
  src: "./fonts/Alexandria-VariableFont_wght.ttf",
  variable: "--font-alexandria",
});

const longreach = localFont({
  src: "./fonts/DK Longreach.otf",
  variable: "--font-longreach",
});

const wingx = localFont({
  src: "./fonts/Wingx.otf",
  variable: "--font-wingx",
});

const locales = ["en", "ar"];
const defaultLocale = "ar";

export default async function RootLayout({ children, params }) {
  // Await params if using Next.js 15+
  const { locale: paramLocale } = await params;

  const locale = hasLocale(locales, paramLocale) ? paramLocale : defaultLocale;

  const messages = (await import(`../../messages/${locale}.json`)).default;

  return (
    <html lang={locale} dir={locale === "ar" ? "rtl" : "ltr"}>
      <body
        className={`${alexandria.variable} ${longreach.variable} ${wingx.variable}`}
      >
        <NextIntlClientProvider locale={locale} messages={messages}>
          <header>
            <Navbar />
          </header>
          {children}
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
