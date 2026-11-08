import type { Metadata } from 'next';
import { Fraunces, Inter, JetBrains_Mono } from 'next/font/google';
import './globals.css';

const displayFont = Fraunces({ subsets: ['latin'], variable: '--font-fraunces', display: 'swap' });
const bodyFont = Inter({ subsets: ['latin'], variable: '--font-inter', display: 'swap' });
const monoFont = JetBrains_Mono({ subsets: ['latin'], variable: '--font-jetbrains', display: 'swap' });

export const metadata: Metadata = {
  title: 'Giselle Pacheco — Software Engineer',
  description: 'Front-end software engineer building secure, intuitive login and authentication experiences.',
};

/** Runs before first paint so a saved theme never flashes the wrong colors. */
const applySavedThemeScript = `try{var t=localStorage.getItem('theme');if(t)document.documentElement.dataset.theme=t}catch(e){}`;

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${displayFont.variable} ${bodyFont.variable} ${monoFont.variable}`} suppressHydrationWarning>
      <head><script dangerouslySetInnerHTML={{ __html: applySavedThemeScript }} /></head>
      <body>{children}</body>
    </html>
  );
}
