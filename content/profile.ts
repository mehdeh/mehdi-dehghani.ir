import type { Localized, SocialLink } from "./types";

export const siteUrl = "https://mehdi-dehghani.ir";

export const fullName: Localized<string> = {
  en: "Mehdi Dehghani Firoozabadi",
  fa: "مهدی دهقانی فیروزآبادی",
};

export const shortName: Localized<string> = {
  en: "Mehdi Dehghani Firoozabadi",
  fa: "مهدی دهقانی",
};

export const role: Localized<string> = {
  en: "AI Researcher & Developer",
  fa: "پژوهشگر و توسعه‌دهنده هوش مصنوعی",
};

export const tagline: Localized<string> = {
  en: "Generative models, diffusion, and compact neural architectures",
  fa: "مدل‌های مولد، انتشار و معماری‌های عصبی فشرده",
};

export const intro: Localized<string> = {
  en: "I work on generative models — especially diffusion and score-based methods — with an interest in compact, interpretable architectures. My M.Sc. thesis at Tarbiat Modares University develops an improved diffusion-based generative model. Alongside research, I build forecasting pipelines and teach Python, machine learning, and deep learning.",
  fa: "روی مدل‌های مولد کار می‌کنم — به‌ویژه روش‌های انتشار و مبتنی بر امتیاز — با علاقه به معماری‌های فشرده و تفسیرپذیر. پایان‌نامه کارشناسی ارشدم در دانشگاه تربیت مدرس یک مدل مولد بهبودیافته بر پایه انتشار است. در کنار پژوهش، خط لوله پیش‌بینی سری زمانی می‌سازم و پایتون، یادگیری ماشین و یادگیری عمیق تدریس می‌کنم.",
};

export const aboutLead: Localized<string> = {
  en: "I am a computer scientist based in Tehran. After a software-engineering degree at Yazd University and years building production systems — CRM, Persian OCR, access control — I returned to research on generative models. The through-line is the same: compact methods that do something precise.",
  fa: "دانشمند کامپیوتر ساکن تهران هستم. پس از مهندسی نرم‌افزار در دانشگاه یزد و سال‌ها ساخت سامانه‌های واقعی — CRM، OCR فارسی، کنترل تردد — به پژوهش روی مدل‌های مولد برگشتم. نخ تسبیح کارها یکی است: روش‌های فشرده که کار مشخصی را درست انجام دهند.",
};

export const academicNote: Localized<string> = {
  en: "Course presentations have included pitch estimation with fuzzy methods, rotation-invariant face recognition, voice transformation, time-varying spectrum estimation, virtual reality, evolutionary multi-objective optimization, tensor methods in vision, discrete contrastive diffusion, contrastive clustering, and denoising diffusion models.",
  fa: "در درس‌های دانشگاه موضوعاتی از جمله تخمین زیروبمی گفتار با روش‌های فازی، بازشناسی چهره ناوردا نسبت به چرخش، تبدیل صدا، تخمین طیف متغیر با زمان، واقعیت مجازی، بهینه‌سازی چندهدفه تکاملی، روش‌های تانسوری در بینایی، انتشار تقابلی گسسته، خوشه‌بندی تقابلی و مدل‌های انتشار نویززدا ارائه کرده‌ام.",
};

export const location: Localized<string> = {
  en: "Tehran, Iran",
  fa: "تهران، ایران",
};

export const email = "mehdi274787@gmail.com";
export const phoneDisplay = "+98 912 476 4062";
export const phoneHref = "tel:+989124764062";
export const resumePath = "/resume.pdf";
export const portraitPath = "/images/portrait.jpg";
export const githubUser = "https://github.com/mehdeh";

export const socials: SocialLink[] = [
  {
    id: "github",
    href: "https://github.com/mehdeh",
    label: { en: "GitHub", fa: "گیتهاب" },
  },
  {
    id: "linkedin",
    href: "https://www.linkedin.com/in/mehdeh/",
    label: { en: "LinkedIn", fa: "لینکدین" },
  },
  {
    id: "x",
    href: "https://x.com/m_dehghani_",
    label: { en: "X", fa: "ایکس" },
  },
  {
    id: "youtube",
    href: "https://www.youtube.com/@mehdidehghani7706",
    label: { en: "YouTube", fa: "یوتیوب" },
  },
  {
    id: "instagram",
    href: "https://www.instagram.com/dehghani_meh/",
    label: { en: "Instagram", fa: "اینستاگرام" },
  },
];
