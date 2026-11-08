import type { Project } from '@/types';

// To add a project: append an object below. Add a screenshot via `imageSrc` when you have one.
export const projects: Project[] = [
  {
    title: 'Spotify Profile',
    description: 'A web app to view your top songs, artists and podcasts in a clean, data-forward interface.',
    technologies: ['React', 'Spotify API', 'Styled Components'],
    githubUrl: 'https://github.com/ggvoid/spotify-profile',
    liveDemoUrl: '#',
  },
  {
    title: 'Mousai',
    description: 'Visualize your favorite artists’ collaborations as an interactive network of music connections.',
    technologies: ['React', 'D3', 'Spotify API'],
    githubUrl: '#',
    liveDemoUrl: '#',
  },
  {
    title: 'gisellep.com',
    description: 'My personal website, built with Gatsby and deployed on Vercel.',
    technologies: ['Next.js', 'TypeScript', 'Vercel', 'CSS Modules'],
    githubUrl: 'https://github.com/ggvoid/v2',
    liveDemoUrl: '#',
  },
];
