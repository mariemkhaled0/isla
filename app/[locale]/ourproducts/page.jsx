import Product from "@/src/components/Product";
import React from "react";
import TOMATOPASTE from "@/src/images/TOMATOPASTE.png";
import salsa1 from "@/src/images/salsa2.png";
import sauces from "@/src/images/sauces.png";
import tomatoSause from "@/src/images/tomatoSause.png";
import spices from "@/src/images/spices.png";

import jam from "@/src/images/productJam.png";
import Marquee from "react-fast-marquee";
import { StarIcon } from "@/src/images/icons";
import ProductsTitle from "@/src/components/ProductsTitle";

function page() {
  const repeatCount = 20;

  const data = [
    {
      title: "tomatoPaste",
      desc: "tomatoDesc",
      img: TOMATOPASTE,
    },
    {
      title: "sauces",
      desc: "saucesDesc",
      img: sauces,
    },
    {
      title: "sauces",
      desc: "saucesDesc",
      img: tomatoSause,
    },
    {
      title: "spices",
      desc: "spicesDesc",
      img: spices,
    },
    {
      title: "jam",
      desc: "janDesc",
      img: jam,
    },
  ];
  return (
    <section className="">
      <div
        style={{ backgroundImage: `url(${salsa1.src})` }}
        className="bg-center bg-cover -mt-6 pb-20"
      >
        <ProductsTitle />
        <div className="w-full flex justify-center pb-6 ">
          <div className="lg:mt-20 md:mt-16  mt-10 space-y-10">
            {data.map((item, index) => (
              <Product
                key={index}
                title={item.title}
                desc={item.desc}
                img={item.img}
              />
            ))}
          </div>
        </div>
        <div dir="ltr" className="pt-10 ">
          <Marquee gradient={false} speed={90}>
            {Array.from({ length: repeatCount }).map((_, idx) => (
              <span
                key={idx}
                className="mx-5  text-sm flex  gap-4 font-alexandria "
              >
                100% PURE
                <StarIcon className="mt-1.5" />
              </span>
            ))}
          </Marquee>
        </div>
      </div>
    </section>
  );
}

export default page;
