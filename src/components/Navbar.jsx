"use client";
import Image from "next/image";
import React, { useState, useEffect, useRef } from "react";
import logo from "@/src/images/IslaLogo.png";
import banner from "@/src/images/banner.png";
import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import { FacebookIcon, InstagramIcon, LinkenIcon } from "../images/icons";
import Link from "next/link";

import LanguageSwitcher from "./LanguageSwitcher";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const menuRef = useRef(null);
  const t = useTranslations("navbar");
  const locale = useLocale();

  const handleToggleMenu = () => {
    setIsOpen((prev) => !prev);
  };

  // Close menu when clicking outside
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [isOpen]);

  return (
    <div
      className="w-full h-[150px] bg-cover bg-center flex items-center justify-center lg:px-10 md:px-10 px-4 relative z-40"
      style={{ backgroundImage: `url(${banner.src})` }}
    >
      <div className="w-full">
        <div className="flex justify-between w-full relative">
          <Image
            src={logo}
            alt="logo"
            className="lg:w-[120px] md:w-[120px] w-[90px] h-auto"
          />
          <div className="" ref={menuRef}>
            <div
              onClick={handleToggleMenu}
              className="lg:w-32 lg:h-10 w-20 h-8 cursor-pointer md:w-28 md:h-8 px-2.5 relative bg-primaryYallow rounded-3xl lg:shadow-[-6px_6px_0px_0px_rgba(60,44,19,1.00)] md:hadow-[-6px_6px_0px_0px_rgba(60,44,19,1.00)] shadow-[-4px_4px_0px_0px_rgba(60,44,19,1.00)] inline-flex justify-center items-center gap-2.5"
            >
              <button className="text-center text-black text-lg font-bold font-alexandria leading-[50px] uppercase">
                {t("menu")}
              </button>
            </div>
            {isOpen && (
              <div
                className={`z-50 font-alexandria w-[200px] rounded-3xl bg-primaryYallow border-[3px] mt-2 p-5 font-bold text-primaryRed border-primaryRed flex flex-col gap-5 justify-center items-center absolute ${
                  locale === "ar" ? "left-0" : "right-0"
                }`}
              >
                <Link href={`/${locale}/`} onClick={handleToggleMenu}>
                  <h2>{t("home")}</h2>
                </Link>
                <Link href={`/${locale}/story`} onClick={handleToggleMenu}>
                  <h2>{t("story")}</h2>
                </Link>
                <Link
                  href={`/${locale}/ourproducts`}
                  onClick={handleToggleMenu}
                >
                  <h2>{t("OurProducts")}</h2>
                </Link>
                <Link href={`/${locale}/contacts`} onClick={handleToggleMenu}>
                  <h2>{t("ContactUs")}</h2>
                </Link>
                <div className="flex">
                  <LinkenIcon />
                  <FacebookIcon />
                  <InstagramIcon />
                </div>
                <LanguageSwitcher />
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
