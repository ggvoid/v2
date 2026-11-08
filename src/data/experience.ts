import type { ExperienceEntry } from '@/types';

export const experience: ExperienceEntry[] = [
  {
    id: 'fanduel-swe3',
    role: 'Software Engineer III',
    company: 'FanDuel',
    period: 'Feb 2024 – Present',
    focus: 'Authentication & login experiences',
    isCurrent: true,
    highlights: [
      'Contributed to passkey implementation and improved two-factor authentication flows.',
      'Led cross-functional initiatives with product, design, analytics and native engineering to drive biometric adoption.',
      'Helped rebrand login journeys across the U.S. and Canada, lifting login conversion by 1%.',
      'Improved pre-fill success by 50% through root cause analysis in Datadog.',
      'Removed ~30K lines of dead code, authored design docs and strengthened testing practices.',
      'Expanded full-stack contributions by building backend API endpoints and service-to-service functionality for frontend authentication features.',
      'Supported team growth through onboarding, code reviews, pair programming and the McKinsey Leadership Academy.',
    ],
  },
  {
    id: 'bettercloud-swe3',
    role: 'Software Engineer III',
    company: 'BetterCloud',
    period: 'Aug 2022 – Jan 2024',
    highlights: [
      'Maintained ~95% test coverage with Jest, React Testing Library and Enzyme.',
      'Instrumented Amplitude and Appcues so data teams could analyze the customer journey.',
      'Built features with React, Headless UI and Tailwind CSS to help customers secure assets efficiently.',
      'Led through code reviews, knowledge shares, pair programming and mentorship.',
    ],
  },
  {
    id: 'bettercloud-swe2',
    role: 'Software Engineer II',
    company: 'BetterCloud',
    period: 'May 2020 – Aug 2022',
    highlights: [
      'Partnered with product managers and designers to turn concepts into production features.',
      'Monitored GCP logs during on-call rotation.',
    ],
  },
  {
    id: 'home-depot-swe',
    role: 'Software Engineer',
    company: 'The Home Depot',
    period: 'Feb 2017 – May 2020',
    highlights: [
      'Built fast, reliable self-checkout experiences with React and Material UI.',
      'Ensured coverage with Jest, Cucumber and WebdriverIO.',
      'Recruited and mentored interns, and represented the company at hackathons.',
    ],
  },
];
