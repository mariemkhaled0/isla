import Image from "next/image";
import React from "react";
import kitchen from "@/src/images/kitchen.png";
import { useTranslations } from "next-intl";

function StoryHero() {
  const t = useTranslations("story");
  const storyTitle1 = t("storyHero1").split("\n");
  const storyHero2 = t("storyHero2").split("\n");
  return (
    <section className="bg-primaryBage flex w-full gap-4 justify-between lg:px-12 md:px-10 px-[18px] xsm:flex-col-reverse sxm:gap-1 xsm:items-center lg:pb-20 md:pb-10 pb-6">
      <div className="md:pt-20 pt-10 xsm:pt-2 font-normal uppercase ">
        {storyTitle1.map((item, index) => (
          <div
            key={index}
            className="text-primaryRed text-2xl xl:text-8xl lg:text-6xl md:text-5xl font-longreach"
          >
            {item}
          </div>
        ))}
        <div>
          {storyHero2.map((item, index) => (
            <div
              key={index}
              className="text-black  xl:text-6xl lg:text-4xl md:text-3xl"
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
    </section>
  );
}

export default StoryHero;
