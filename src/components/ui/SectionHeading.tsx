import layout from '@/styles/layout.module.css';

interface SectionHeadingProps { title: React.ReactNode }

export function SectionHeading({ title }: SectionHeadingProps) {
  return <h2 className={layout.sectionTitle}>{title}</h2>;
}
