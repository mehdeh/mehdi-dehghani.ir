import { Link } from "@/i18n/navigation";
import type { Locale } from "@content/types";
import type { Project } from "@content/types";

export function ProjectCard({
  project,
  locale,
  draftLabel,
}: {
  project: Project;
  locale: Locale;
  draftLabel: string;
}) {
  return (
    <article className="border-t border-[var(--border)] py-6 first:border-t-0 first:pt-0">
      <div className="flex flex-wrap items-baseline justify-between gap-2">
        <h3 className="font-display text-xl text-[var(--text)]">
          <Link
            href={`/work/${project.slug}`}
            className="transition-colors hover:text-[var(--signal)]"
          >
            {project.title[locale]}
          </Link>
        </h3>
        {project.year ? (
          <span className="text-sm text-[var(--muted)]">{project.year}</span>
        ) : null}
      </div>
      <p className="mt-2 text-[var(--muted)] leading-relaxed">
        {project.summary[locale]}
      </p>
      <div className="mt-3 flex flex-wrap gap-2 text-xs text-[var(--muted)]">
        {project.draft ? (
          <span className="rounded-full border border-[var(--warm)]/40 px-2 py-0.5 text-[var(--warm)]">
            {draftLabel}
          </span>
        ) : null}
        {project.tags[locale].map((tag) => (
          <span
            key={tag}
            className="rounded-full border border-[var(--border)] px-2 py-0.5"
          >
            {tag}
          </span>
        ))}
      </div>
    </article>
  );
}
