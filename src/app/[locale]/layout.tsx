import type { Metadata } from "next";
import { Newsreader, Source_Sans_3, Vazirmatn } from "next/font/google";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import { routing } from "@/i18n/routing";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { siteUrl } from "@content/profile";
import "../globals.css";

const newsreader = Newsreader({
  subsets: ["latin"],
  variable: "--font-serif",
  display: "swap",
  style: ["normal", "italic"],
});

const sourceSans = Source_Sans_3({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
  weight: ["400", "500", "600", "700"],
});

const vazir = Vazirmatn({
  subsets: ["arabic", "latin"],
  variable: "--font-vazir",
  display: "swap",
  weight: ["300", "400", "500", "600", "700"],
});

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const isFa = locale === "fa";
  const title = isFa
    ? "مهدی دهقانی فیروزآبادی"
    : "Mehdi Dehghani Firoozabadi";
  const description = isFa
    ? "پژوهشگر و توسعه‌دهنده هوش مصنوعی؛ مدل‌های مولد، انتشار، و معماری‌های عصبی فشرده."
    : "AI researcher and developer working on generative models, diffusion, and compact neural architectures.";

  return {
    metadataBase: new URL(siteUrl),
    title: {
      default: title,
      template: isFa ? "%s · مهدی دهقانی" : "%s · Mehdi Dehghani Firoozabadi",
    },
    description,
    alternates: {
      canonical: `${siteUrl}/${locale}`,
      languages: {
        en: `${siteUrl}/en`,
        fa: `${siteUrl}/fa`,
      },
    },
    openGraph: {
      type: "website",
      locale: isFa ? "fa_IR" : "en_US",
      url: `${siteUrl}/${locale}`,
      siteName: title,
      title,
      description,
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;
  if (!routing.locales.includes(locale as "en" | "fa")) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const dir = locale === "fa" ? "rtl" : "ltr";

  return (
    <html
      lang={locale}
      dir={dir}
      className={`${newsreader.variable} ${sourceSans.variable} ${vazir.variable}`}
    >
      <body className="antialiased">
        <NextIntlClientProvider messages={messages}>
          <a
            href="#content"
            className="sr-only focus:not-sr-only focus:fixed focus:start-4 focus:top-4 focus:z-50 focus:bg-surface focus:px-3 focus:py-2 focus:text-sm"
          >
            {locale === "fa" ? "پرش به محتوا" : "Skip to content"}
          </a>
          <Header />
          <main id="content">{children}</main>
          <Footer />
        </NextIntlClientProvider>
      </body>
    </html>
  );
}
