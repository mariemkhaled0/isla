import React from "react";
import darkGreenGg from "@/src/images/darkbg.png";
import { useLocale } from "next-intl";
import { useTranslations } from "use-intl";

function VisionMission() {
  const t = useTranslations("story");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section
      style={{ backgroundImage: `url(${darkGreenGg.src})` }}
      className="bg-right-bottom  bg-cover  lg:h-[720px] md:h-[400px] h-[720px] flex justify-center pt-14 px-20 text-center relative z-20"
    >
      <div className="flex flex-col md:flex-row lg:gap-48 gap-10">
        <div>
          <h3
            className={`${
              isArabic ? "font-wingx" : "font-longreach"
            } lg:text-6xl  text-3xl `}
          >
            {t("vision")}
          </h3>
          <p className="xl:text-xl  lg:text-base text-[10px] xl:leading-10 mt-10">
            {t("visionDesc")}
          </p>
        </div>
        <div>
          <h3
            className={`${
              isArabic ? "font-wingx" : "font-longreach"
            } lg:text-6xl text-3xl`}
          >
            {t("mission")}
          </h3>
          <p className="xl:text-xl  lg:text-base text-[10px] xl:leading-10 mt-10">
            {t("missionDesc")}
          </p>
        </div>
      </div>
    </section>
  );
}

export default VisionMission;
