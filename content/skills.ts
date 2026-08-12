import type { Localized } from "./types";

export type SkillGroup = {
  label: Localized<string>;
  items: string;
};

export const skills: SkillGroup[] = [
  {
    label: { en: "Languages", fa: "زبان‌ها" },
    items: "Python, C++, Delphi",
  },
  {
    label: { en: "Machine learning", fa: "یادگیری ماشین" },
    items: "PyTorch, NumPy, Pandas, SciPy, scikit-learn, OpenCV",
  },
  {
    label: { en: "Experimentation", fa: "آزمایش و تنظیم" },
    items: "Hydra, Optuna, MLflow, Ray, Captum, TensorBoard",
  },
  {
    label: { en: "Other", fa: "سایر" },
    items: "Git, Linux, LaTeX",
  },
];
