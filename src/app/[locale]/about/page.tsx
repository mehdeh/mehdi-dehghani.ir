import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { Portrait } from "@/components/Portrait";
import { education } from "@content/education";
import { experience } from "@content/experience";
import { honors } from "@content/honors";
import { allInterests } from "@content/interests";
import {
  aboutLead,
  academicNote,
  fullName,
  resumePath,
} from "@content/profile";
import { skills } from "@content/skills";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about" });
  return { title: t("title") };
}

export default async function AboutPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("about");

  return (
    <div className="site-shell pb-20 pt-12">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <div className="mt-10 grid items-start gap-10 sm:grid-cols-[1fr_240px]">
        <div>
          <p className="leading-relaxed text-[var(--text)]/90">{aboutLead[locale]}</p>
          <a
            href={resumePath}
            className="mt-6 inline-block text-sm text-[var(--signal)] hover:text-[var(--text)]"
          >
            {t("resume")}
          </a>
        </div>
        <Portrait
          alt={fullName[locale]}
          objectPosition="50% 40%"
          className="aspect-[4/5] w-full max-w-[240px] rounded-sm"
        />
      </div>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("education")}
        </h2>
        <ul className="mt-6 space-y-8">
          {education.map((item) => (
            <li key={item.degree.en} className="border-s-2 border-[var(--signal)]/40 ps-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl">
                  {item.degree[locale]}
                  <span className="text-[var(--muted)]"> · {item.field[locale]}</span>
                </h3>
                <span className="text-sm text-[var(--muted)]">{item.dates[locale]}</span>
              </div>
              <p className="mt-1 text-[var(--muted)]">{item.place[locale]}</p>
              <ul className="mt-2 space-y-1 text-sm text-[var(--text)]/80">
                {item.notes[locale].map((note) => (
                  <li key={note}>{note}</li>
                ))}
              </ul>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("experience")}
        </h2>
        <ol className="mt-6 space-y-8">
          {experience.map((item) => (
            <li key={item.org.en} className="border-s border-[var(--border)] ps-4">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="font-display text-xl">{item.org[locale]}</h3>
                <span className="text-sm text-[var(--muted)]">{item.dates[locale]}</span>
              </div>
              <p className="text-sm text-[var(--muted)]">{item.place[locale]}</p>
              <ul className="mt-2 list-disc space-y-1 ps-5 text-[var(--text)]/80">
                {item.bullets[locale].map((bullet) => (
                  <li key={bullet}>{bullet}</li>
                ))}
              </ul>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("interests")}
        </h2>
        <ul className="mt-6 space-y-2 text-[var(--text)]/85">
          {allInterests[locale].map((item) => (
            <li key={item} className="flex gap-3">
              <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[var(--signal)]" />
              <span>{item}</span>
            </li>
          ))}
        </ul>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("skills")}
        </h2>
        <dl className="mt-6 grid gap-4">
          {skills.map((group) => (
            <div
              key={group.label.en}
              className="grid gap-1 sm:grid-cols-[160px_1fr]"
            >
              <dt className="text-sm text-[var(--signal)]">{group.label[locale]}</dt>
              <dd className="text-[var(--text)]/85">{group.items}</dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("honors")}
        </h2>
        <div className="mt-6 space-y-8">
          {honors.map((group) => (
            <div key={group.title.en}>
              <h3 className="font-display text-lg text-[var(--warm)]">
                {group.title[locale]}
              </h3>
              <ul className="mt-3 space-y-2 text-[var(--text)]/85">
                {group.items[locale].map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("academic")}
        </h2>
        <p className="mt-4 leading-relaxed text-[var(--muted)]">
          {academicNote[locale]}
        </p>
      </section>
    </div>
  );
}
