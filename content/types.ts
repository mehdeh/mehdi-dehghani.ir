export type Locale = "en" | "fa";

export type Localized<T> = Record<Locale, T>;

export type SocialLink = {
  id: "github" | "linkedin" | "x" | "youtube" | "instagram";
  href: string;
  label: Localized<string>;
};

export type ProjectGroup =
  | "generative"
  | "denoising"
  | "labs"
  | "archive";

export type Project = {
  slug: string;
  featured?: boolean;
  group: ProjectGroup;
  year?: string;
  repo: string;
  demo?: string;
  draft?: boolean;
  title: Localized<string>;
  summary: Localized<string>;
  body: Localized<string[]>;
  tags: Localized<string[]>;
};
