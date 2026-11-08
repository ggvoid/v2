import type { Stat } from '@/types';
import layout from '@/styles/layout.module.css';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './About.module.css';

const highlightStats: Stat[] = [
  { value: '9+', label: 'years shipping production UI' },
  { value: '50%', label: 'pre-fill success improvement' },
  { value: '~30K', label: 'lines of dead code removed' },
];

export function About() {
  return (
    <section id="about" className={layout.section}>
      <div className={`${layout.container} ${styles.grid}`}>
        <Reveal>
          <SectionHeading title="Good login is invisible. Getting there is the hard part." />
        </Reveal>
        <Reveal delayMs={100} className={styles.story}>
          <p>I’ve spent my career building user-facing applications, from self-checkout at The Home Depot to security tooling at BetterCloud, and now the authentication journeys at FanDuel, where every sign-in has to be fast, safe and frictionless.</p>
          <p>I’m drawn to complex problems with real human stakes: tracing a drop-off to its root cause, rethinking a two-factor flow, or rallying product, design, analytics and native teams around biometric adoption. My Master’s in HCI from Georgia Tech shapes how I weigh every decision.</p>
          <p>I care about the team as much as the code: thoughtful reviews, design docs, mentorship and leaving the codebase better than I found it.</p>
          <dl className={styles.stats}>
            {highlightStats.map(({ value, label }) => (
              <div key={label} className={styles.stat}>
                <dt className={styles.statValue}>{value}</dt>
                <dd className={styles.statLabel}>{label}</dd>
              </div>
            ))}
          </dl>
        </Reveal>
      </div>
    </section>
  );
}
