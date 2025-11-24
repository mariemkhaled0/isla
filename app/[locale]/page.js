import LanguageSwitcher from "@/src/components/LanguageSwitcher";
import { useTranslations } from "next-intl";

export default function Home() {
  const t = useTranslations("home");
  return <h1 className="">{t("title")}</h1>;
}
