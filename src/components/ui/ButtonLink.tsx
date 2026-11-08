import { Icon, type IconName } from './Icon';
import styles from './ButtonLink.module.css';

interface ButtonLinkProps { href: string; icon: IconName; variant?: 'primary' | 'secondary'; download?: boolean; children: React.ReactNode }

export function ButtonLink({ href, icon, variant = 'secondary', download, children }: ButtonLinkProps) {
  return (
    <a href={href} download={download} className={`${styles.button} ${styles[variant]}`}>
      {children}
      <Icon name={icon} size={16} className={styles.icon} />
    </a>
  );
}
