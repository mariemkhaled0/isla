import Image from "next/image";
import React from "react";
import kitchen from "@/src/images/kitchen.png";
import { useLocale, useTranslations } from "next-intl";

function StoryHero() {
  const t = useTranslations("story");
  const storyTitle1 = t("storyHero1").split("\n");
  const storyHero2 = t("storyHero2").split("\n");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section className="w-full">
      <div className="bg-primaryBage z-10 relative  flex w-full gap-4 justify-between lg:px-12 md:px-10 px-[18px] xsm:flex-col-reverse sxm:gap-1 xsm:items-center ">
        <div className="md:pt-20 pt-10 xsm:pt-2 font-normal md:space-y-2 uppercase ">
          {storyTitle1.map((item, index) => (
            <div
              key={index}
              className={`text-primaryRed text-2xl xl:text-8xl lg:text-6xl md:text-5xl ${
                isArabic ? "font-wingx py-4" : "font-longreach"
              }`}
            >
              {item}
            </div>
          ))}
          <div>
            {storyHero2.map((item, index) => (
              <div
                key={index}
                className="text-black  xl:text-6xl lg:text-4xl md:text-3xl  md:py-2"
              >
                {index === 0 && '"'}
                {item}
                {index === storyHero2.length - 1 && '"'}
              </div>
            ))}
          </div>
        </div>
        <Image
          src={kitchen}
          alt="kitchen_img"
          className="xl:w-[700px] lg:w-[500px] md:w-[300px] w-[200px] xsm:w-[250px]  h-auto"
        />
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1024 358"
        fill="none"
        className="w-full h-full block xl:-mt-80  md:-mt-40 -mt-10 z-0 relative"
      >
        <path
          d="M-20.0064 296.197C15.2498 290.026 67.7722 284.134 130.473 290.297C212.368 298.35 243.148 320.225 311.427 338.648C425.644 369.471 523.05 357.77 649.169 342.625C750.107 330.505 782.666 315.023 871.427 318.778C935.773 321.506 988.468 332.937 1024.01 342.625V0C302.397 0.189001 -12.4077 0.172566 -20.0064 0C-20.03 0 -20.0378 0 -20.0536 0C-29.4222 0.460175 -26.4094 138.176 -20.0064 296.197Z"
          fill="#EEE6DC"
        />
      </svg>
    </section>
  );
}

export default StoryHero;
