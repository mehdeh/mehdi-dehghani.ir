import type { Localized, Project, ProjectGroup } from "./types";

export const groupOrder: ProjectGroup[] = [
  "generative",
  "denoising",
  "labs",
  "archive",
];

export const groupLabels: Record<ProjectGroup, Localized<string>> = {
  generative: {
    en: "Generative & diffusion",
    fa: "مولد و انتشار",
  },
  denoising: {
    en: "Denoising & inverse problems",
    fa: "نویززدایی و مسائل معکوس",
  },
  labs: {
    en: "Tools & labs",
    fa: "ابزار و آزمایشگاه",
  },
  archive: {
    en: "Archive",
    fa: "بایگانی مسیر",
  },
};

export const groupIntros: Record<ProjectGroup, Localized<string>> = {
  generative: {
    en: "Work closest to the thesis: noise, score, and generative evaluation.",
    fa: "نزدیک‌ترین کارها به پایان‌نامه: نویز، امتیاز، و ارزیابی مولد.",
  },
  denoising: {
    en: "Treating restoration as inference — from ideal denoisers to noise-level estimators.",
    fa: "بازسازی به‌مثابه استنتاج — از نویززدای ایده‌آل تا تخمینگر سطح نویز.",
  },
  labs: {
    en: "Small tools and interactive experiments, including a Persian AI glossary.",
    fa: "ابزارهای کوچک و آزمایش‌های تعاملی، از جمله واژه‌نامه فارسی هوش مصنوعی.",
  },
  archive: {
    en: "Earlier software — voice, speech, and the undergraduate real-estate system. Path, not current stack.",
    fa: "نرم‌افزارهای قدیمی‌تر — صدا، گفتار، و سامانه املاک کارشناسی. مسیر است، نه پشته امروز.",
  },
};

