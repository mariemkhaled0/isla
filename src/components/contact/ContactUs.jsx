import React from "react";
import strawberryBg from "@/src/images/strawberryBg.png";
import { useLocale, useTranslations } from "next-intl";
import addSomeFlavor from "@/src/images/addSomeFlavor.png";
import Image from "next/image";

function ContactUs() {
  const t = useTranslations("conatct");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const contactFields = [
    "addministration",
    "DomesticSales",
    "factory",
    "forExport",
  ];

  return (
    <section
      className=" relative bg-cover bg-center flex justify-center "
      style={{ backgroundImage: `url(${strawberryBg.src})` }}
    >
      <div className="py-20">
        <Image
          alt="img"
          className="lg:w-[160px] md:w-[150px] w-[120px] h-auto absolute lg:-top-10 md:-top-10 -top-4 left-1/2 -translate-x-1/2  "
          src={addSomeFlavor}
        />
        <div className="bg-primaryGreen lg:p-20 md:p-10 p-6 lg:w-[600px] md:w-[550px] w-[300px] text-center ">
          <h3
            className={`lg:text-7xl md:text-7xl text-4xl ${
              isArabic ? "font-wingx" : "font-longreach"
            }`}
          >
            {t("contactus")}
          </h3>

          <div className="mt-10 space-y-6">
            {contactFields.map((field) => (
              <div key={field} className="text-lg">
                {t(field)
                  .split("\n")
                  .map((line, index) => (
                    <p
                      className={`${
                        index == 0 ? "text-2xl font-bold py-2" : ""
                      }`}
                      key={index}
                    >
                      {line}
                    </p>
                  ))}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default ContactUs;
