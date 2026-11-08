import Image from 'next/image';
import { projects } from '@/data/projects';
import type { Project } from '@/types';
import layout from '@/styles/layout.module.css';
import { Icon } from '../ui/Icon';
import { Reveal } from '../ui/Reveal';
import { SectionHeading } from '../ui/SectionHeading';
import { Tag } from '../ui/Tag';
import styles from './Projects.module.css';

function ProjectCard({ project }: { project: Project }) {
  const { title, description, technologies, imageSrc, githubUrl, liveDemoUrl } = project;
  return (
    <article className={`${layout.card} ${styles.card}`}>
      <div className={styles.media}>
        {imageSrc ? (
          <Image src={imageSrc} alt={`${title} screenshot`} fill sizes="(min-width: 1024px) 33vw, 100vw" className={styles.image} />
        ) : (
          <div className={styles.placeholder}>
            <span>{title[0]}</span>
            <small>screenshot placeholder</small>
          </div>
        )}
      </div>
      <div className={styles.body}>
        <h3 className={styles.title}>{title}</h3>
        <p className={styles.description}>{description}</p>
        <ul className={styles.tags}>{technologies.map((tech) => <li key={tech}><Tag>{tech}</Tag></li>)}</ul>
        <div className={styles.links}>
          <a href={githubUrl} className={styles.link}><Icon name="github" size={16} /> Code</a>
          <a href={liveDemoUrl} className={`${styles.link} ${styles.demoLink}`}>Live demo <Icon name="arrowUpRight" size={16} /></a>
        </div>
      </div>
    </article>
  );
}

export function Projects() {
  return (
    <section id="projects" className={layout.section}>
      <div className={layout.container}>
        <Reveal><SectionHeading title="Things I’ve built on the side." /></Reveal>
        <ul className={styles.grid}>
          {projects.map((project, index) => (
            <li key={project.title}><Reveal delayMs={index * 90} className={styles.fullHeight}><ProjectCard project={project} /></Reveal></li>
          ))}
        </ul>
      </div>
    </section>
  );
}
