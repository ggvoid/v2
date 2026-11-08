'use client';

import { useEffect, useState } from 'react';
import { Icon, type IconName } from '../ui/Icon';
import styles from './PasskeyCard.module.css';

interface SignInStep { icon: IconName; title: string; subtitle: string }

const SIGN_IN_STEPS: SignInStep[] = [
  { icon: 'key', title: 'Passkey detected', subtitle: 'Touch ID on this device' },
  { icon: 'shieldCheck', title: 'Verifying identity', subtitle: 'Checking biometric signature' },
  { icon: 'shieldCheck', title: 'Signed in', subtitle: 'No password needed' },
];
const STEP_DURATION_MS = 2600;
const VERIFYING_STEP_INDEX = 1;
const FINAL_STEP_INDEX = SIGN_IN_STEPS.length - 1;

/** Decorative animation that nods to my authentication work. Hidden from assistive tech. */
export function PasskeyCard() {
  const [stepIndex, setStepIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => setStepIndex((current) => (current + 1) % SIGN_IN_STEPS.length), STEP_DURATION_MS);
    return () => clearInterval(timer);
  }, []);

  const { icon, title, subtitle } = SIGN_IN_STEPS[stepIndex];
  const isVerified = stepIndex === FINAL_STEP_INDEX;

  return (
    <div className={styles.wrapper} aria-hidden="true">
      <div className={styles.glow} />
      <div className={styles.card}>
        <div className={styles.statusRow}>
          <span>auth.session</span>
          <span className={isVerified ? styles.verified : ''}>● {isVerified ? 'verified' : 'pending'}</span>
        </div>
        <div className={styles.iconStage}>
          <div className={`${styles.iconCircle} ${stepIndex === VERIFYING_STEP_INDEX ? styles.pulsing : ''} ${isVerified ? styles.iconVerified : ''}`}>
            <Icon name={icon} size={40} />
          </div>
        </div>
        <p className={styles.title}>{title}</p>
        <p className={styles.subtitle}>{subtitle}</p>
        <div className={styles.progress}>
          {SIGN_IN_STEPS.map((step, index) => (
            <div key={step.title} className={styles.progressTrack}>
              <div className={styles.progressFill} style={{ width: index <= stepIndex ? '100%' : '0%' }} />
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