export const projects: Project[] = [
  {
    slug: "sigma-score-estimator",
    featured: true,
    group: "generative",
    year: "2026",
    repo: "https://github.com/mehdeh/sigma-score-estimator",
    title: {
      en: "Sigma score estimator",
      fa: "تخمینگر امتیاز سیگما",
    },
    summary: {
      en: "PyTorch training of ResNets to estimate ∇_σ log p(x,σ) for adaptive noise schedules in diffusion models.",
      fa: "آموزش ResNet در PyTorch برای تخمین ∇_σ log p(x,σ) به‌منظور زمان‌بندی تطبیقی نویز در مدل‌های انتشار.",
    },
    body: {
      en: [
        "Diffusion samplers depend on how noise is scheduled. This project trains a network to estimate the score with respect to the noise level itself — ∇_σ log p(x,σ) — so the schedule can adapt to the data rather than follow a fixed curve.",
        "The code is a PyTorch training framework around ResNet backbones, aimed at research experiments rather than a packaged product.",
      ],
      fa: [
        "نمونه‌بردارهای انتشار به زمان‌بندی نویز وابسته‌اند. این پروژه شبکه‌ای را آموزش می‌دهد که امتیاز نسبت به خود سطح نویز — ∇_σ log p(x,σ) — را تخمین بزند تا زمان‌بندی با داده سازگار شود، نه با یک منحنی ثابت.",
        "کد یک چارچوب آموزش PyTorch حول ستون فقرات ResNet است؛ برای آزمایش پژوهشی، نه محصول بسته‌بندی‌شده.",
      ],
    },
    tags: {
      en: ["diffusion", "score", "PyTorch"],
      fa: ["انتشار", "امتیاز", "PyTorch"],
    },
  },
  {
    slug: "image-generation-evaluations",
    featured: true,
    group: "generative",
    year: "2026",
    repo: "https://github.com/mehdeh/image-generation-evaluations",
    title: {
      en: "Image generation evaluations",
      fa: "ارزیابی تولید تصویر",
    },
    summary: {
      en: "Unified toolkit for FID, Inception Score, sFID, Precision, Recall, and FD_DINOv2, with automatic reference downloads.",
      fa: "جعبه ابزار یکپارچه برای FID، Inception Score، sFID، Precision، Recall و FD_DINOv2 با بارگذاری خودکار مرجع.",
    },
    body: {
      en: [
        "Comparing generative models is only as good as the metrics. This toolkit gathers FID, Inception Score, sFID, Precision, Recall, and FD_DINOv2 in one PyTorch-first workflow, with optional TensorFlow support.",
        "Reference statistics and models are downloaded automatically so an evaluation run does not start with a scavenger hunt.",
      ],
      fa: [
        "مقایسه مدل‌های مولد به‌اندازه متریک‌ها معتبر است. این جعبه ابزار FID، Inception Score، sFID، Precision، Recall و FD_DINOv2 را در یک جریان PyTorch جمع می‌کند؛ با پشتیبانی اختیاری TensorFlow.",
        "آمار مرجع و مدل‌ها خودکار بارگذاری می‌شوند تا ارزیابی با جست‌وجوی فایل شروع نشود.",
      ],
    },
    tags: {
      en: ["evaluation", "FID", "generative"],
      fa: ["ارزیابی", "FID", "مولد"],
    },
  },
  {
    slug: "bi-matmul-network",
    featured: true,
    group: "generative",
    year: "2025",
    repo: "https://github.com/mehdeh/bi-matmul-network",
    title: {
      en: "Bi-matmul network",
      fa: "شبکه ضرب ماتریسی دوطرفه",
    },
    summary: {
      en: "Custom bilateral matrix layers that squeeze MNIST, CIFAR, and Fashion-MNIST inputs toward target shapes.",
      fa: "لایه‌های ماتریسی دوطرفه سفارشی که ورودی MNIST، CIFAR و Fashion-MNIST را به شکل هدف می‌فشارند.",
    },
    body: {
      en: [
        "A compact architecture built from dual-side matrix multiplications instead of a conventional conv stack. Inputs are projected from both sides through layered bilateral maps.",
        "The notebooks are a study of custom PyTorch layers and parameter-efficient structure, aligned with an interest in inspectable networks.",
      ],
      fa: [
        "معماری فشرده‌ای که به‌جای پشته کانولوشن متعارف از ضرب ماتریسی دوطرفه ساخته شده است. ورودی از هر دو سو با نگاشت‌های لایه‌ای تصویر می‌شود.",
        "دفترچه‌ها مطالعه‌ای روی لایه‌های سفارشی PyTorch و ساختار کم‌پارامترند؛ هم‌راستا با علاقه به شبکه‌های قابل بررسی.",
      ],
    },
    tags: {
      en: ["architecture", "PyTorch", "compact"],
      fa: ["معماری", "PyTorch", "فشرده"],
    },
  },
  {
    slug: "flexible-interpolator",
    group: "generative",
    year: "2025",
    repo: "https://github.com/mehdeh/flexible-interpolator",
    title: {
      en: "Flexible interpolator",
      fa: "درونیاب انعطاف‌پذیر",
    },
    summary: {
      en: "Four interpolation methods (linear, power, exponential, rho) for noise schedules and parameter curves, PyTorch-compatible.",
      fa: "چهار روش درونیابی (خطی، توانی، نمایی، rho) برای زمان‌بندی نویز و منحنی پارامتر، سازگار با PyTorch.",
    },
    body: {
      en: [
        "A small library for interpolating discrete parameter sequences — the kind of curves that show up in diffusion noise schedules and training curricula.",
        "Linear, power, exponential, and rho interpolators share one interface so experiments can swap a schedule without rewriting the loop.",
      ],
      fa: [
        "کتابخانه کوچکی برای درونیابی دنباله‌های گسسته پارامتر — همان منحنی‌هایی که در زمان‌بندی نویز انتشار و برنامه آموزش ظاهر می‌شوند.",
        "درونیاب‌های خطی، توانی، نمایی و rho یک واسط دارند تا آزمایش بتواند زمان‌بندی را عوض کند بدون بازنویسی حلقه.",
      ],
    },
    tags: {
      en: ["interpolation", "schedules"],
      fa: ["درونیابی", "زمان‌بندی"],
    },
  },
  {
    slug: "edm-gradient-ascent-denoising",
    featured: true,
    group: "denoising",
    year: "2026",
    repo: "https://github.com/mehdeh/edm-gradient-ascent-denoising",
    title: {
      en: "EDM gradient-ascent denoising",
      fa: "نویززدایی صعود گرادیان EDM",
    },
    summary: {
      en: "Iterative denoising of CIFAR-10 images by maximizing log-probability with pretrained EDM models.",
      fa: "نویززدایی تکراری تصاویر CIFAR-10 با بیشینه‌کردن لگاریتم احتمال روی مدل‌های ازپیش‌آموزش‌دیده EDM.",
    },
    body: {
      en: [
        "Instead of a single denoiser step, this experiment climbs the log-density of a pretrained EDM model with gradient ascent, refining a noisy CIFAR-10 image over iterations.",
        "It is a research probe into inverse problems with score-based models: restoration as optimization in the learned density.",
      ],
      fa: [
        "به‌جای یک گام نویززدای واحد، این آزمایش با صعود گرادیان روی چگالی لگاریتمی مدل ازپیش‌آموزش‌دیده EDM بالا می‌رود و تصویر نویزی CIFAR-10 را در تکرارها پالایش می‌کند.",
        "کاوشی پژوهشی در مسائل معکوس با مدل‌های مبتنی بر امتیاز: بازسازی به‌مثابه بهینه‌سازی در چگالی یادگرفته‌شده.",
      ],
    },
    tags: {
      en: ["EDM", "inverse problems", "CIFAR-10"],
      fa: ["EDM", "مسائل معکوس", "CIFAR-10"],
    },
  },
  {
    slug: "ideal-denoiser",
    featured: true,
    group: "denoising",
    year: "2025",
    repo: "https://github.com/mehdeh/ideal-denoiser",
    title: {
      en: "Ideal denoiser",
      fa: "نویززدای ایده‌آل",
    },
    summary: {
      en: "Closed-form ideal denoiser (EDM equation 57) with CIFAR-10 experiments and visualizations.",
      fa: "نویززدای ایده‌آل به فرم بسته (معادله ۵۷ EDM) با آزمایش و تصویرسازی روی CIFAR-10.",
    },
    body: {
      en: [
        "Karras et al. give a closed-form expression for the ideal denoiser under Gaussian noise. This repository implements that expression (EDM equation 57) and runs it on CIFAR-10 with supporting plots.",
        "The point is a reference, not a learned substitute: a baseline against which trained denoisers can be read.",
      ],
      fa: [
        "کاراس و همکاران برای نویززدای ایده‌آل تحت نویز گاوسی یک عبارت فرم‌بسته می‌دهند. این مخزن آن عبارت (معادله ۵۷ EDM) را پیاده می‌کند و روی CIFAR-10 با نمودار اجرا می‌کند.",
        "هدف یک مرجع است، نه جایگزین یادگرفته‌شده: خط پایه‌ای که نویززداهای آموزش‌دیده در برابر آن خوانده شوند.",
      ],
    },
    tags: {
      en: ["EDM", "theory", "CIFAR-10"],
      fa: ["EDM", "نظریه", "CIFAR-10"],
    },
  },
  {
    slug: "cifar-noise-estimation",
    group: "denoising",
    year: "2025",
    repo: "https://github.com/mehdeh/cifar-noise-estimation",
    title: {
      en: "CIFAR noise estimation",
      fa: "تخمین نویز CIFAR",
    },
    summary: {
      en: "ResNet-18 pipeline that estimates Gaussian noise levels in CIFAR-10 images, with modular configs and a unified CLI.",
      fa: "خط لوله ResNet-18 برای تخمین سطح نویز گاوسی در تصاویر CIFAR-10، با پیکربندی پیمانه‌ای و واسط خط فرمان یکپارچه.",
    },
    body: {
      en: [
        "A practical companion to adaptive schedules: if the noise level in an image can be estimated, a diffusion or restoration method can condition on it.",
        "Training, logging, and configuration are kept modular so the same pipeline can be reused when the backbone or noise model changes.",
      ],
      fa: [
        "همراه عملی زمان‌بندی تطبیقی: اگر سطح نویز تصویر تخمین زده شود، روش انتشار یا بازسازی می‌تواند روی آن شرطی شود.",
        "آموزش، ثبت وقایع و پیکربندی پیمانه‌ای مانده‌اند تا با عوض شدن ستون فقرات یا مدل نویز همان خط لوله قابل استفاده باشد.",
      ],
    },
    tags: {
      en: ["ResNet", "noise", "CIFAR-10"],
      fa: ["ResNet", "نویز", "CIFAR-10"],
    },
  },
  {
    slug: "image-denoising-methods",
    group: "denoising",
    year: "2025",
    repo: "https://github.com/mehdeh/image-denoising-methods",
    title: {
      en: "Image denoising methods",
      fa: "روش‌های نویززدایی تصویر",
    },
    summary: {
      en: "A working collection of image-denoising experiments in Python.",
      fa: "مجموعه‌ای در حال کار از آزمایش‌های نویززدایی تصویر در پایتون.",
    },
    body: {
      en: [
        "A repository for comparing denoising approaches side by side. Documentation is still catching up with the code; the intent is a lab notebook, not a finished library.",
      ],
      fa: [
        "مخزنی برای مقایسه روش‌های نویززدایی در کنار هم. مستندات هنوز به پای کد نرسیده‌اند؛ نیت دفتر آزمایش است، نه کتابخانه تمام‌شده.",
      ],
    },
    tags: {
      en: ["denoising", "lab"],
      fa: ["نویززدایی", "آزمایشگاه"],
    },
  },
  {
    slug: "inverse-heat-dissipation-lab",
    group: "denoising",
    year: "2025",
    draft: true,
    repo: "https://github.com/mehdeh/inverse-heat-dissipation-lab",
    title: {
      en: "Inverse heat dissipation lab",
      fa: "آزمایشگاه اتلاف گرمای معکوس",
    },
    summary: {
      en: "Draft notebooks extending inverse heat dissipation generative models, following AaltoML.",
      fa: "دفترچه‌های پیش‌نویس برای گسترش مدل‌های مولد اتلاف گرمای معکوس، به‌دنبال AaltoML.",
    },
    body: {
      en: [
        "Inverse heat dissipation is a generative framing that runs the heat equation backwards. These notebooks are experimental extensions of that line of work, based on AaltoML material.",
        "Marked as a lab: useful to read, not a polished release.",
      ],
      fa: [
        "اتلاف گرمای معکوس یک چارچوب مولد است که معادله گرما را وارونه می‌راند. این دفترچه‌ها گسترش آزمایشی همان خط کارند، بر پایه مواد AaltoML.",
        "با برچسب آزمایشگاه: برای خواندن مفید است، نه انتشار پرداخت‌شده.",
      ],
    },
    tags: {
      en: ["lab", "generative", "heat"],
      fa: ["آزمایشگاه", "مولد", "گرما"],
    },
  },
  {
    slug: "gaussian-intuition-lab",
    group: "labs",
    year: "2025",
    repo: "https://github.com/mehdeh/gaussian-intuition-lab",
    title: {
      en: "Gaussian intuition lab",
      fa: "آزمایشگاه شهود گاوسی",
    },
    summary: {
      en: "Notebooks and plots for univariate and multivariate Gaussians, aimed at building intuition.",
      fa: "دفترچه و نمودار برای توزیع گاوسی یک‌متغیره و چندمتغیره، برای ساختن شهود.",
    },
    body: {
      en: [
        "Gaussians sit under diffusion, score matching, and a large part of classical ML. These notebooks walk through univariate and multivariate cases with figures meant to be stared at, not just executed.",
      ],
      fa: [
        "گاوسی زیر انتشار، تطبیق امتیاز و بخش بزرگی از یادگیری ماشین کلاسیک نشسته است. این دفترچه‌ها حالت یک‌متغیره و چندمتغیره را با شکل‌هایی پیش می‌برند که باید به آن‌ها نگاه کرد، نه فقط اجرا.",
      ],
    },
    tags: {
      en: ["Gaussian", "teaching"],
      fa: ["گاوسی", "آموزش"],
    },
  },
  {
    slug: "gaussian-interpolation",
    group: "labs",
    year: "2025",
    repo: "https://github.com/mehdeh/gaussian-interpolation",
    title: {
      en: "Gaussian interpolation",
      fa: "درونیابی گاوسی",
    },
    summary: {
      en: "Smooth interpolation between discrete points with weighted Gaussian functions, in PyTorch.",
      fa: "درونیابی هموار میان نقاط گسسته با توابع گاوسی وزن‌دار، در PyTorch.",
    },
    body: {
      en: [
        "A small PyTorch implementation of interpolation by placing weighted Gaussians on discrete knots. Related in spirit to the flexible interpolator, with a different kernel.",
      ],
      fa: [
        "پیاده‌سازی کوچک PyTorch برای درونیابی با گذاشتن گاوسی‌های وزن‌دار روی گره‌های گسسته. از نظر روح به درونیاب انعطاف‌پذیر نزدیک است، با هسته متفاوت.",
      ],
    },
    tags: {
      en: ["interpolation", "Gaussian"],
      fa: ["درونیابی", "گاوسی"],
    },
  },
  {
    slug: "ai-glossary-persian",
    group: "labs",
    year: "2025",
    repo: "https://github.com/mehdeh/ai-glossary-persian",
    demo: "https://mehdeh.github.io/ai-glossary-persian/",
    title: {
      en: "Persian AI glossary",
      fa: "واژه‌نامه فارسی هوش مصنوعی",
    },
    summary: {
      en: "A searchable Persian glossary of AI terms, based on Wikipedia’s glossary of artificial intelligence.",
      fa: "واژه‌نامه قابل جست‌وجوی فارسی اصطلاحات هوش مصنوعی، بر پایه واژه‌نامه ویکی‌پدیا.",
    },
    body: {
      en: [
        "English AI vocabulary travels faster than careful Persian equivalents. This glossary collects terms and short explanations, with search and categories, so students and translators have a shared reference.",
        "The live site is a static GitHub Pages app; the repository holds the entries and the interface.",
      ],
      fa: [
        "واژگان انگلیسی هوش مصنوعی سریع‌تر از معادل‌های دقیق فارسی حرکت می‌کنند. این واژه‌نامه اصطلاحات و توضیح کوتاه را با جست‌وجو و دسته جمع می‌کند تا دانشجو و مترجم مرجع مشترکی داشته باشند.",
        "سایت زنده یک برنامه ایستا روی GitHub Pages است؛ مخزن مدخل‌ها و رابط را نگه می‌دارد.",
      ],
    },
    tags: {
      en: ["Persian", "glossary", "teaching"],
      fa: ["فارسی", "واژه‌نامه", "آموزش"],
    },
  },
  {
    slug: "bbl-to-bibtex-converter",
    group: "labs",
    year: "2025",
    repo: "https://github.com/mehdeh/bbl-to-bibtex-converter",
    title: {
      en: "BBL to BibTeX converter",
      fa: "مبدل BBL به BibTeX",
    },
    summary: {
      en: "Zero-dependency Python tool that turns LaTeX .bbl files into .bib entries with automatic type detection.",
      fa: "ابزار پایتون بدون وابستگی که فایل‌های .bbl لاتک را با تشخیص خودکار نوع به مدخل .bib تبدیل می‌کند.",
    },
    body: {
      en: [
        "When a paper only ships a compiled .bbl, recovering a usable .bib is tedious. This command-line tool parses bibitems, authors, titles, venues, years, and URLs, and emits article or inproceedings entries.",
        "No third-party packages: a single script meant to be copied into a research folder and run.",
      ],
      fa: [
        "وقتی مقاله فقط .bbl کامپایل‌شده دارد، بازیابی .bib قابل استفاده خسته‌کننده است. این ابزار خط فرمان bibitem، نویسنده، عنوان، محل نشر، سال و URL را می‌خواند و مدخل article یا inproceedings می‌نویسد.",
        "بدون بسته سوم: یک اسکریپت برای کپی در پوشه پژوهش و اجرا.",
      ],
    },
    tags: {
      en: ["LaTeX", "BibTeX", "tool"],
      fa: ["لاتک", "BibTeX", "ابزار"],
    },
  },
  {
    slug: "galaxy-particle-simulator",
    group: "labs",
    year: "2025",
    repo: "https://github.com/mehdeh/galaxy-particle-simulator",
    demo: "https://mehdeh.github.io/galaxy-particle-simulator/",
    title: {
      en: "Galaxy particle simulator",
      fa: "شبیه‌ساز ذرات کهکشان",
    },
    summary: {
      en: "An interactive Three.js galaxy, generated from a single prompt — kept here as a lab, not as research.",
      fa: "کهکشان تعاملی Three.js، ساخته‌شده از یک پرامپت — اینجا به‌عنوان آزمایشگاه، نه پژوهش.",
    },
    body: {
      en: [
        "A real-time particle galaxy with on-screen controls, written in Three.js. It began as a single-prompt experiment with Claude Sonnet and is published as a small interactive lab.",
        "It does not belong with the diffusion work; it is here because making a living field of particles is still a good way to look at motion.",
      ],
      fa: [
        "کهکشان ذرات بلادرنگ با کنترل روی صفحه، نوشته‌شده با Three.js. از یک آزمایش تک‌پرامپت با Claude Sonnet شروع شد و به‌عنوان آزمایشگاه تعاملی کوچک منتشر شده است.",
        "در ردیف کارهای انتشار نیست؛ اینجاست چون میدان زنده ذرات هنوز راه خوبی برای دیدن حرکت است.",
      ],
    },
    tags: {
      en: ["Three.js", "lab", "interactive"],
      fa: ["Three.js", "آزمایشگاه", "تعاملی"],
    },
  },
  {
    slug: "irrational-digits-visualizer",
    group: "labs",
    year: "2026",
    repo: "https://github.com/mehdeh/irrational-digits-visualizer",
    title: {
      en: "Irrational digits visualizer",
      fa: "تصویرساز ارقام گنگ",
    },
    summary: {
      en: "A Delphi sketch that walks the decimal digits of irrationals as a 2D path, compared with random digits.",
      fa: "طرح دلفی که ارقام اعشاری اعداد گنگ را به‌صورت مسیر دوبعدی راه می‌رود و با ارقام تصادفی مقایسه می‌کند.",
    },
    body: {
      en: [
        "Decimal digits of π and other irrationals are drawn as a walk on the plane, then set beside walks from random digits. The question is visual: do patterns appear that a random sequence would not show?",
        "It is a draft, and it sits next to a longer interest in consciousness and the generation of random numbers — looking, not claiming.",
      ],
      fa: [
        "ارقام اعشاری π و دیگر اعداد گنگ به‌صورت قدم‌زدن روی صفحه کشیده می‌شوند و کنار قدم‌زدن ارقام تصادفی قرار می‌گیرند. پرسش دیداری است: آیا الگویی دیده می‌شود که دنباله تصادفی نشان ندهد؟",
        "پیش‌نویس است و کنار علاقه بلندمدت به آگاهی و تولید اعداد تصادفی می‌نشیند — نگاه کردن، نه ادعا.",
      ],
    },
    tags: {
      en: ["visualization", "randomness"],
      fa: ["تصویرسازی", "تصادف"],
    },
  },
  {
    slug: "realtime-voice-conversion",
    group: "archive",
    year: "2002",
    repo: "https://github.com/mehdeh/realtime-voice-conversion",
    title: {
      en: "Real-time voice conversion",
      fa: "تبدیل صدای بلادرنگ",
    },
    summary: {
      en: "Delphi pitch-shifting with live waveform display. Provincial winner, 4th Kharazmi Young Festival.",
      fa: "جابه‌جایی زیروبمی در دلفی با نمایش زنده شکل موج. برنده استانی چهارمین جشنواره جوان خوارزمی.",
    },
    body: {
      en: [
        "A 2002 Delphi program that captures the microphone, shifts pitch with a simplified Fourier method, and draws the waveform live.",
        "It won the provincial round of the 4th Kharazmi Young Festival — the first public mark on a path that later included speech and research on generative audio-adjacent ideas.",
      ],
      fa: [
        "برنامه دلفی ۱۳۸۱ که میکروفن را می‌گیرد، زیروبمی را با روش فوریه ساده‌شده جابه‌جا می‌کند و شکل موج را زنده می‌کشد.",
        "برنده مرحله استانی چهارمین جشنواره جوان خوارزمی شد — نخستین نشانه عمومی مسیری که بعداً به گفتار و ایده‌های نزدیک به صوت مولد رسید.",
      ],
    },
    tags: {
      en: ["Delphi", "audio", "Kharazmi"],
      fa: ["دلفی", "صوت", "خوارزمی"],
    },
  },
  {
    slug: "realtime-voice-changing-fft",
    group: "archive",
    year: "2002",
    repo: "https://github.com/mehdeh/realtime-voice-changing-fft",
    title: {
      en: "Real-time voice changing (FFT)",
      fa: "تغییر صدای بلادرنگ (FFT)",
    },
    summary: {
      en: "Delphi for .NET demo: microphone in, windowed FFT transformations, modified voice out.",
      fa: "نمایش دلفی برای .NET: میکروفن، تبدیل فوریه پنجره‌ای، صدای تغییر یافته.",
    },
    body: {
      en: [
        "A related voice-changing demo on Delphi for .NET. Audio is captured, transformed with windowed FFT, and played back with a basic waveform view.",
      ],
      fa: [
        "نمایش مرتبط تغییر صدا روی دلفی برای .NET. صوت گرفته می‌شود، با FFT پنجره‌ای تبدیل می‌شود و با نمای ساده شکل موج پخش می‌گردد.",
      ],
    },
    tags: {
      en: ["Delphi", "FFT", "audio"],
      fa: ["دلفی", "FFT", "صوت"],
    },
  },
  {
    slug: "persian-latin-tts",
    group: "archive",
    year: "2007",
    repo: "https://github.com/mehdeh/persian-latin-tts",
    title: {
      en: "Persian Latin TTS",
      fa: "متن‌به‌گفتار فارسی با خط لاتین",
    },
    summary: {
      en: "Diphone synthesis from Finglish (Persian in Latin script). Sharif Business Plan Competition winner, 2007.",
      fa: "سنتز دای‌فون از فینگلیش (فارسی با خط لاتین). برنده رقابت طرح کسب‌وکار شریف، ۱۳۸۶.",
    },
    body: {
      en: [
        "An archived 2007 Delphi project that turns Persian written in Latin letters into speech with diphone synthesis — the mobile text-to-speech idea that won the Sharif Business Plan Competition.",
      ],
      fa: [
        "پروژه بایگانی‌شده دلفی ۱۳۸۶ که فارسی نوشته‌شده با حروف لاتین را با سنتز دای‌فون به گفتار تبدیل می‌کند — همان ایده متن‌به‌گفتار همراه که رقابت طرح کسب‌وکار شریف را برد.",
      ],
    },
    tags: {
      en: ["TTS", "Persian", "Delphi"],
      fa: ["متن‌به‌گفتار", "فارسی", "دلفی"],
    },
  },
  {
    slug: "real-estate-web-system-delphi-intraweb",
    group: "archive",
    year: "2005",
    repo: "https://github.com/mehdeh/real-estate-web-system-delphi-intraweb",
    title: {
      en: "Real estate web system",
      fa: "سامانه وب املاک",
    },
    summary: {
      en: "B.Sc. thesis system: Delphi, IntraWeb, ADO. Listings, roles, search, and agency pages.",
      fa: "سامانه پایان‌نامه کارشناسی: دلفی، IntraWeb، ADO. آگهی، نقش، جست‌وجو و صفحات مشاور.",
    },
    body: {
      en: [
        "The undergraduate thesis at Yazd University: a real-estate web application with property search, listing submission, and roles for admin, owner, agency, and buyer.",
        "Built with Delphi, IntraWeb, and ADO — a full web system from a time when that stack was a reasonable way to ship software in Iran.",
      ],
      fa: [
        "پایان‌نامه کارشناسی در دانشگاه یزد: برنامه وب املاک با جست‌وجوی ملک، ثبت آگهی، و نقش مدیر، مالک، مشاور و خریدار.",
        "با دلفی، IntraWeb و ADO ساخته شد — سامانه وبی کامل از زمانی که این پشته راه معقولی برای تحویل نرم‌افزار در ایران بود.",
      ],
    },
    tags: {
      en: ["Delphi", "thesis", "web"],
      fa: ["دلفی", "پایان‌نامه", "وب"],
    },
  },
  {
    slug: "sliding-puzzle",
    group: "archive",
    year: "2002",
    repo: "https://github.com/mehdeh/sliding-puzzle",
    title: {
      en: "Sliding puzzle",
      fa: "پازل کشویی",
    },
    summary: {
      en: "Classic sliding puzzle in Delphi, around 2002, with a configurable grid.",
      fa: "پازل کشویی کلاسیک در دلفی، حدود ۱۳۸۱، با شبکه قابل تنظیم.",
    },
    body: {
      en: [
        "A small Delphi game: tiles in reverse order on a custom grid (for example 5×5), to be sorted. Kept in the archive as an early complete program, not as a current interest.",
      ],
      fa: [
        "بازی کوچک دلفی: خانه‌ها در ترتیب معکوس روی شبکه‌ای سفارشی (مثلاً ۵×۵) که باید مرتب شوند. در بایگانی به‌عنوان برنامه کامل اولیه مانده است، نه علاقه امروز.",
      ],
    },
    tags: {
      en: ["Delphi", "game"],
      fa: ["دلفی", "بازی"],
    },
  },
];

export function getProject(slug: string) {
  return projects.find((p) => p.slug === slug);
}

export function featuredProjects() {
  return projects.filter((p) => p.featured);
}

export function projectsByGroup(group: ProjectGroup) {
  return projects.filter((p) => p.group === group);
}
