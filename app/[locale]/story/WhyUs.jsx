import Image from "next/image";
import React from "react";
import jam from "@/src/images/jam.png";

function WhyUs() {
  return (
    <section className="bg-primaryGreen h-[700px] -mt-48 z-10 relative">
      <div className="pt-60 flex justify-center items-center">
        <div className="flex relative  justify-center">
          <h3 className="lg:text-[250px] md:text-[170px] text-[150px] text-center font-longreach lg:leading-[210px] md:leading-[150px] leading-[150px]">
            WHY
            <br />
            US
          </h3>
          <Image
            src={jam}
            alt="jam_img"
            className="lg:w-[300px] md:w-[200px] w-[170px] h-auto absolute  md:-right-20 -right-10"
          />
        </div>
      </div>
    </section>
  );
}

export default WhyUs;
