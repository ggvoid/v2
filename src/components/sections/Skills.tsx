import { profile } from '@/data/profile';
import { skillCategories } from '@/data/skills';
import layout from '@/styles/layout.module.css';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import styles from './Skills.module.css';

export function Skills() {
  return (
    <section id="skills" className={layout.section}>
      <div className={layout.container}>
        <Reveal><SectionHeading title="Tools I reach for." /></Reveal>
        <div className={styles.grid}>
          {skillCategories.map(({ name, skills }, index) => (
            <Reveal key={name} delayMs={index * 70} className={styles.fullHeight}>
              <div className={`${layout.card} ${styles.card}`}>
                <h3 className={styles.categoryName}>{name}</h3>
                <ul className={styles.skillList}>
                  {skills.map((skill) => <li key={skill} className={styles.skill}>{skill}</li>)}
                </ul>
              </div>
            </Reveal>
          ))}
        </div>
        <Reveal>
          <ul className={styles.education}>
            {profile.education.map((item) => <li key={item}>{item}</li>)}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
