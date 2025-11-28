import Image from "next/image";
import React from "react";
import icon from "@/src/images/icon.png";
import { useLocale, useTranslations } from "next-intl";

function ProductsTitle() {
  const locale = useLocale();
  const isArabic = locale === "ar";
  const t = useTranslations("navbar");

  return (
    <div className="pt-14 md:pt-16 lg:pt-20 flex justify-center">
      <div
        className="
          flex items-center justify-center gap-3 md:gap-5
          bg-primaryGreen rounded-xl w-fit
          px-6 py-3 md:px-10 md:py-6
          text-3xl sm:text-4xl md:text-5xl lg:text-7xl
          text-center
        "
      >
        {/* Left Icon */}
        <Image
          src={icon}
          alt="star_icon"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]"
        />

        {/* Title */}
        <span className={`${isArabic ? "font-wingx" : "font-longreach"}`}>
          {t("OurProducts")}
        </span>

        {/* Right Icon */}
        <Image
          src={icon}
          alt="star_icon"
          className="w-5 h-5 md:w-6 md:h-6 lg:w-[24px] lg:h-[24px]"
        />
      </div>
    </div>
  );
}

export default ProductsTitle;
