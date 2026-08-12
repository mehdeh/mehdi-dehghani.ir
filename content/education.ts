import type { Localized } from "./types";

export type EducationEntry = {
  degree: Localized<string>;
  field: Localized<string>;
  place: Localized<string>;
  dates: Localized<string>;
  notes: Localized<string[]>;
};

export const education: EducationEntry[] = [
  {
    degree: {
      en: "M.Sc. in Computer Science",
      fa: "کارشناسی ارشد علوم کامپیوتر",
    },
    field: { en: "Data Mining", fa: "داده‌کاوی" },
    place: {
      en: "Tarbiat Modares University, Tehran",
      fa: "دانشگاه تربیت مدرس، تهران",
    },
    dates: { en: "2020 — present", fa: "۱۳۹۹ — اکنون" },
    notes: {
      en: ['Thesis: "An Improved Generative Model Based on Diffusion"'],
      fa: ["پایان‌نامه: «یک مدل مولد بهبودیافته بر پایه انتشار»"],
    },
  },
  {
    degree: {
      en: "B.Sc. in Computer Engineering",
      fa: "کارشناسی مهندسی کامپیوتر",
    },
    field: { en: "Software", fa: "نرم‌افزار" },
    place: { en: "Yazd University, Yazd", fa: "دانشگاه یزد، یزد" },
    dates: { en: "2002 — 2005", fa: "۱۳۸۱ — ۱۳۸۴" },
    notes: {
      en: [
        "Graduated in seven semesters, second rank",
        'Thesis: "Design and Implementation of a Real Estate Web System"',
      ],
      fa: [
        "فارغ‌التحصیل در هفت نیمسال، رتبه دوم",
        "پایان‌نامه: «طراحی و پیاده‌سازی سامانه وب املاک»",
      ],
    },
  },
];
