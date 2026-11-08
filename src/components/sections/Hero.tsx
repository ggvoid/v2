import { profile } from '@/data/profile';
import layout from '@/styles/layout.module.css';
import { ButtonLink } from '../ui/ButtonLink';
import { Icon } from '../ui/Icon';
import { PasskeyCard } from './PasskeyCard';
import styles from './Hero.module.css';

const socialLinks = [
  { label: 'GitHub', href: profile.githubUrl, icon: 'github' },
  { label: 'LinkedIn', href: profile.linkedinUrl, icon: 'linkedin' },
] as const;

export function Hero() {
  return (
    <section id="top" className={styles.hero}>
      <div className={styles.dots} aria-hidden="true" />
      <div className={`${layout.container} ${styles.grid}`}>
        <div>
          <p className={styles.eyebrow}>Software Engineer · Atlanta area</p>
          <h1 className={styles.headline}>
            Building the <em>front door</em> to products people trust.
          </h1>
          <p className={styles.intro}>
            I’m Giselle, a front-end engineer with nine years of experience. I design and ship secure,
            intuitive login and authentication experiences, from passkeys to biometrics.
          </p>
          <div className={styles.actions}>
            <ButtonLink href="#projects" icon="arrowDown" variant="primary">View My Work</ButtonLink>
            <ButtonLink href="#contact" icon="arrowUpRight">Get In Touch</ButtonLink>
            <ButtonLink href={profile.resumeUrl} icon="download" download>Download Resume</ButtonLink>
          </div>
          <ul className={styles.socials}>
            {socialLinks.map(({ label, href, icon }) => (
              <li key={label}>
                <a href={href} target="_blank" rel="noopener noreferrer" aria-label={label} className={styles.socialLink}>
                  <Icon name={icon} />
                </a>
              </li>
            ))}
          </ul>
        </div>
        <PasskeyCard />
      </div>
    </section>
  );
}
