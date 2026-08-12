import type { Localized } from "./types";

export const teachingLead: Localized<string> = {
  en: "Since 2020 I have taught Python, machine learning, and deep learning as a freelance instructor in Tehran — for students and practitioners who want a clear path from first programs to trained models.",
  fa: "از سال ۱۳۹۹ به‌صورت مدرس آزاد در تهران پایتون، یادگیری ماشین و یادگیری عمیق تدریس می‌کنم — برای دانشجویان و کسانی که می‌خواهند مسیر روشنی از اولین برنامه تا مدل آموزش‌دیده داشته باشند.",
};

export const teachingTopics: {
  title: Localized<string>;
  body: Localized<string>;
}[] = [
  {
    title: { en: "Python", fa: "پایتون" },
    body: {
      en: "From language fundamentals to the scientific stack used in research code: NumPy, Pandas, and clean experiment scripts.",
      fa: "از مبانی زبان تا پشته علمی کد پژوهشی: NumPy، Pandas و اسکریپت‌های آزمایش تمیز.",
    },
  },
  {
    title: { en: "Machine learning", fa: "یادگیری ماشین" },
    body: {
      en: "Supervised methods, evaluation, and feature work — with an emphasis on knowing why a model is doing what it does.",
      fa: "روش‌های نظارت‌شده، ارزیابی و کار با ویژگی — با تأکید بر دانستن این‌که مدل چرا چنین می‌کند.",
    },
  },
  {
    title: { en: "Deep learning", fa: "یادگیری عمیق" },
    body: {
      en: "PyTorch practice: training loops, vision and generative models, and reading papers with working code beside them.",
      fa: "تمرین با PyTorch: حلقه آموزش، مدل‌های بینایی و مولد، و خواندن مقاله در کنار کد قابل اجرا.",
    },
  },
];
