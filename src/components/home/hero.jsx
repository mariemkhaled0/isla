import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import homeProducts from "@/src/images/homeProducts.png";
import Image from "next/image";
import Link from "next/link";
import vector from "@/src/images/vector.png";
import vectorLeft from "@/src/images/vectorLeft.png";
export default function HeroText() {
  const t = useTranslations("hero");
  const locale = useLocale();
  const isArabic = locale === "ar";

  const lines = t("heroText").split("\n");

  return (
    <div
      className={`pb-20  pt-14 body-container ${
        isArabic ? "font-wingx" : "font-longreach"
      }`}
    >
      <div className="flex lg:flex-row md:flex-row flex-col-reverse justify-between items-center ">
        <div>
          <h2 className="lg:text-4xl md:3xl font-alexandria text-darkGreen py-4">
            {t("herotitle")}
          </h2>
          <div className="xl:text-8xl lg:text-6xl md:text-5xl text-5xl w-full">
            {lines.map((line, idx) =>
              isArabic ? (
                <div
                  key={idx}
                  dangerouslySetInnerHTML={{
                    __html: line.replace(
                      "الطبيعة",
                      `<span style="color: #014722;">الطبيعة</span>`
                    ),
                  }}
                />
              ) : (
                <div key={idx}>{line}</div>
              )
            )}
          </div>
        </div>
        <div className="relative">
          <Image
            src={vector}
            alt="vector"
            className="w-auto h-auto absolute right-0"
          />
          <Image
            alt="product_img"
            className="h-auto xl:w-[700px] lg:w-[500px] md:w-[400px]"
            src={homeProducts}
          />
          <Image
            src={vectorLeft}
            alt="vector"
            className="w-auto h-auto absolute left-0 lg:top-36 md:top-16 top-10"
          />
        </div>
      </div>
      <div className="w-f text-center font-alexandria underline text-darkGreen lg:pt-10 md:pt-10 pt-8 lg:text-3xl text-xl">
        <Link href="/story">{t("herostory")}</Link>
      </div>
    </div>
  );
}
