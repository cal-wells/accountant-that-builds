/**
 * CV content: work history, qualifications, and skills.
 * Skills are framed in finance-native outcomes, not tooling jargon (R5).
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
    title: "Group FP&A Manager",
    company: "Mattioli Woods (formerly Kingswood Group)",
    period: "Jan 2025 – Present",
    points: [
      "Spearheaded the end-to-end implementation of Datarails within six months - integrating Xero API data flows and restructuring the Chart of Accounts to ensure data integrity.",
      "Cut the month-end reporting cycle by ~3 days, eliminating manual spreadsheet dependencies and freeing ~20% of team capacity for value-add analysis.",
      "Built a Python script to automate client-losses reporting and forensic analysis for legal claims, using AI (Claude) to collate data directly supporting decisions.",
      "Constructed the 5-Year Plan Model on live Datarails feeds for real-time scenario planning and variance analysis.",
      "Lead monthly business partnering with five department heads, and own the Monthly Revenue Flash and ExCo Finance Pack presented to the Board.",
    ],
  },
  {
    title: "Assistant Manager - Banking & Capital Markets",
    company: "Ernst & Young (EY)",
    period: "Sept 2020 – Jan 2025",
    points: [
      "Rapidly promoted through the firm, leading large-scale assurance engagements for FTSE 100 and challenger banks.",
      "Managed and coached teams of up to 10 associates, overseeing allocation, performance reviews, and delivery under tight deadlines.",
      "Led validation of a £3bn derivative portfolio using Alteryx and Spotfire across 20,000+ trade samples, surfacing valuation risks traditional sampling missed.",
      "Evaluated complex IFRS 9/13 valuation models, challenging client methodologies on estimation uncertainty and going concern.",
    ],
  },
  {
    title: "Portfolio Management Intern",
    company: "Guinness Ventures",
    period: "Oct 2019 – Jan 2020",
    points: [
      "Prepared monthly performance packs for 25 portfolio companies, presenting KPI analysis directly to the Investment Committee.",
      "Ran sensitivity analysis and commercial due diligence on early-stage investment opportunities.",
    ],
  },
  {
    title: "Fund Research Assistant",
    company: "RBC Brewin Dolphin",
    period: "Jun 2017 – Aug 2018",
    points: [
      "Worked with the Head of Research to produce the weekly podcast and synthesise insights from leading fund managers for client distribution.",
    ],
  },
];

export const qualifications: Qualification[] = [
  {
    name: "ICAS Chartered Accountant (CA)",
    detail: "All first-time passes · 2020 – 2023",
  },
  {
    name: "BSc (Hons) Economics - First-Class Honours",
    detail: "University of Bath · 2015 – 2019",
  },
  {
    name: "Certifications",
    detail:
      "Python for Finance (Udemy) · Google Generative AI Leader · Bloomberg Market Concepts",
  },
];

export const skillGroups: SkillGroup[] = [
  {
    heading: "Faster reporting",
    blurb:
      "Implemented Datarails with Xero API integration and automated reporting in Python - cutting the month-end cycle by ~3 days and freeing 20% of team capacity.",
  },
  {
    heading: "Sharper forecasting",
    blurb:
      "Built a 5-Year Plan Model on live data feeds for real-time scenario planning and variance analysis, turning static budgets into a tool leadership can interrogate.",
  },
  {
    heading: "Real cost savings",
    blurb:
      "Wrote Python to automate forensic and losses analysis that used to be manual - measurable hours saved, fewer errors, and faster answers for the business.",
  },
  {
    heading: "The toolkit",
    blurb:
      "Python (Pandas), Datarails, PowerBI, Alteryx, Spotfire, and advanced Excel modelling - accelerated with AI assistants like Claude Code and Cursor, all explained in plain business terms.",
  },
];
