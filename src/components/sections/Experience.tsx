import { experience } from '@/data/experience';
import layout from '@/styles/layout.module.css';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Experience.module.css';

export function Experience() {
  return (
    <section id="experience" className={layout.section}>
      <div className={layout.container}>
        <Reveal><SectionHeading title="A decade of building for real users." /></Reveal>
        <ol className={styles.timeline}>
          {experience.map((entry, index) => (
            <li key={entry.id} className={styles.item}>
              <span className={`${styles.marker} ${entry.isCurrent ? styles.currentMarker : ''}`} />
              <Reveal delayMs={index * 60}>
                <article className={`${layout.card} ${styles.card}`}>
                  <div className={styles.titleRow}>
                    <h3 className={styles.role}>{entry.role} <span>· {entry.company}</span></h3>
                    <span className={styles.period}>{entry.period}</span>
                  </div>
                  {entry.focus && <p className={styles.focus}>{entry.focus}</p>}
                  <ul className={styles.highlights}>
                    {entry.highlights.map((highlight) => <li key={highlight}>{highlight}</li>)}
                  </ul>
                </article>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
