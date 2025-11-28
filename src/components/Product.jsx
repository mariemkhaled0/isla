import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";
import React from "react";

function Product({ title, desc, img }) {
  const t = useTranslations("products");
  const titleSplit = t(title).split("\n");
  const locale = useLocale();
  const isArabic = locale === "ar";
  return (
    <section className="bg-primaryGreen lg:px-10 px-6 lg:pb-14 md:pb-6 pb-5  lg:pt-14 pt-6 lg:w-[670px] md:w-[600px] w-[350px] rounded-3xl xsm:w-[300px]">
      <div className=" lg:pb-10 md:pb-10 pb-5">
        {titleSplit.map((title, index) => (
          <h3
            className={`text-center lg:text-3xl md:text-2xl text-lg uppercase ${
              isArabic &&
              index == titleSplit.length - 1 &&
              "lg:py-3 md:py-2 py-1"
            }`}
            key={index}
          >
            {title}
          </h3>
        ))}
      </div>
      <div className="flex gap-2 justify-between w-full">
        <p className="text-[9px] md:text-base lg:text-base">{t(desc)}</p>
        <Image
          src={img}
          alt="product_img"
          className="h-auto lg:w-auto md:w-auto w-[120px] object-contain"
        />
      </div>
    </section>
  );
}

export default Product;
