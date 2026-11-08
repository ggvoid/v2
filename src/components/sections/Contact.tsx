import { profile } from '@/data/profile';
import layout from '@/styles/layout.module.css';
import { Icon, type IconName } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import styles from './Contact.module.css';

interface ContactMethod { label: string; value: string; href: string; icon: IconName }

const contactMethods: ContactMethod[] = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, icon: 'mail' },
  { label: 'LinkedIn', value: profile.linkedinHandle, href: profile.linkedinUrl, icon: 'linkedin' },
  { label: 'GitHub', value: profile.githubHandle, href: profile.githubUrl, icon: 'github' },
];

export function Contact() {
  return (
    <section id="contact" className={layout.section}>
      <div className={`${layout.container} ${styles.grid}`}>
        <Reveal>
          <h2 className={styles.headline}>Let’s build something <em>worth signing in to.</em></h2>
          <p className={styles.invitation}>
            Open to new opportunities, interesting problems and good conversations about auth, UX and
            frontend craft. My inbox is always open.
          </p>
        </Reveal>
        <Reveal delayMs={100}>
          <ul className={styles.methods}>
            {contactMethods.map(({ label, value, href, icon }) => (
              <li key={label}>
                <a href={href} className={styles.method}>
                  <span className={styles.methodIcon}><Icon name={icon} /></span>
                  <span className={styles.methodText}>
                    <span className={styles.methodLabel}>{label}</span>
                    <span className={styles.methodValue}>{value}</span>
                  </span>
                  <Icon name="arrowUpRight" className={styles.methodArrow} />
                </a>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  );
}
