"use client";

import { useLocale } from "next-intl";
import { Link, usePathname } from "@/i18n/navigation";

export function LanguageSwitch() {
  const locale = useLocale();
  const pathname = usePathname();
  const other = locale === "en" ? "fa" : "en";
  const label = other === "fa" ? "فارسی" : "English";

  return (
    <Link
      href={pathname}
      locale={other}
      hrefLang={other}
      className="text-sm text-[var(--muted)] transition-colors hover:text-[var(--signal)]"
      aria-label={locale === "fa" ? "Language" : "زبان"}
    >
      {label}
    </Link>
  );
}
