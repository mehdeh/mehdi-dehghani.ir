import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { DenoisePortrait } from "@/components/DenoisePortrait";
import { featuredProjects } from "@content/projects";
import { homeAxes } from "@content/interests";
import {
  fullName,
  intro,
  resumePath,
  role,
  tagline,
} from "@content/profile";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string }> };

export default async function HomePage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("home");
  const featured = featuredProjects();

  return (
    <div className="site-shell pb-20 pt-12 sm:pt-16">
      <section className="fade-in grid items-center gap-10 sm:grid-cols-[minmax(0,1fr)_220px]">
        <div>
          <p className="text-sm tracking-wide text-[var(--signal)]">{role[locale]}</p>
          <h1 className="font-display mt-3 text-4xl leading-tight sm:text-5xl">
            {fullName[locale]}
          </h1>
          <p className="mt-3 text-[var(--muted)]">{tagline[locale]}</p>
          <p className="mt-6 leading-relaxed text-[var(--text)]/90">{intro[locale]}</p>
          <div className="mt-8 flex flex-wrap gap-4 text-sm">
            <Link
              href="/about"
              className="border border-[var(--signal)] px-4 py-2 text-[var(--signal)] transition-colors hover:bg-[var(--signal)] hover:text-[var(--bg)]"
            >
              {t("readCv")}
            </Link>
            <Link
              href="/contact"
              className="border border-[var(--border)] px-4 py-2 text-[var(--muted)] transition-colors hover:text-[var(--text)]"
            >
              {t("getInTouch")}
            </Link>
            <a
              href={resumePath}
              className="px-1 py-2 text-[var(--muted)] transition-colors hover:text-[var(--signal)]"
            >
              PDF
            </a>
          </div>
        </div>
        <DenoisePortrait
          alt={fullName[locale]}
          className="mx-auto aspect-square w-full max-w-[220px] rounded-full sm:max-w-none"
        />
      </section>

      <section className="mt-20">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("axes")}
        </h2>
        <ul className="mt-6 grid gap-8 sm:grid-cols-3">
          {homeAxes.map((axis) => (
            <li key={axis.title.en}>
              <h3 className="font-display text-lg">{axis.title[locale]}</h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {axis.body[locale]}
              </p>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-20">
        <div className="flex items-baseline justify-between gap-4">
          <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
            {t("featured")}
          </h2>
          <Link
            href="/work"
            className="text-sm text-[var(--signal)] hover:text-[var(--text)]"
          >
            {t("allWork")}
          </Link>
        </div>
        <ul className="mt-6 divide-y divide-[var(--border)] border-y border-[var(--border)]">
          {featured.map((project) => (
            <li key={project.slug} className="py-5">
              <Link
                href={`/work/${project.slug}`}
                className="group flex flex-wrap items-baseline justify-between gap-2"
              >
                <span className="font-display text-xl group-hover:text-[var(--signal)]">
                  {project.title[locale]}
                </span>
                <span className="text-sm text-[var(--muted)]">{project.year}</span>
              </Link>
              <p className="mt-2 text-[var(--muted)] leading-relaxed">
                {project.summary[locale]}
              </p>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
}
