import type { Localized } from "./types";

export type ResearchAxis = {
  title: Localized<string>;
  body: Localized<string>;
};

export const homeAxes: ResearchAxis[] = [
  {
    title: {
      en: "Diffusion & score-based models",
      fa: "انتشار و مدل‌های مبتنی بر امتیاز",
    },
    body: {
      en: "Noise schedules, sigma-score estimation, and generative models that treat denoising as the central computation.",
      fa: "زمان‌بندی نویز، تخمین امتیاز سیگما، و مدل‌های مولدی که نویززدایی را محاسبۀ اصلی می‌دانند.",
    },
  },
  {
    title: {
      en: "Compact, interpretable nets",
      fa: "شبکه‌های فشرده و تفسیرپذیر",
    },
    body: {
      en: "Parameter-efficient architectures and custom layers — including bilateral matrix projections — that stay inspectable.",
      fa: "معماری‌های کم‌پارامتر و لایه‌های سفارشی — از جمله تصویرهای ماتریسی دوطرفه — که قابل بررسی بمانند.",
    },
  },
  {
    title: {
      en: "Forecasting & inverse problems",
      fa: "پیش‌بینی و مسائل معکوس",
    },
    body: {
      en: "Multivariate time-series pipelines in practice, and inverse problems approached with score-based diffusion.",
      fa: "خط لوله سری زمانی چندمتغیره در عمل، و مسائل معکوس با انتشار مبتنی بر امتیاز.",
    },
  },
];

export const allInterests: Localized<string[]> = {
  en: [
    "Interpretable deep learning, with emphasis on compact, parameter-efficient architectures",
    "Deep generative models, including diffusion models and rectified flow",
    "Inverse problems using score-based diffusion models",
    "Exploration of latent space through dimensionality reduction",
    "Time series forecasting",
    "The influence of consciousness on the generation of random numbers",
  ],
  fa: [
    "یادگیری عمیق تفسیرپذیر، با تأکید بر معماری‌های فشرده و کم‌پارامتر",
    "مدل‌های مولد عمیق، از جمله مدل‌های انتشار و جریان یکنواخت‌شده",
    "مسائل معکوس با مدل‌های انتشار مبتنی بر امتیاز",
    "کاوش فضای نهان با روش‌های کاهش بُعد",
    "پیش‌بینی سری زمانی",
    "تأثیر آگاهی بر تولید اعداد تصادفی",
  ],
};
