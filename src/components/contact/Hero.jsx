import React from "react";
import farmBg from "@/src/images/farmBg.png";
import darkGreenBg from "@/src/images/darkbg.png";
import grediant from "@/src/images/grediant.png";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";
export default function Hero() {
  const t = useTranslations("conatct");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section
      style={{ backgroundImage: `url(${farmBg.src})` }}
      className=" relative bg-cover bg-center flex justify-center lg:h-[700px] md:h-[500px] h-[450px] -mt-5"
    >
      <div
        style={{ backgroundImage: `url(${grediant.src})` }}
        className="absolute inset-0 bg-cover bg-center"
      ></div>

      <div className=" absolute -translate-x-1/2 -translate-y-1/2 left-1/2 top-1/2 text-center">
        <h3
          className={` lg:text-9xl md:text-8xl text-6xl ${
            isArabic ? "font-wingx" : "font-longreach"
          }`}
        >
          {t("PureandAuthentic")}
        </h3>
        <p className="lg:text-3xl md:text-2xl lg:pt-7 pt-4 uppercase">
          {t("contactHeroDesc")}
        </p>
      </div>
    </section>
  );
}
