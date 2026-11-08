import { profile } from '@/data/profile';
import styles from './Footer.module.css';

export function Footer() {
  return (
    <footer className={styles.footer}>
      © {new Date().getFullYear()} {profile.name} · Built with Next.js, TypeScript and CSS Modules
    </footer>
  );
}
