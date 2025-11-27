"use client";
import Marquee from "react-fast-marquee";
import { useTranslations } from "next-intl";
import { StarIcon } from "@/src/images/icons";
import StoryHero from "./StoryHero";
import StorySection from "./StorySection";
import VisionMission from "./VisionMission";
import WhyUs from "./WhyUs";
import LastSection from "./LastSection";

export default function Page() {
  const t = useTranslations("story");
  const repeatCount = 20;

  return (
    <div className="-mt-4 bg-primaryRed pt-14">
      <div dir="ltr">
        <Marquee gradient={false} speed={90}>
          {Array.from({ length: repeatCount }).map((_, idx) => (
            <span
              key={idx}
              className="mx-5  text-xl flex  gap-4 font-alexandria"
            >
              ISLA FOODS
              <StarIcon className="mt-1.5" />
            </span>
          ))}
        </Marquee>
      </div>
      <StoryHero />
      <StorySection />
      <div dir="ltr">
        <Marquee gradient={false} speed={90}>
          {Array.from({ length: repeatCount }).map((_, idx) => (
            <span
              key={idx}
              className="mx-10  text-xl flex  gap-4 font-alexandria"
            >
              FOLLOW US @ISLAFOOD.EG
              <StarIcon className="mt-1.5" />
            </span>
          ))}
        </Marquee>
      </div>
      <VisionMission />
      <WhyUs />
      {/* <LastSection /> */}
    </div>
  );
}
