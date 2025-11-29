"use client";
import { useRouter, usePathname, useSearchParams } from "next/navigation";
import { useLocale } from "next-intl";

export default function LanguageSwitcher() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();
  const currentLocale = useLocale(); // Use next-intl's locale hook

  const switchLanguage = (lang) => {
    // Remove the current locale from pathname
    const pathWithoutLocale = pathname.replace(/^\/(en|ar)/, "");

    // Build new path with selected language
    const newPath = `/${lang}${pathWithoutLocale}${
      searchParams.toString() ? `?${searchParams.toString()}` : ""
    }`;

    router.push(newPath);
  };

  return (
    <div className="flex gap-2 bg-black p-2 text-primaryYallow rounded-3xl text-[10px]">
      <span
        className={`cursor-pointer px-2 rounded-3xl ${
          currentLocale === "ar" ? "bg-primaryYallow text-black" : ""
        }`}
        onClick={() => switchLanguage("ar")}
      >
        العربيه
      </span>
      <span
        className={`cursor-pointer px-2 rounded-3xl ${
          currentLocale === "en" ? "bg-white text-black" : ""
        }`}
        onClick={() => switchLanguage("en")}
      >
        English
      </span>
    </div>
  );
}
