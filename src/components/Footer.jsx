"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowIcon } from "../images/icons";

export default function Footer() {
  const t = useTranslations("footer"); // تأكدي ان عندك ملف messages للـ Footer

  return (
    <footer className="bg-primaryRed text-white p-10 relative text-lg">
      <div className="w-full">
        <div className=" lg:max-w-5xl mx-auto grid w-full grid-cols-3  gap-6 text-[10px] lg:text-base md:text-base ">
          {/* Contact Info */}
          <div className="space-y-2 lg:flex  md:flex flex-col gap-4 hidden ">
            <div>
              {" "}
              <p className="font-bold">{t("addressLine1")}</p>
              <p>{t("addressLine2")}</p>
              <p>{t("addressLine3")}</p>
            </div>
            <div>
              <p>{t("phone1")}</p>
              <p>{t("phone2")}</p>
            </div>
          </div>

          {/* Quick Links */}
          <div className="space-y-2 flex flex-col opacity-75">
            <Link href="/">{t("home")}</Link>
            <Link href="/story">{t("ourStory")}</Link>
            <Link href="/products">{t("products")}</Link>
            <Link href="/contact">{t("contact")}</Link>
          </div>

          {/* Social Icons Placeholder */}
          <div className="space-y-2 flex flex-col items-start opacity-75">
            {/* Add your icons here */}
            <span>Facebook </span>
            <span>Linkedin </span>
            <span>Instagram </span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="w-10 h-10 flex items-center justify-center  bottom-10 cursor-pointer bg-white p-2 rounded-full absolute top-10 end-20"
      >
        <ArrowIcon />
      </div>
      {/* Copyright */}
      <div className="mt-10 text-sm text-gray-200 lg:text-end lg:me-40 text-center ">
        © 2019 {t("rightsReserved")}
      </div>
    </footer>
  );
}
