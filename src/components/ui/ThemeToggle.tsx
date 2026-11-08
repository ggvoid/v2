'use client';

import { Icon } from './Icon';
import styles from './ThemeToggle.module.css';

type Theme = 'light' | 'dark';
const STORAGE_KEY = 'theme';

function getActiveTheme(): Theme {
  const explicitTheme = document.documentElement.dataset.theme;
  if (explicitTheme === 'light' || explicitTheme === 'dark') return explicitTheme;
  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function saveTheme(theme: Theme) {
  document.documentElement.dataset.theme = theme;
  try { localStorage.setItem(STORAGE_KEY, theme); } catch { /* storage unavailable: theme still applies this session */ }
}

/** Both icons render; CSS shows the one for the current theme, so server and client markup always match. */
export function ThemeToggle() {
  const toggleTheme = () => saveTheme(getActiveTheme() === 'dark' ? 'light' : 'dark');

  return (
    <button type="button" onClick={toggleTheme} className={styles.toggle} aria-label="Toggle light and dark theme">
      <Icon name="sun" className={styles.sun} />
      <Icon name="moon" className={styles.moon} />
    </button>
  );
}
