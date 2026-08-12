import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ProjectCard } from "@/components/ProjectCard";
import {
  groupIntros,
  groupLabels,
  groupOrder,
  projectsByGroup,
} from "@content/projects";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "work" });
  return { title: t("title") };
}

export default async function WorkPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("work");

  return (
    <div className="site-shell pb-20 pt-12">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-2xl leading-relaxed text-[var(--muted)]">
        {t("lead")}
      </p>

      {groupOrder.map((group) => {
        const items = projectsByGroup(group);
        return (
          <section key={group} className="mt-16">
            <h2 className="font-display text-2xl">{groupLabels[group][locale]}</h2>
            <p className="mt-2 text-sm text-[var(--muted)]">
              {groupIntros[group][locale]}
            </p>
            <div className="mt-6">
              {items.map((project) => (
                <ProjectCard
                  key={project.slug}
                  project={project}
                  locale={locale}
                  draftLabel={t("draft")}
                />
              ))}
            </div>
          </section>
        );
      })}
    </div>
  );
}
