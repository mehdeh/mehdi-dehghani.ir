import { socials } from "@content/profile";
import type { Locale } from "@content/types";

function Icon({ id }: { id: (typeof socials)[number]["id"] }) {
  const common = {
    width: 18,
    height: 18,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
    "aria-hidden": true,
  };

  switch (id) {
    case "github":
      return (
        <svg {...common}>
          <path d="M9 19c-4.3 1.4-4.3-2.1-6-2.5M15 21v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6a4.6 4.6 0 0 0-1.3-3.2 4.2 4.2 0 0 0-.1-3.2s-1.1-.3-3.5 1.3a12.3 12.3 0 0 0-6.2 0C6.5 2.8 5.4 3.1 5.4 3.1a4.2 4.2 0 0 0-.1 3.2A4.6 4.6 0 0 0 4 9.3c0 4.6 2.7 5.7 5.5 6-.6.5-.6 1.2-.5 2V21" />
        </svg>
      );
    case "linkedin":
      return (
        <svg {...common}>
          <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z" />
          <rect x="2" y="9" width="4" height="12" />
          <circle cx="4" cy="4" r="2" />
        </svg>
      );
    case "x":
      return (
        <svg {...common}>
          <path d="M4 4l16 16M20 4L4 20" />
        </svg>
      );
    case "youtube":
      return (
        <svg {...common}>
          <path d="M22 12s0-4-1-5c-.6-.7-2-1-5-1H8c-3 0-4.4.3-5 1-1 1-1 5-1 5s0 4 1 5c.6.7 2 1 5 1h8c3 0 4.4-.3 5-1 1-1 1-5 1-5z" />
          <path d="M10 9.5v5l5-2.5-5-2.5z" />
        </svg>
      );
    case "instagram":
      return (
        <svg {...common}>
          <rect x="3" y="3" width="18" height="18" rx="5" />
          <circle cx="12" cy="12" r="4" />
          <circle cx="17.5" cy="6.5" r="0.8" fill="currentColor" stroke="none" />
        </svg>
      );
  }
}

export function SocialIcons({
  locale,
  labeled = false,
}: {
  locale: Locale;
  labeled?: boolean;
}) {
  return (
    <ul className={`flex ${labeled ? "flex-col gap-3" : "flex-wrap items-center gap-4"}`}>
      {socials.map((item) => (
        <li key={item.id}>
          <a
            href={item.href}
            target="_blank"
            rel="me noopener noreferrer"
            className="inline-flex items-center gap-2 text-[var(--muted)] transition-colors hover:text-[var(--signal)]"
          >
            <Icon id={item.id} />
            {labeled ? (
              <span>{item.label[locale]}</span>
            ) : (
              <span className="sr-only">{item.label[locale]}</span>
            )}
          </a>
        </li>
      ))}
    </ul>
  );
}
