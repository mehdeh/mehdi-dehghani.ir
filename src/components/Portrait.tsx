import { portraitPath } from "@content/profile";

export function Portrait({
  alt,
  className = "",
  objectPosition = "50% 40%",
}: {
  alt: string;
  className?: string;
  objectPosition?: string;
}) {
  return (
    <div className={`overflow-hidden bg-[var(--surface)] ${className}`}>
      {/* eslint-disable-next-line @next/next/no-img-element */}
      <img
        src={portraitPath}
        alt={alt}
        className="h-full w-full object-cover"
        style={{ objectPosition }}
      />
    </div>
  );
}
