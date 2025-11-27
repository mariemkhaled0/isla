import Image from "next/image";
import React from "react";
import jam from "@/src/images/jam.png";
import { useLocale, useTranslations } from "use-intl";
import jamAr from "@/src/images/jamAr.png";

function WhyUs() {
  const t = useTranslations("story");
  const whyUs = t("whyUs").split("\n");

  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section className="bg-primaryGreen lg:h-[750px] md:h-[750px] h-[600px] -mt-48 z-10 relative">
      <div className="pt-60 flex justify-center items-center">
        <div className="flex relative  justify-center">
          <h3 className="  lg:leading-[210px] md:leading-[150px] leading-[120px] xsm:leading-[90px]">
            {whyUs.map((item, indx) => (
              <div
                className={`${
                  isArabic ? "lg:text-[200px]" : "lg:text-[250px]"
                } md:text-[170px] text-center ${
                  isArabic
                    ? "font-wingx text-[130px] py-3 xs:text-[100px] xxs:text-[80px]"
                    : "font-longreach text-[150px]  "
                }`}
                key={indx}
              >
                {item}
              </div>
            ))}
          </h3>
          <Image
            src={isArabic ? jamAr : jam}
            alt="jam_img"
            className={`lg:w-[300px] md:w-[260px]  h-auto absolute  ${
              isArabic
                ? "md:-left-36 lg:-left-48 -left-16 md:top-4 top-14  w-[150px]"
                : "md:-right-20 -right-10 w-[170px]"
            }`}
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
