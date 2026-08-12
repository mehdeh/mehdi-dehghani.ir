import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { teachingLead, teachingTopics } from "@content/teaching";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "teaching" });
  return { title: t("title") };
}

export default async function TeachingPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("teaching");

  return (
    <div className="site-shell pb-20 pt-12">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-6 leading-relaxed text-[var(--text)]/90">
        {teachingLead[locale]}
      </p>
      <ul className="mt-12 grid gap-8 sm:grid-cols-3">
        {teachingTopics.map((topic) => (
          <li key={topic.title.en} className="border-t border-[var(--border)] pt-4">
            <h2 className="font-display text-xl">{topic.title[locale]}</h2>
            <p className="mt-3 text-sm leading-relaxed text-[var(--muted)]">
              {topic.body[locale]}
            </p>
          </li>
        ))}
      </ul>
      <p className="mt-12 text-[var(--muted)]">
        <Link href="/contact" className="text-[var(--signal)] hover:text-[var(--text)]">
          {t("contactCta")}
        </Link>
      </p>
    </div>
  );
}
