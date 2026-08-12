# طرح پیاده‌سازی سایت شخصی — mehdi-dehghani.ir

> **وضعیت:** تأییدشده — آمادهٔ پیاده‌سازی فاز ۱ در چت بعدی  
> **تاریخ تأیید:** ۱۴۰۵/۰۵/۲۱ (۲۰۲۶-۰۸-۱۲)  
> **دامنهٔ اصلی:** `mehdi-dehghani.ir`  
> **دامنهٔ فرعی:** `mehdeh.ir` → ریدایرکت ۳۰۱ به دامنهٔ اصلی  
> **مخزن GitHub (ایجاد توسط صاحب سایت):** `mehdeh/mehdi-dehghani.ir`  
> **مسیر توسعه:** `/home/mehdi/repos/mehdi-dehghani.ir/`  
> **منابع محتوا:** [رزومهٔ فعلی](https://mehdeh.github.io/) و ریپوهای شخصی [github.com/mehdeh](https://github.com/mehdeh)  
> **خارج از محدوده:** پروژه‌های organization با نام **AthenaFin** در سایت نمی‌آیند.

این سند منبع حقیقت پلن است. پیاده‌سازی از فاز ۱ شروع می‌شود.

---

## ۰. تصمیم‌های قفل‌شده

همهٔ موارد پیشنهادی طرح اولیه تأیید شد، به‌علاوهٔ پرتره و شبکه‌های اجتماعی.

| موضوع | تصمیم |
|--------|--------|
| زبان پیش‌فرض | انگلیسی؛ فارسی first-class با سوییچ پایدار |
| تلفن | فقط در صفحهٔ تماس (`+98-9124764062`) |
| فرم تماس نسخهٔ ۱ | خیر — فقط `mailto:` و لینک‌های اجتماعی |
| تم | فقط تیره در نسخهٔ ۱ |
| بایگانی دلفی | گروه Archive در `/work` |
| Iris و MNIST | در سایت نمی‌آیند |
| galaxy-particle-simulator | در Tools & labs |
| پرتره | `public/images/portrait.jpg` — در خانه (با denoise) و درباره |
| PDF رزومه | همان فایل فعلی GitHub Pages؛ در فاز ۴ کپی می‌شود |
| DNS | در فاز ۶ روی همین سرور + Let's Encrypt (اگر دامنه روی آروان بود، همان‌جا هماهنگ می‌شود) |
| mehdeh.github.io | در نسخهٔ ۱ دست نخورده می‌ماند |
| نام نمایشی | هدر فشرده: **Mehdi Dehghani** — قهرمان و درباره: **Mehdi Dehghani Firouzabadi** |
| بک‌اند نسخهٔ ۱ | ندارد |
| AthenaFin | هیچ ریپو یا محصولی از این organization در سایت نمی‌آید |
| کامیت | **در پایان هر فاز، کارهای همان فاز کامیت می‌شود** (جزئیات: بخش ۱۴) |

---

## ۱. این سایت باید چه نوعی باشد؟

با توجه به رزومه و کارهای گیتهاب، گونهٔ سایت این است:

**سایت هویت پژوهشی–توسعه‌ای (research identity site)**  
نه رزومهٔ تک‌صفحه‌ای مثل GitHub Pages فعلی، نه CMS سنگین مثل `soleimaninejad.ir`، و نه فروشگاه/پلتفرم دوره.

مخاطب اصلی:

| مخاطب | چه می‌خواهد ببیند |
|--------|-------------------|
| پژوهشگر / همکار دانشگاهی | تز، علایق پژوهشی، مقالات، پروژه‌های diffusion و denoising |
| دانشجو / کارآموز | مسیر یادگیری، ابزارها، واژه‌نامه، امکان تماس برای mentorship |
| کارفرما / همکار صنعتی | مهارت‌های عملی (PyTorch، time series، pipeline)، سابقهٔ نرم‌افزاری |
| مخاطب فارسی‌زبان | معرفی روشن به فارسی، بدون از دست دادن وجه بین‌المللی |

هویت خط اول سایت:

> **Mehdi Dehghani Firouzabadi**  
> AI Researcher & Developer — generative models, diffusion, and compact neural architectures

سایت فعلی در [mehdeh.github.io](https://mehdeh.github.io/) یک CV خوش‌ساخت اما تخت است: گرادیان بنفش، یک ستون، بدون پروژه، بدون دوزبانه، بدون امضای بصری. نسخهٔ جدید همان محتوا را به یک **فضای شخصی آرام و متمایز** تبدیل می‌کند؛ جایی که پژوهش دیده شود، نه فقط فهرست شغل‌ها.

---

## ۲. چرا این انتخاب؟

از رزومه و گیتهاب چند محور تکرارشونده بیرون می‌آید:

1. **هستهٔ پژوهشی امروز:** مدل‌های مولد، Diffusion، Score-based models، denoising، زمان‌بندی نویز، معماری‌های فشرده. تز کارشناسی ارشد: *An Improved Generative Model Based on Diffusion*.
2. **کار صنعتی موازی:** پیش‌بینی سری زمانی چندمتغیره در استارتاپ MMMF + سابقهٔ نرم‌افزار (CRM، OCR فارسی، کنترل تردد).
3. **آموزش:** تدریس آزاد Python / ML / DL از ۲۰۲۰.
4. **بایگانی افتخارات:** پروژه‌های دلفی اوایل دههٔ ۱۳۸۰ که به خوارزمی، ثبت نرم‌افزار، و جشنوارهٔ طرح کسب‌وکار شریف وصل می‌شوند — داستان مسیر هستند، نه ریپوی اصلی صفحهٔ اول.
5. **یک علاقهٔ غیرمعمول:** تأثیر آگاهی بر تولید اعداد تصادفی — اگر درست نمایش داده شود، سایت را از رزومه‌های یکسان AI جدا می‌کند.

نتیجه: صفحهٔ اول **پژوهشگر generative / diffusion** است؛ بقیهٔ مسیر زندگی در لایه‌های بعدی (درباره، بایگانی، تدریس) قرار می‌گیرد.

---

## ۳. چه چیزهایی را عمداً نمی‌سازیم

| مورد | دلیل |
|------|------|
| بک‌اند Django / Wagtail / دیتابیس در نسخهٔ ۱ | محتوا کم‌تغییر است؛ Git همان CMS است. |
| همگام‌سازی زنده با GitHub API | باید AthenaFin و ریپوهای آموزشی ضعیف حذف شوند. کیوریت دستی دقیق‌تر است. |
| نمایش هر ۲۳ ریپو در یک گرید یکسان | سایت شبیه گیتهاب می‌شود، نه هویت. |
| پلتفرم دوره، پرداخت، پنل ادمین | تدریس فقط به‌صورت معرفی. |
| کپی تم بنفش GitHub Pages یا تم جنگلی سایت دیگر | هر سایت امضای خودش را دارد. |
| انیمیشن سنگین Three.js در کل سایت | نوآوری در یک لحظهٔ مشخص است، نه در هر اسکرول. |
| حالت روشن در نسخهٔ ۱ | تم تیره با بوم نویز و پرتره سازگارتر است. |

---

## ۴. بک‌اند: نسخهٔ ۱ بدون بک‌اند

فرانت‌اند مدرن با تولید ایستا (SSG) کافی است.

- رزومه، مقالات و پروژه‌ها چند ماه یک‌بار عوض می‌شوند.
- ویرایش از روی فایل‌های TypeScript / MDX در مخزن، برای برنامه‌نویس طبیعی است.
- سطح حمله و نگهداری پایین‌تر است.
- روی همین سرور، پورت و systemd جدا از سایت دیگر کافی است.

مسیر رشد بعدی (بدون بازنویسی کل سایت):

| نیاز آینده | راه‌حل سبک |
|------------|------------|
| فرم تماس با ذخیرهٔ پیام | Route Handler در Next.js + ایمیل |
| وبلاگ/یادداشت پژوهشی | MDX در مخزن |
| همگام‌سازی انتخابی گیتهاب | اسکریپت build-time با allowlist (هرگز AthenaFin) |
| دورهٔ ویدئویی / ثبت‌نام | آن زمان بک‌اند جدا |

---

## ۵. استک و مخزن

| لایه | انتخاب |
|------|--------|
| فریم‌ورک | **Next.js 15 (App Router) + TypeScript** |
| استایل | **Tailwind CSS v4** |
| انیمیشن | **Motion** فقط جایی که لازم است |
| بوم صفحهٔ اول | **Canvas 2D** سبک |
| محتوا | `content/*.ts` + MDX برای صفحات پروژه |
| فونت لاتین | serif نمایشی (Newsreader یا Instrument Serif) + sans خوانا |
| فونت فارسی | **Vazirmatn** |
| دوزبانه | `next-intl` یا routing `/fa` و `/en` |
| استقرار | VPS فعلی + Nginx + systemd + Let's Encrypt |

### نام مخزن GitHub

**`mehdi-dehghani.ir`**

دلیل: با دامنهٔ اصلی یکی است و با الگوی مخزن `soleimaninejad.ir` روی همین سرور هم‌خوان است. زیر حساب `mehdeh` ساخته می‌شود:

```
https://github.com/mehdeh/mehdi-dehghani.ir
```

پس از ایجاد ریپو روی GitHub (خالی، بدون README خودکار تا با تاریخچهٔ محلی تداخل نکند):

```bash
cd /home/mehdi/repos/mehdi-dehghani.ir
git remote add origin git@github.com:mehdeh/mehdi-dehghani.ir.git
git push -u origin main
```

### ساختار مخزن

```
/home/mehdi/repos/mehdi-dehghani.ir/
├── content/                 # منبع حقیقت محتوا (FA + EN) — از فاز ۲
│   ├── profile.ts
│   ├── experience.ts
│   ├── education.ts
│   ├── publications.ts
│   ├── honors.ts
│   ├── teaching.ts
│   └── projects.ts
├── public/
│   ├── images/
│   │   └── portrait.jpg     # کپی‌شده — آماده
│   └── resume.pdf           # فاز ۴
├── src/                     # فاز ۱
├── deploy/                  # فاز ۶
├── PLAN.md                  # همین سند
├── README.md
└── .gitignore
```

| مورد | مقدار |
|------|--------|
| توسعه | `/home/mehdi/repos/mehdi-dehghani.ir/` |
| production | `/home/mehdi/sites/mehdi-dehghani.ir/` |
| systemd | `mehdi-dehghani-next` |
| پورت Next.js | `127.0.0.1:3002` |
| بک‌اند | ندارد |

---

## ۶. ایدهٔ طراحی: ساده، با یک امضای نوآورانه

سایت در نگاه اول خلوت است: تایپوگرافی قوی، فاصلهٔ زیاد، رنگ کم. نوآوری در **یک ایده** جمع می‌شود.

### ۶.۱ امضای بصری: میدان نویز که به پرتره آرام می‌شود

- در بارگذاری، ذرات/نویز گاوسی دیده می‌شود.
- ظرف حدود یک تا دو ثانیه، نویز denoise می‌شود و **پرتره + نام** ظاهر می‌گردد.
- با حرکت نشان‌گر، نویز موضعی کمی برمی‌گردد.
- روی موبایل و `prefers-reduced-motion`: فوراً حالت نهایی، بدون انیمیشن.

پرتره یک عکس محیطی پشت میز کار است (نه استودیو). در قهرمان با برش متمرکز روی چهره استفاده می‌شود؛ در صفحهٔ درباره می‌توان کادر بازتری نشان داد. بقیهٔ صفحات این بوم را تکرار نمی‌کنند.

### ۶.۲ پالت

تم **جوهر تیره + کاغذ گرم + یک رنگ سیگنال**.

| نقش | مقدار |
|-----|--------|
| پس‌زمینه | `#0e1116` |
| سطح | `#161b22` |
| متن | `#e8e4dc` |
| متن ثانویه | `#9a958c` |
| سیگنال / اکسنت | `#7eb8c9` |
| اکسنت گرم (کم) | `#c4a574` فقط برای افتخارات/بایگانی |

### ۶.۳ حس صفحه

- گرید تک‌ستونهٔ عریض (حدود ۷۲۰–۸۴۰px) برای متن؛ پروژه‌ها موضوعی، نه کارت‌های یکسان شلوغ.
- خط زمان تجربه به‌صورت عمودی آرام.
- مقالات با دکمهٔ «کپی BibTeX».
- بدون شمارندهٔ ستارهٔ گیتهاب به‌عنوان معیار اعتبار.

---

## ۷. معماری اطلاعات

```
/                 خانه
/work             پژوهش و پروژه‌ها
/about            درباره + رزومهٔ کامل
/publications     مقالات
/teaching         تدریس (سبک)
/contact          تماس
/work/[slug]      صفحهٔ یک پروژه (فقط موارد شاخص)
```

دوزبانه: `/en/...` و `/fa/...`. پیش‌فرض انگلیسی. سوییچ زبان در هدر. RTL کامل برای فارسی. slug پروژه‌ها لاتین می‌ماند.

### خانه

- امضای denoising → پرتره + نام کامل + یک جملهٔ دقیق
- ۳ محور پژوهشی
- ۳ تا ۵ کار برگزیده
- لینک PDF رزومه و تماس
- سوییچ «فارسی / English»

### پژوهش و پروژه‌ها (`/work`)

1. **Generative & diffusion**
2. **Denoising & inverse problems**
3. **Tools & labs**
4. **Archive**

### درباره

روایت کوتاه + پرتره + تحصیلات + تجربه + مهارت‌ها + افتخارات. مهارت‌های نمایشی:

- Languages: Python, C++, Delphi
- ML: PyTorch, NumPy, Pandas, SciPy, scikit-learn, OpenCV
- Experiment: Hydra, Optuna, MLflow, Ray, Captum, TensorBoard
- Other: Git, Linux, LaTeX

### مقالات

دو مقالهٔ IEEE ۲۰۰۸ + قالب آماده برای مقالهٔ تز. کپی BibTeX.

### تدریس

صفحهٔ کوتاه: Python، Machine Learning، Deep Learning. بدون فروش.

### تماس و شبکه‌های اجتماعی

تماس نسخهٔ ۱ بدون فرم:

- ایمیل: `mehdi274787@gmail.com`
- تلفن: فقط همین صفحه
- موقعیت: تهران
- PDF رزومه

شبکه‌ها در **فوتر همهٔ صفحات** به‌صورت آیکون آرام، و در صفحهٔ تماس با برچسب:

| شبکه | نشانی |
|------|--------|
| GitHub | [github.com/mehdeh](https://github.com/mehdeh) |
| LinkedIn | [linkedin.com/in/mehdeh](https://www.linkedin.com/in/mehdeh/) |
| X | [x.com/m_dehghani_](https://x.com/m_dehghani_) |
| Instagram | [instagram.com/dehghani_meh](https://www.instagram.com/dehghani_meh/) |
| YouTube | [youtube.com/@mehdidehghani7706](https://www.youtube.com/@mehdidehghani7706) |

ترتیب پیشنهادی آیکون‌ها (از حرفه‌ای به شخصی): GitHub → LinkedIn → X → YouTube → Instagram.  
لینک‌ها `target="_blank"` و `rel="me noopener noreferrer"` دارند (`rel="me"` برای تأیید هویت).

---

## ۸. کیوریت پروژه‌های گیتهاب

لیست نمایش از `content/projects.ts` خوانده می‌شود، نه از API زنده. **AthenaFin هرگز.**

### الف) برگزیده — خانه و بالای `/work`

| ریپو | چرا |
|------|-----|
| [sigma-score-estimator](https://github.com/mehdeh/sigma-score-estimator) | نزدیک‌ترین کار به تز؛ تخمین ∇_σ log p(x,σ) |
| [image-generation-evaluations](https://github.com/mehdeh/image-generation-evaluations) | ارزیابی تصویر مولد (FID, IS, sFID, Precision/Recall, FD_DINOv2) |
| [edm-gradient-ascent-denoising](https://github.com/mehdeh/edm-gradient-ascent-denoising) | denoising با EDM از مسیر gradient ascent |
| [ideal-denoiser](https://github.com/mehdeh/ideal-denoiser) | denoiser ایده‌آل (معادلهٔ ۵۷ EDM) |
| [bi-matmul-network](https://github.com/mehdeh/bi-matmul-network) | معماری فشرده / custom layer |

### ب) diffusion / denoising / intuition

| ریپو | یادداشت |
|------|---------|
| [cifar-noise-estimation](https://github.com/mehdeh/cifar-noise-estimation) | تخمین سطح نویز گاوسی |
| [image-denoising-methods](https://github.com/mehdeh/image-denoising-methods) | اگر README کامل شد، توضیح سایت هم کامل‌تر می‌شود |
| [inverse-heat-dissipation-lab](https://github.com/mehdeh/inverse-heat-dissipation-lab) | برچسب *lab / draft* |
| [flexible-interpolator](https://github.com/mehdeh/flexible-interpolator) | زمان‌بندی نویز / interpolation |
| [gaussian-intuition-lab](https://github.com/mehdeh/gaussian-intuition-lab) | شهود گاوسی |
| [gaussian-interpolation](https://github.com/mehdeh/gaussian-interpolation) | درونیابی گاوسی |

### ج) Tools & labs

| ریپو | دمو |
|------|-----|
| [ai-glossary-persian](https://github.com/mehdeh/ai-glossary-persian) | [دمو](https://mehdeh.github.io/ai-glossary-persian/) |
| [bbl-to-bibtex-converter](https://github.com/mehdeh/bbl-to-bibtex-converter) | ابزار LaTeX |
| [galaxy-particle-simulator](https://github.com/mehdeh/galaxy-particle-simulator) | [دمو](https://mehdeh.github.io/galaxy-particle-simulator/) — lab نه کار پژوهشی اصلی |
| [irrational-digits-visualizer](https://github.com/mehdeh/irrational-digits-visualizer) | پل به علاقهٔ آگاهی و اعداد تصادفی |

### د) Archive

| ریپو | پیوند به رزومه |
|------|----------------|
| [realtime-voice-conversion](https://github.com/mehdeh/realtime-voice-conversion) | خوارزمی ۱۳۸۱ |
| [persian-latin-tts](https://github.com/mehdeh/persian-latin-tts) | طرح کسب‌وکار شریف ۱۳۸۶ |
| [real-estate-web-system-delphi-intraweb](https://github.com/mehdeh/real-estate-web-system-delphi-intraweb) | تز کارشناسی یزد |
| [realtime-voice-changing-fft](https://github.com/mehdeh/realtime-voice-changing-fft) | ادامهٔ خط صوت |
| [sliding-puzzle](https://github.com/mehdeh/sliding-puzzle) | بایگانی کامل مسیر |

### ه) در سایت نمی‌آیند

| ریپو | دلیل |
|------|------|
| `mehdeh.github.io` | سایت قدیمی |
| `pytorch-iris-classifier` | تمرین آموزشی |
| `configurable-cnn` | تمرین MNIST |

---

## ۹. محتوا از روی رزومه

منبع: [mehdeh.github.io](https://mehdeh.github.io/)

| بخش رزومه | محل در سایت جدید |
|-----------|-------------------|
| نام، عنوان، تهران، ایمیل | خانه + تماس |
| تلفن | فقط تماس |
| شبکه‌های اجتماعی | فوتر + تماس |
| دانلود PDF | خانه و درباره |
| تحصیلات + تز | درباره؛ تز در خانه یک خط |
| تجربهٔ شغلی | درباره / خط زمان. MMMF و تدریس پررنگ‌تر |
| علایق پژوهشی | خانه (۳ محور) + درباره (فهرست کامل) |
| مهارت‌ها | درباره؛ فیلترشده |
| مقالات | `/publications` |
| فعالیت‌های کلاسی | درباره، یک پاراگراف فشرده |
| افتخارات | درباره، گروه‌بندی‌شده |
| پرتره | خانه (denoise) + درباره |

روایت خانه (انگلیسی؛ فارسی در پیاده‌سازی نوشته می‌شود):

> I work on generative models — especially diffusion and score-based methods — with an interest in compact, interpretable architectures. My M.Sc. thesis at Tarbiat Modares University develops an improved diffusion-based generative model. Alongside research, I build forecasting pipelines and teach Python, machine learning, and deep learning.

---

## ۱۰. دوزبانگی

- سوییچ زبان در هدر
- RTL کامل برای فارسی
- slug لاتین: `/fa/work/sigma-score-estimator`
- SEO: `hreflang`، عنوان و توضیح جدا
- ریدایرکت `mehdeh.ir` باید path زبان را حفظ کند

---

## ۱۱. دامنه‌ها و ریدایرکت

```
کاربر ──► mehdi-dehghani.ir          سایت اصلی
کاربر ──► www.mehdi-dehghani.ir      ۳۰۱ → apex
کاربر ──► mehdeh.ir                  ۳۰۱ → https://mehdi-dehghani.ir/...
کاربر ──► www.mehdeh.ir              ۳۰۱ → https://mehdi-dehghani.ir/...
```

- `mehdeh.ir` فقط server ریدایرکت ۳۰۱؛ path و query حفظ شود.
- گواهی Let's Encrypt برای هر دو دامنه (یا SAN).
- HTTPS از روز اول.
- `mehdeh.github.io` در نسخهٔ ۱ تغییر نمی‌کند.

---

## ۱۲. معماری اجرا

```
اینترنت
  ├─ mehdi-dehghani.ir  → Nginx → 127.0.0.1:3002  (Next.js standalone)
  └─ mehdeh.ir          → Nginx → 301 → mehdi-dehghani.ir
```

`deploy.sh`: کپی به `sites/`، `npm build`، restart سرویس. بدون venv و بدون PostgreSQL.

---

## ۱۳. SEO و کیفیت

- `sitemap.xml` و `robots.txt`
- Open Graph (نام + پرتره یا فریم میدان نویز)
- فاوآیکون ساده
- کنتراست WCAG، فوکوس کیبورد، `prefers-reduced-motion`
- بدون analytics در نسخهٔ ۱

---

## ۱۴. فازبندی و قانون کامیت

**قانون:** در **پایان هر فاز**، تمام کارهای همان فاز با یک (یا چند) کامیت معنادار ثبت می‌شود. وضعیت کاری باید تمیز باشد (`git status` بدون فایل مرتبطِ کامیت‌نشده). پیام کامیت روی «چرا» تمرکز دارد، نه فهرست فایل. فایل‌های راز (`.env`، کلید) کامیت نمی‌شوند.

اگر یک فاز بزرگ بود، چند کامیت منطقی وسط فاز مجاز است؛ در هر حال فاز بدون کامیت بسته نمی‌شود.

| فاز | وضعیت | محتوا | خروجی |
|-----|--------|--------|--------|
| **۰ — تأیید و اسکلت مخزن** | ✅ انجام‌شده | قفل تصمیم‌ها، `git init`، پرتره، README، این پلن | مخزن محلی آماده |
| **۱ — اسکلت فرانت** | بعدی | Next.js، Tailwind، i18n، پالت، هدر/فوتر (با آیکون اجتماعی)، layout RTL | صفحهٔ خالی زیبا در دو زبان |
| **۲ — محتوا و خانه** | | پروفایل، تجربه، تحصیلات، denoise + پرتره | خانه + درباره |
| **۳ — پروژه‌ها** | | `content/projects.ts` + صفحات شاخص | `/work` |
| **۴ — مقالات، تدریس، تماس** | | BibTeX، PDF، mailto، صفحهٔ تماس کامل | سایت محتوایی کامل |
| **۵ — پرداخت بصری** | | motion، OG، فاوآیکون، کاهش حرکت | حس نهایی |
| **۶ — استقرار** | | Nginx، systemd، SSL، ریدایرکت `mehdeh.ir` | سایت زنده |
| **۷ — اختیاری بعدی** | | فرم تماس، یادداشت پژوهشی، بنر روی github.io | بعد از استفادهٔ واقعی |

پیاده‌سازی از فاز ۱ در چت بعدی شروع می‌شود. پایان فاز ۱ = کامیت اسکلت Next.js.

---

## ۱۵. وضعیت فاز ۰ (انجام‌شده)

- تصمیم‌های بخش ۰ قفل شد.
- پوشهٔ `/home/mehdi/repos/mehdi-dehghani.ir/` ساخته شد.
- `git init` روی شاخهٔ `main`.
- پرتره از `repos/photo_2025-12-05_15-09-38.jpg` به `public/images/portrait.jpg` کپی شد.
- `README.md`، `.gitignore` و `PLAN.md` داخل مخزن قرار گرفت.
- کامیت فاز ۰ ثبت شد.
- ریپوی GitHub هنوز باید توسط صاحب سایت با نام **`mehdi-dehghani.ir`** ایجاد شود؛ سپس `remote` اضافه و `push` شود.

---

## ۱۶. خلاصهٔ نسخهٔ ۱

- سایت پژوهشی–شخصی دوزبانه روی `mehdi-dehghani.ir`
- `mehdeh.ir` فقط ریدایرکت ۳۰۱
- Next.js + TypeScript + Tailwind؛ محتوا در Git؛ بدون بک‌اند
- امضای بصری: میدان نویز که به پرتره denoise می‌شود
- فوتر و تماس: GitHub، LinkedIn، X، YouTube، Instagram
- پروژه‌ها کیوریت‌شده، موضوعی، بدون AthenaFin
- استقرار روی همین VPS، پورت `3002`
- پایان هر فاز با کامیت
