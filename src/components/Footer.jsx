"use client";

import { useTranslations } from "next-intl";
import Link from "next/link";
import { ArrowIcon } from "../images/icons";
import { FacebookIcon, InstagramIcon, LinkenIcon } from "../images/icons";

export default function Footer() {
  const t = useTranslations("footer");
  const n = useTranslations("navbar");

  return (
    <footer className="bg-primaryRed text-white p-10 relative text-lg pt-10">
      <div className="w-full">
        <div className=" lg:max-w-5xl mx-auto lg:grid md:grid w-full lg:grid-cols-3 md:grid-cols-3  flex flex-col-reverse   gap-6 text-[10px] lg:text-base md:text-base ">
          {/* Contact Info */}
          <div className="space-y-2 lg:flex  md:flex flex-col gap-4 hidden ">
            <div>
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

          <div className="md:space-y-2 flex md:flex-col lg:flex-col gap-5 flex-row justify-center opacity-75">
            <Link href="/">{n("home")}</Link>
            <Link href="/story">{n("story")}</Link>
            <Link href="/ourproducts">{n("OurProducts")}</Link>
            <Link href="/contacts">{n("ContactUs")}</Link>
          </div>

          {/* Social Icons Placeholder */}
          <div className="md:space-y-2 flex md:flex-col lg:flex-col gap-2 flex-row justify-center opacity-75">
            {/* Add your icons here */}
            <span>
              <FacebookIcon className={"text-white"} />
            </span>
            <span>
              <LinkenIcon />
            </span>
            <span>
              <InstagramIcon />
            </span>
          </div>
        </div>
      </div>

      {/* Back to top button */}
      <div
        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        className="absolute top-10 cursor-pointer w-10 h-10 flex items-center justify-center bg-white p-2 rounded-full start-6 md:start-auto md:end-20 lg:end-20"
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
