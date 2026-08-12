import { getLocale, getTranslations } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import { LanguageSwitch } from "./LanguageSwitch";
import { shortName } from "@content/profile";
import type { Locale } from "@content/types";

export async function Header() {
  const locale = (await getLocale()) as Locale;
  const t = await getTranslations("nav");

  const items = [
    { href: "/work" as const, label: t("work") },
    { href: "/about" as const, label: t("about") },
    { href: "/publications" as const, label: t("publications") },
    { href: "/teaching" as const, label: t("teaching") },
    { href: "/contact" as const, label: t("contact") },
  ];

  return (
    <header className="sticky top-0 z-40 border-b border-[var(--border)] bg-[rgba(14,17,22,0.84)] backdrop-blur-md">
      <div className="wide-shell flex flex-wrap items-center justify-between gap-x-6 gap-y-3 py-4">
        <Link href="/" className="font-display text-lg tracking-tight text-[var(--text)]">
          {shortName[locale]}
        </Link>
        <nav className="flex flex-wrap items-center gap-x-4 gap-y-2 text-sm text-[var(--muted)]">
          {items.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="transition-colors hover:text-[var(--signal)]"
            >
              {item.label}
            </Link>
          ))}
          <LanguageSwitch />
        </nav>
      </div>
    </header>
  );
}
