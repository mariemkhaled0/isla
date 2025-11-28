import Image from "next/image";
import React from "react";
import icon from "@/src/images/icon.png";
import Link from "next/link";
import { useTranslations } from "next-intl";

export default function LastSection() {
  const t = useTranslations("story");

  const data = [
    "weBelieve",
    "everyIngredient",
    "qualityIsntAClaim",
    "withEsla",
  ];

  return (
    <section className="px-6 py-16 md:py-20 lg:py-24 lg:px-20 flex justify-center w-full">
      <div className="w-full ">
        <div
          className="
            grid 
            grid-cols-1 
            sm:grid-cols-2 
            gap-8 
            md:gap-10 
            lg:gap-12
            items-start
          "
        >
          {data.map((item, index) => (
            <div key={index} className="flex items-start gap-4">
              <Image alt="icon" src={icon} className="w-6 h-6" />
              <p className="text-lg sm:text-xl lg:text-2xl max-w-[45ch] leading-relaxed">
                {t(item)}
              </p>
            </div>
          ))}
        </div>

        <div className="w-full text-center pt-16 md:pt-20">
          <Link
            href="/contacts"
            className="underline text-lg md:text-xl hover:opacity-80 transition"
          >
            {t("contactUs")}
          </Link>
        </div>
      </div>
    </section>
  );
}
