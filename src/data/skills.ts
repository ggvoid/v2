import type { SkillCategory } from '@/types';

export const skillCategories: SkillCategory[] = [
  { name: 'Frontend', skills: ['React', 'Redux', 'Sagas', 'JavaScript', 'TypeScript', 'HTML', 'CSS', 'Tailwind', 'Gatsby'] },
  { name: 'Testing', skills: ['Jest', 'React Testing Library', 'Enzyme', 'Cucumber', 'WebdriverIO'] },
  { name: 'Tools & Platforms', skills: ['Datadog', 'Amplitude', 'Appcues', 'GCP', 'Git', 'GitHub', 'Vercel'] },
  { name: 'Specialties', skills: ['Authentication', 'Passkeys', 'Biometrics', 'Two-Factor Auth', 'Java', 'Python'] },
];
