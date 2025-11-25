import Hero from "@/src/components/home/hero";
import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return (
    <div className="bg-primaryGreen ">
      <Hero />
    </div>
  );
}
