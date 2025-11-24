"use client";

import { usePathname, useRouter } from "next/navigation";

const locales = ["ar", "en"];

const localeDir = {
  ar: "rtl",
  en: "ltr",
};

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const currentLocale = pathname.split("/")[1];

  const switchLang = (locale) => {
    // Change page
    const newPath = "/" + locale + pathname.replace(`/${currentLocale}`, "");
    router.push(newPath);

    // Fix direction (very important!)
    document.documentElement.setAttribute("dir", localeDir[locale]);
    document.documentElement.setAttribute("lang", locale);
  };

  return (
    <div className="flex gap-6 ">
      {locales.map((loc) => (
        <button
          key={loc}
          onClick={() => switchLang(loc)}
          className={`px-3 py-1 rounded ${
            loc === currentLocale ? "bg-blue-500 text-white" : "bg-gray-200"
          }`}
        >
          {loc.toUpperCase()}
        </button>
      ))}
    </div>
  );
}
