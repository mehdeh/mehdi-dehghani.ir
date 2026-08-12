import type { Localized } from "./types";

export type ExperienceEntry = {
  org: Localized<string>;
  dates: Localized<string>;
  place: Localized<string>;
  bullets: Localized<string[]>;
};

export const experience: ExperienceEntry[] = [
  {
    org: { en: "Startup MMMF", fa: "استارتاپ MMMF" },
    dates: { en: "2024 — present", fa: "۱۴۰۳ — اکنون" },
    place: { en: "Tehran, Iran", fa: "تهران" },
    bullets: {
      en: [
        "Developed a time-series forecasting framework for multivariate data using deep learning models.",
        "Built data pipelines for preprocessing, transformation, and feeding datasets into the forecasting framework.",
        "Applied feature-importance methods to identify and select informative variables for modeling.",
      ],
      fa: [
        "چارچوب پیش‌بینی سری زمانی چندمتغیره با مدل‌های یادگیری عمیق.",
        "خط لوله پیش‌پردازش، تبدیل و تغذیه داده به چارچوب پیش‌بینی.",
        "انتخاب متغیرهای مؤثر با روش‌های اهمیت ویژگی.",
      ],
    },
  },
  {
    org: { en: "Freelance instructor", fa: "مدرس آزاد" },
    dates: { en: "2020 — present", fa: "۱۳۹۹ — اکنون" },
    place: { en: "Tehran, Iran", fa: "تهران" },
    bullets: {
      en: [
        "Teaching Python programming, machine learning, and deep learning.",
      ],
      fa: ["تدریس برنامه‌نویسی پایتون، یادگیری ماشین و یادگیری عمیق."],
    },
  },
  {
    org: {
      en: "Rahian Software Development",
      fa: "توسعه نرم‌افزار راهیان",
    },
    dates: { en: "2015 — 2019", fa: "۱۳۹۴ — ۱۳۹۸" },
    place: { en: "Tehran, Iran", fa: "تهران" },
    bullets: {
      en: [
        "Collaborated on an intelligent gate-barrier system for parking-lot access control.",
      ],
      fa: ["همکاری در سامانه هوشمند راهبند برای کنترل تردد پارکینگ."],
    },
  },
  {
    org: {
      en: "Sepanta Robotic Research Foundation (SRRF)",
      fa: "بنیاد پژوهشی رباتیک سپنتا",
    },
    dates: { en: "2014 — 2015", fa: "۱۳۹۳ — ۱۳۹۴" },
    place: { en: "Tehran, Iran", fa: "تهران" },
    bullets: {
      en: ["Collaborated on an OCR system for Persian scripts."],
      fa: ["همکاری در طراحی و پیاده‌سازی سامانه OCR برای خط فارسی."],
    },
  },
  {
    org: {
      en: "Mehregan Danesh Pazhooh",
      fa: "مهرگان دانش‌پژوه",
    },
    dates: { en: "2009 — 2014", fa: "۱۳۸۸ — ۱۳۹۳" },
    place: { en: "Tehran, Iran", fa: "تهران" },
    bullets: {
      en: ["Collaborated on in-house CRM software."],
      fa: ["همکاری در توسعه نرم‌افزار CRM داخلی."],
    },
  },
];
