import { navigationLinks } from '@/data/navigation';
import layout from '@/styles/layout.module.css';
import { ThemeToggle } from '../ui/ThemeToggle';
import styles from './Navbar.module.css';

export function Navbar() {
  return (
    <header className={styles.header}>
      <nav aria-label="Primary" className={`${layout.container} ${styles.nav}`}>
        <a href="#top" className={styles.logo}>gp<span>.</span></a>
        <ul className={styles.links}>
          {navigationLinks.map(({ label, sectionId }) => (
            <li key={sectionId}><a href={`#${sectionId}`} className={styles.link}>{label}</a></li>
          ))}
        </ul>
        <ThemeToggle />
      </nav>
    </header>
  );
}
