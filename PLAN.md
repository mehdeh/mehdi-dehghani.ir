# طرح پیاده‌سازی سایت شخصی — mehdi-dehghani.ir

> **وضعیت:** نسخهٔ ۱ پیاده‌سازی و مستقر شده است  
> **تاریخ تأیید:** ۱۴۰۵/۰۵/۲۱ (۲۰۲۶-۰۸-۱۲)  
> **دامنهٔ اصلی:** `mehdi-dehghani.ir`  
> **دامنهٔ فرعی:** `mehdeh.ir` → ریدایرکت ۳۰۱ به دامنهٔ اصلی  
> **مخزن:** [github.com/mehdeh/mehdi-dehghani.ir](https://github.com/mehdeh/mehdi-dehghani.ir)  
> **توسعه:** `/home/mehdi/repos/mehdi-dehghani.ir/`  
> **production:** `/home/mehdi/sites/mehdi-dehghani.ir/`  
> **خارج از محدوده:** پروژه‌های organization با نام **AthenaFin** در سایت نمی‌آیند.

---

## ۰. تصمیم‌های قفل‌شده

| موضوع | تصمیم |
|--------|--------|
| زبان پیش‌فرض | انگلیسی در `/en`؛ فارسی در `/fa` |
| تلفن | فقط صفحهٔ تماس |
| فرم تماس نسخهٔ ۱ | خیر — `mailto:` و لینک اجتماعی |
| تم | فقط تیره |
| بایگانی دلفی | گروه Archive در `/work` |
| Iris و MNIST | نیستند |
| galaxy-particle-simulator | Tools & labs |
| پرتره | `public/images/portrait.jpg` — denoise فقط در خانه؛ درباره بدون بوم |
| PDF رزومه | `public/resume.pdf` از `resume_latin.pdf` در GitHub Pages قدیمی |
| DNS | هر دو دامنه روی آروان (مثل سایت دیگر)؛ مبدأ این VPS |
| mehdeh.github.io | دست‌نخورده |
| نام نمایشی | هدر: **Mehdi Dehghani** — قهرمان: نام کامل |
| بک‌اند | ندارد |
| AthenaFin | نمی‌آید |
| کامیت | پایان هر فاز |

---

## ۱–۴. هویت سایت

سایت هویت پژوهشی–توسعه‌ای است: مدل‌های مولد و انتشار در مرکز، تدریس و سابقهٔ نرم‌افزار در لایه‌های بعدی. بدون CMS، بدون همگام‌سازی زندهٔ گیتهاب، بدون پلتفرم دوره.

نسخهٔ ۱ بدون بک‌اند است. محتوا در `content/*.ts` و رشته‌های رابط در `messages/{en,fa}.json`.

---

## ۵. استک پیاده‌شده

| لایه | انتخاب واقعی |
|------|----------------|
| فریم‌ورک | Next.js **15.5.23** (App Router) + React 19 + TypeScript |
| استایل | Tailwind CSS v4 |
| i18n | **next-intl 4** با `localePrefix: "always"`؛ ریدایرکت locale با Host عمومی بازنویسی می‌شود |
| انیمیشن | CSS (`fade-in`) + Canvas 2D؛ کتابخانه Motion اضافه نشد (سبک‌تر) |
| محتوا | TypeScript در `content/` — MDX لازم نشد |
| فونت لاتین | **Newsreader** (عنوان) + **Source Sans 3** (متن) |
| فونت فارسی | **Vazirmatn** |
| خروجی | `output: "standalone"` |

مسیرها:

```
content/          دادهٔ دوزبانه
messages/         رشته‌های UI
src/app/[locale]/ صفحات
src/components/   هدر، فوتر، denoise، کارت پروژه
src/i18n/         routing، navigation، request
deploy/           nginx، systemd، deploy.sh
public/images/portrait.jpg
public/resume.pdf
```

| مورد | مقدار |
|------|--------|
| پورت | `127.0.0.1:3002` |
| systemd | `mehdi-dehghani-next` |
| توسعه | `npm run dev` → پورت ۳۰۰۲ |

صفحات پروژه برای **همهٔ** موارد کیوریت‌شده ساخته شد (نه فقط برگزیده‌ها) تا `/work` و کارت‌ها مقصد داخلی داشته باشند.

---

## ۶. طراحی

پالت جوهر تیره + کاغذ گرم + سیگنال فیروزه‌ای، مطابق طرح.

امضای denoise فقط روی پرترهٔ دایره‌ای خانه است. با `prefers-reduced-motion` بوم خالی می‌ماند. حرکت نشان‌گر نویز موضعی برمی‌گرداند. صفحهٔ درباره همان عکس را بدون بوم نشان می‌دهد.

---

## ۷. صفحات

```
/en  /fa
/en/work  /fa/work
/en/work/[slug]
/en/about  /fa/about
/en/publications
/en/teaching
/en/contact
```

`/` با middleware به `/en` می‌رود. سوییچ زبان path را حفظ می‌کند.

شبکه‌ها در فوتر (آیکون) و تماس (با برچسب)، ترتیب: GitHub → LinkedIn → X → YouTube → Instagram.  
`rel="me noopener noreferrer"`.

---

## ۸. پروژه‌ها

همان کیوریت طرح اولیه. منبع: `content/projects.ts`. AthenaFin نیست.

برگزیده در خانه: sigma-score-estimator، image-generation-evaluations، bi-matmul-network، edm-gradient-ascent-denoising، ideal-denoiser.

---

## ۱۱–۱۲. دامنه و اجرا

```
اینترنت → آروان → Nginx :80/:443
                    ├─ mehdi-dehghani.ir → 127.0.0.1:3002
                    ├─ www.mehdi-dehghani.ir → 301 apex
                    └─ mehdeh.ir / www.mehdeh.ir → 301 apex (path حفظ می‌شود)
```

`bash deploy/deploy.sh` بیلد می‌کند، standalone را به `sites/` می‌برد و سرویس را restart می‌کند.

اگر گواهی Let's Encrypt روی مبدأ گرفته شود، HTTPS مبدأ هم فعال است. لبهٔ آروان باید SSL (حالت Full) داشته باشد تا مرورگر HTTPS ببیند.

---

## ۱۳. SEO

- `sitemap.xml` و `robots.txt`
- Open Graph پویا (نام + پرتره) در هر زبان
- فاوآیکون: نقطهٔ سیگنال روی زمینهٔ جوهر
- `hreflang` از طریق `alternates.languages`
- `prefers-reduced-motion` روی denoise و fade

---

## ۱۴. فازها

| فاز | وضعیت |
|-----|--------|
| ۰ اسکلت مخزن | ✅ |
| ۱ Next.js + i18n + هدر/فوتر | ✅ |
| ۲ محتوا، خانه، درباره | ✅ |
| ۳ پروژه‌ها | ✅ |
| ۴ مقالات، تدریس، تماس، PDF | ✅ |
| ۵ OG، فاوآیکون، sitemap | ✅ |
| ۶ استقرار | ✅ |
| ۷ فرم تماس / یادداشت / بنر github.io | اختیاری بعدی |

**قانون کامیت:** پایان هر فاز با کامیت. در این دور پیاده‌سازی، کامیت‌ها به تفکیک فاز روی `main` ثبت شدند.

---

## ۱۵. انحراف از پیش‌نویس (عمدی)

| پیش‌نویس | پیاده‌سازی | دلیل |
|----------|------------|------|
| Motion (Framer) | CSS + Canvas | JS کمتر، همان حس |
| MDX برای پروژه | فیلد `body` در TypeScript | حجم متن کم بود؛ نوع‌دارتر |
| `/work/[slug]` فقط شاخص | همهٔ پروژه‌های کیوریت | کارت‌ها مقصد داخلی دارند |
| denoise در خانه و درباره | فقط خانه | امضا یک‌بار کافی است |
| PDF از GitHub Pages | `resume_latin.pdf` → `public/resume.pdf` | فایل `resume.pdf` در ریپوی قدیمی نبود |
| DNS مبهم | آروان، مثل دامنهٔ دیگر | هر دو دامنه روی IP آروان بودند |
| ریدایرکت مطلق next-intl | بازنویسی Location با Host/X-Forwarded-* | پشت پروکسی، origin داخلی `localhost:3002` بود |

---

## ۱۶. خلاصهٔ نسخهٔ ۱

سایت پژوهشی دوزبانه روی Next.js، بدون بک‌اند، با پرترهٔ denoise، پروژه‌های کیوریت‌شده، و ریدایرکت `mehdeh.ir`. استقرار روی همین VPS، پورت `3002`.
