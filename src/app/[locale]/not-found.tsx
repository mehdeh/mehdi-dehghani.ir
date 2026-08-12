import { getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";

export default async function NotFound() {
  const t = await getTranslations("notFound");

  return (
    <div className="site-shell py-24">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-4 text-[var(--muted)]">{t("body")}</p>
      <Link href="/" className="mt-8 inline-block text-[var(--signal)]">
        {t("home")}
      </Link>
    </div>
  );
}
