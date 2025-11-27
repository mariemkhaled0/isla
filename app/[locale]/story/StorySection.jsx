import React from "react";
import tomatoBG from "@/src/images/tomatoBG.png";
import { useLocale, useTranslations } from "next-intl";
import spicy from "@/src/images/spicy.png";
import pepper from "@/src/images/pepper.png";
import Image from "next/image";
import Link from "next/link";

function StorySection() {
  const t = useTranslations("story");
  const locale = useLocale();
  const isArabic = locale === "ar";

  return (
    <section
      className="bg-cover bg-center  h-auto xl:-mt-40 lg:-mt-20  md:-mt-20 -mt-10 lg:pt-48 md:pt-40 pt-20 font-alexandria text-center pb-20"
      style={{ backgroundImage: `url(${tomatoBG.src})` }}
    >
      <div className="bg-primaryGreen w-3/4 mx-auto  p-10 relative">
        <div
          className={`uppercase font-bold lg:text-8xl md:text-7xl text-4xl ${
            isArabic ? "font-wingx" : "font-longreach"
          } `}
        >
          {t("ourStory")}
        </div>
        <div className="xl:w-[80%] w-[90%] mx-auto h-1.5 md:my-10 my-5 bg-white "></div>
        <div className="w-full flex justify-center">
          <p className="max-w-[50ch] lg:text-2xl md:text-base text-[10px] lg:leading-10 md:leading font-medium">
            {t("ourStoryDesc")}
          </p>
        </div>

        <Image
          src={spicy}
          alt="spicy_img"
          className="lg:w-[200px] md:w-[150px] w-[100px] h-auto absolute lg:-top-[120px] md:-top-[130px] -top-[80px] -end-10"
        />
        {/*section two */}
        <div className="xl:w-[80%] w-[90%] mx-auto h-1.5 md:my-10 my-5 bg-white "></div>
        <div
          className={`uppercase font-bold lg:text-7xl md:text-6xl text-3xl ${
            isArabic ? "font-wingx" : "font-longreach"
          } `}
        >
          {t("ourSECRET")}
        </div>
        <div className="w-full flex justify-center lg:pt-14 md:pt-7 pt-5">
          <p className="max-w-[50ch] lg:text-2xl md:text-base text-[10px] lg:leading-10 md:leading-7 font-medium">
            {t("ourSecretDes")}
          </p>
        </div>
        <div className="xl:w-[80%] w-[90%] mx-auto h-1.5 md:my-10 my-5 bg-white "></div>
        <div className="w-full flex justify-center lg:pt-14">
          <p
            className={`max-w-[50ch] lg:text-3xl md:text-xl text-[10px] font-medium  uppercase  lg:leading-[51px] ${
              isArabic ? "font-wingx" : "font-longreach"
            } `}
          >
            {t("weDontUseDesc")}
          </p>
        </div>
        <div className="underline lg:text-3xl md:text-xl  text-sm xl:py-16 md:py-10 py-6">
          <Link href="/ourproducts">{t("OurProducts")}</Link>
        </div>
        <Image
          src={pepper}
          alt="spicy_img"
          className="lg:w-[200px] md:w-[150px] w-[100px] h-auto absolute lg:-bottom-10 md:-bottom-10 -bottom-5 -start-10"
        />
      </div>
    </section>
  );
}

export default StorySection;
