import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { Link } from "@/i18n/navigation";
import { getProject, projects } from "@content/projects";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string; slug: string }> };

export function generateStaticParams() {
  return projects.flatMap((project) =>
    (["en", "fa"] as const).map((locale) => ({
      locale,
      slug: project.slug,
    })),
  );
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale, slug } = await params;
  const project = getProject(slug);
  if (!project) return {};
  return {
    title: project.title[locale as Locale],
    description: project.summary[locale as Locale],
  };
}

export default async function ProjectPage({ params }: Props) {
  const { locale: loc, slug } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const project = getProject(slug);
  if (!project) notFound();
  const t = await getTranslations("work");

  return (
    <div className="site-shell pb-20 pt-12">
      <Link
        href="/work"
        className="text-sm text-[var(--muted)] hover:text-[var(--signal)]"
      >
        ← {t("back")}
      </Link>
      <p className="mt-8 text-sm text-[var(--muted)]">{project.year}</p>
      <h1 className="font-display mt-2 text-4xl">{project.title[locale]}</h1>
      {project.draft ? (
        <p className="mt-3 text-sm text-[var(--warm)]">{t("draft")}</p>
      ) : null}
      <div className="mt-8 space-y-4 leading-relaxed text-[var(--text)]/90">
        {project.body[locale].map((para) => (
          <p key={para}>{para}</p>
        ))}
      </div>
      <div className="mt-8 flex flex-wrap gap-4 text-sm">
        <a
          href={project.repo}
          target="_blank"
          rel="noopener noreferrer"
          className="text-[var(--signal)] hover:text-[var(--text)]"
        >
          {t("repo")}
        </a>
        {project.demo ? (
          <a
            href={project.demo}
            target="_blank"
            rel="noopener noreferrer"
            className="text-[var(--signal)] hover:text-[var(--text)]"
          >
            {t("demo")}
          </a>
        ) : null}
      </div>
    </div>
  );
}
