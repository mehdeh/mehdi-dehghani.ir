import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { CopyBibtex } from "@/components/CopyBibtex";
import { publications } from "@content/publications";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "publications" });
  return { title: t("title") };
}

export default async function PublicationsPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("publications");

  return (
    <div className="site-shell pb-20 pt-12">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-2xl text-[var(--muted)]">{t("lead")}</p>
      <ol className="mt-10 space-y-8">
        {publications.map((paper, index) => (
          <li
            key={paper.id}
            className="border-s-2 border-[var(--signal)]/40 ps-4"
          >
            <p className="text-sm text-[var(--muted)]">
              [{index + 1}] {paper.year}
            </p>
            <h2 className="font-display mt-1 text-2xl">{paper.title}</h2>
            <p className="mt-2 text-[var(--muted)]">{paper.authors}</p>
            <p className="mt-1 italic text-[var(--text)]/80">
              {paper.venue[locale]}
            </p>
            <CopyBibtex
              value={paper.bibtex}
              copyLabel={t("copy")}
              copiedLabel={t("copied")}
            />
          </li>
        ))}
      </ol>
    </div>
  );
}
