/**
 * CV content: work history, qualifications, and skills.
 * Skills are framed in finance-native outcomes, not tooling jargon (R5).
 *
 * TODO(owner): replace the placeholder roles, dates, and bullet points with
 * your real history. Keep bullets outcome-focused (what changed, ideally a number).
 */

export type Role = {
  title: string;
  company: string;
  period: string;
  points: string[];
};

export type Qualification = {
  name: string;
  detail: string;
};

export type SkillGroup = {
  heading: string;
  blurb: string;
};

export const roles: Role[] = [
  {
    title: "FP&A Manager",
    company: "Company name",
    period: "2023 – present",
    points: [
      "Own the annual budget and rolling forecast for a £X turnover business.",
      "Rebuilt monthly reporting with Python, cutting the close-and-report cycle from days to hours.",
      "Partner with department heads to turn numbers into decisions leadership acts on.",
    ],
  },
  {
    title: "Finance Analyst",
    company: "Company name",
    period: "2020 – 2023",
    points: [
      "Built forecasting and scenario models that informed pricing and headcount decisions.",
      "Automated recurring management-pack analysis, freeing days each month for real insight.",
    ],
  },
  {
    title: "Trainee / Assistant Accountant",
    company: "Company name",
    period: "2018 – 2020",
    points: [
      "Qualified while delivering month-end, reconciliations, and statutory reporting.",
    ],
  },
];

export const qualifications: Qualification[] = [
  {
    name: "Qualified Accountant (ACCA / CIMA / ACA)",
    detail: "TODO(owner): name your body and year qualified.",
  },
  {
    name: "Degree",
    detail: "TODO(owner): degree, institution, year.",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: "Faster reporting",
    blurb:
      "I use Python and AI to automate the repetitive parts of reporting — pulling, cleaning, and reconciling data — so the monthly cycle takes hours, not days.",
  },
  {
    heading: "Sharper forecasting",
    blurb:
      "Scenario and driver-based models, increasingly assisted by AI, that make forecasts quicker to build and easier to stress-test.",
  },
  {
    heading: "Real cost savings",
    blurb:
      "Identifying the manual finance tasks worth automating and building the tools to do it — measurable hours saved and fewer errors.",
  },
  {
    heading: "The toolkit",
    blurb:
      "Python for data work, dashboards for visibility, and AI tools (including Claude) woven into day-to-day finance — all in plain business terms.",
  },
];
