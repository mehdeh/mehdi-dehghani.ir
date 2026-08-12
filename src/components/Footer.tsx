import { getLocale, getTranslations } from "next-intl/server";
import { SocialIcons } from "./SocialIcons";
import { location, resumePath, shortName } from "@content/profile";
import type { Locale } from "@content/types";

export async function Footer() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("footer");

  return (
    <footer className="mt-24 border-t border-[var(--border)]">
      <div className="wide-shell flex flex-col gap-6 py-10 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-sm text-[var(--muted)]">
          <p className="text-[var(--text)]">{shortName[locale]}</p>
          <p className="mt-1">
            {location[locale]}
            <span aria-hidden="true"> · </span>
            <a
              href={resumePath}
              className="transition-colors hover:text-[var(--signal)]"
            >
              {t("resume")}
            </a>
          </p>
        </div>
        <SocialIcons locale={locale} />
      </div>
    </footer>
  );
}
