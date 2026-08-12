import type { Metadata } from "next";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { SocialIcons } from "@/components/SocialIcons";
import {
  email,
  location,
  phoneDisplay,
  phoneHref,
} from "@content/profile";
import type { Locale } from "@content/types";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "contact" });
  return { title: t("title") };
}

export default async function ContactPage({ params }: Props) {
  const { locale: loc } = await params;
  setRequestLocale(loc);
  const locale = loc as Locale;
  const t = await getTranslations("contact");

  return (
    <div className="site-shell pb-20 pt-12">
      <h1 className="font-display text-4xl">{t("title")}</h1>
      <p className="mt-4 max-w-xl text-[var(--muted)]">{t("lead")}</p>

      <dl className="mt-10 space-y-6">
        <div>
          <dt className="text-sm text-[var(--signal)]">{t("email")}</dt>
          <dd className="mt-1">
            <a
              href={`mailto:${email}`}
              className="text-lg hover:text-[var(--signal)]"
            >
              {email}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-[var(--signal)]">{t("phone")}</dt>
          <dd className="mt-1">
            <a href={phoneHref} className="text-lg hover:text-[var(--signal)]" dir="ltr">
              {phoneDisplay}
            </a>
          </dd>
        </div>
        <div>
          <dt className="text-sm text-[var(--signal)]">{t("location")}</dt>
          <dd className="mt-1 text-lg">{location[locale]}</dd>
        </div>
      </dl>

      <section className="mt-14">
        <h2 className="font-display text-sm tracking-widest text-[var(--muted)] uppercase">
          {t("elsewhere")}
        </h2>
        <div className="mt-5 text-[var(--text)]">
          <SocialIcons locale={locale} labeled />
        </div>
      </section>
    </div>
  );
}
