"use client";
import Image from "next/image";
import React, { useState } from "react";
import logo from "@/src/images/IslaLogo.png";
import banner from "@/src/images/banner.png";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { FacebookIcon, InstagramIcon, LinkenIcon } from "../images/icons";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("navbar");
  const locale = useLocale(); // 'en' أو 'ar'
  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };
  return (
    <div
      className="w-full h-[150px] bg-cover bg-center flex items-center justify-center px-10"
      style={{ backgroundImage: `url(${banner.src})` }} // important for next/image import
    >
      <div className="w-full">
        <div className="flex justify-between w-full relative">
          <Image src={logo} alt="logo" className="w-auto h-auto" />
          <div className=" ">
            <div className="lg:w-32 lg:h-10 w-20 h-8 cursor-pointer md:w-28 md:h-8 px-2.5 relative bg-primaryYallow rounded-3xl lg:shadow-[-6px_6px_0px_0px_rgba(60,44,19,1.00)] md:hadow-[-6px_6px_0px_0px_rgba(60,44,19,1.00)] shadow-[-4px_4px_0px_0px_rgba(60,44,19,1.00)] inline-flex justify-center items-center gap-2.5">
              <button
                onClick={handleToggleMenu}
                className=" text-center  text-black text-2xl font-bold font-['DIN_Next_LT_Arabic'] leading-[50px]"
              >
                {t("menu")}
              </button>
            </div>
            {isOpen && (
              <div
                className={`w-[200px] rounded-3xl bg-primaryYallow border-[3px] mt-2 p-4  font-bold text-primaryRed border-primaryRed flex flex-col gap-5 justify-center items-center absolute ${
                  locale === "ar" ? "left-0" : "right-0"
                }`}
              >
                <h2>{t("main")}</h2>
                <h2>{t("story")}</h2>
                <h2>{t("OurProducts")}</h2>
                <h2>{t("ContactUs")}</h2>
                <div className="flex">
                  <LinkenIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
