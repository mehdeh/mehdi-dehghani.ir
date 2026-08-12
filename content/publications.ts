import type { Localized } from "./types";

export type Publication = {
  id: string;
  title: string;
  authors: string;
  venue: Localized<string>;
  year: string;
  bibtex: string;
};

export const publications: Publication[] = [
  {
    id: "ids-2008",
    title: "Real-Time IDS Using Reinforcement Learning",
    authors: "H. Sagha, S. B. Shouraki, H. Khasteh and M. Dehghani",
    venue: {
      en: "IEEE Second International Symposium on Intelligent Information Technology Application, Shanghai, 2008.",
      fa: "دومین سمپوزیوم بین‌المللی IEEE کاربرد فناوری اطلاعات هوشمند، شانگهای، ۲۰۰۸.",
    },
    year: "2008",
    bibtex: `@inproceedings{sagha2008realtime,
  author    = {Sagha, H. and Shouraki, S. B. and Khasteh, H. and Dehghani, M.},
  title     = {Real-Time {IDS} Using Reinforcement Learning},
  booktitle = {IEEE Second International Symposium on Intelligent Information Technology Application},
  year      = {2008},
  address   = {Shanghai}
}`,
  },
  {
    id: "face-2008",
    title: "Finding Sparse Features in Face Detection Using Genetic Algorithms",
    authors: "H. Sagha, S. Kasaei, E. Enayati, M. Dehghani",
    venue: {
      en: "IEEE International Conference on Computational Cybernetics, 2008.",
      fa: "کنفرانس بین‌المللی IEEE سایبرنتیک محاسباتی، ۲۰۰۸.",
    },
    year: "2008",
    bibtex: `@inproceedings{sagha2008sparse,
  author    = {Sagha, H. and Kasaei, S. and Enayati, E. and Dehghani, M.},
  title     = {Finding Sparse Features in Face Detection Using Genetic Algorithms},
  booktitle = {IEEE International Conference on Computational Cybernetics},
  year      = {2008}
}`,
  },
];
