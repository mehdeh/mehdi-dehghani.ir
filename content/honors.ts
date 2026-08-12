import type { Localized } from "./types";

export type HonorGroup = {
  title: Localized<string>;
  items: Localized<string[]>;
};

export const honors: HonorGroup[] = [
  {
    title: { en: "Exams", fa: "آزمون‌ها" },
    items: {
      en: [
        "Ranked 25th nationally in the M.Sc. Computer Engineering entrance exam (2006)",
        "Ranked 37th nationally in the M.Sc. Computer Science entrance exam (2006)",
      ],
      fa: [
        "رتبه ۲۵ کشوری در آزمون کارشناسی ارشد مهندسی کامپیوتر (۱۳۸۵)",
        "رتبه ۳۷ کشوری در آزمون کارشناسی ارشد علوم کامپیوتر (۱۳۸۵)",
      ],
    },
  },
  {
    title: { en: "Software & competitions", fa: "نرم‌افزار و رقابت‌ها" },
    items: {
      en: [
        "Provincial winner, 4th Kharazmi Young Festival, for real-time voice conversion software (2002)",
        "Official software registration at the High Council of Informatics (2006)",
        "Winner of the Sharif Business Plan Competition for mobile text-to-speech software (2007)",
      ],
      fa: [
        "برنده استانی چهارمین جشنواره جوان خوارزمی برای نرم‌افزار تبدیل صدای بلادرنگ (۱۳۸۱)",
        "ثبت رسمی نرم‌افزار در شورای عالی انفورماتیک (۱۳۸۵)",
        "برنده رقابت طرح کسب‌وکار شریف برای نرم‌افزار متن‌به‌گفتار همراه (۱۳۸۶)",
      ],
    },
  },
  {
    title: { en: "Innovation festivals", fa: "جشنواره‌های نوآوری" },
    items: {
      en: [
        "Selected, 2nd Innovation Festival, University of Tehran — cloud-based attendance tracking (2017)",
        "Selected, 3rd Innovation Festival, University of Tehran — book provision and exchange (2018)",
        "Selected, IdeaTap, Qom Science and Technology Park — simulator for sensitive environments (2019)",
        "Selected, Innovation Festival, University of Tehran — VR/AR simulator for sensitive environments (2020)",
      ],
      fa: [
        "انتخاب‌شده در دومین جشنواره نوآوری دانشگاه تهران — سامانه ابری حضور و غیاب (۱۳۹۶)",
        "انتخاب‌شده در سومین جشنواره نوآوری دانشگاه تهران — سامانه تأمین و تبادل کتاب (۱۳۹۷)",
        "انتخاب‌شده در IdeaTap پارک علم و فناوری قم — شبیه‌ساز محیط‌های حساس (۱۳۹۸)",
        "انتخاب‌شده در جشنواره نوآوری دانشگاه تهران — شبیه‌ساز واقعیت مجازی و افزوده برای محیط‌های حساس (۱۳۹۹)",
      ],
    },
  },
];
