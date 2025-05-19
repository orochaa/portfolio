/* eslint-disable unicorn/no-array-callback-reference */
import { getLanguage } from '@/lib/data/languages'
import type { Language, LanguageName } from '@/lib/data/languages'
import { getTechnology } from '@/lib/data/technologies'
import type { Technology, TechnologyName } from '@/lib/data/technologies'

export interface Project {
  name: string
  displayName: string
  description: string
  languages: Language[]
  technologies: Technology[]
  githubUrl?: string
  liveUrl?: string
  isPrivate?: boolean
  videoUrl?: string
  imgUrl?: string
  tags: string[]
}

export const projects: Project[] = (
  [
    {
      name: 'cineapp',
      displayName: 'Cineapp',
      description: '🎥 Web app based on streaming services.',
      technologies: ['react', 'tailwindcss', 'the-movie-database'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/cineapp?tab=readme-ov-file#readme',
      liveUrl: 'https://cineapp-orochaa.vercel.app/',
      tags: ['frontend', 'movies', 'tv-shows', 'streaming'],
      videoUrl: '/assets/cineapp.mp4',
    },
    {
      name: 'cantinho-do-acai',
      displayName: 'Cantinho do Açaí',
      description: '🍨 Online menu for @cantinho_do_acaiiii.',
      technologies: ['react', 'whatsapp', 'tailwindcss'],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/url-shortener-lambda?tab=readme-ov-file#readme',
      liveUrl: 'https://cantinho-do-acai.vercel.app/',
      tags: ['frontend', 'menu', 'order', 'whatsapp'],
      videoUrl: '/assets/cantinho-do-acai.mp4',
    },
    {
      name: '2048',
      displayName: '2048',
      description: 'Web-based implementation of the popular 2048 game.',
      technologies: ['react', 'tailwindcss'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/2048?tab=readme-ov-file#readme',
      liveUrl: 'https://2048-orochaa.vercel.app/',
      videoUrl: '/assets/2048.mp4',
      tags: ['frontend', 'game'],
    },
    {
      name: 'snake',
      displayName: 'Snake',
      description: 'Web-based implementation of the popular Snake game.',
      technologies: ['react', 'tailwindcss'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/snake?tab=readme-ov-file#readme',
      liveUrl: 'https://snake-orochaa.vercel.app/',
      videoUrl: '/assets/snake.mp4',
      tags: ['frontend', 'game'],
    },
    {
      name: 'url-shortener-lambda',
      displayName: 'URL Shortener',
      description: 'A simple, scalable URL shortener service.',
      technologies: ['node', 'aws-lambda', 'aws-dynamodb', 'serverless'],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/url-shortener-lambda?tab=readme-ov-file#readme',
      tags: ['backend', 'url-shortener', 'serverless'],
    },
    {
      name: 'newsletter-lambda',
      displayName: 'Newsletter',
      description: 'A simple, scalable newsletter subscription API.',
      technologies: [
        'node',
        'aws-lambda',
        'aws-dynamodb',
        'aws-ses',
        'serverless',
      ],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/newsletter-lambda?tab=readme-ov-file#readme',
      tags: ['backend', 'newsletter', 'serverless'],
    },
    {
      name: 'go-opportunities',
      displayName: 'Opportunities',
      description: 'API for job vacancy tracking.',
      technologies: ['gorm', 'sqlite'],
      languages: ['go'],
      githubUrl:
        'https://github.com/orochaa/go-opportunities?tab=readme-ov-file#readme',
      tags: ['backend', 'jobs', 'opportunities', 'tracking'],
    },
    {
      name: 'go-mailer',
      displayName: 'Mailer',
      description:
        'A lightweight, high-concurrency email-dispatch service written in Go.',
      technologies: [],
      languages: ['go'],
      githubUrl:
        'https://github.com/orochaa/go-mailer?tab=readme-ov-file#readme',
      tags: ['backend', 'email', 'service', 'high-concurrency'],
    },
    {
      name: 'lets-train',
      displayName: "Let's Train",
      description: 'Android/iOS app for tracking personalized workouts.',
      technologies: ['react-native'],
      languages: ['typescript'],
      tags: ['mobile', 'android', 'ios'],
      liveUrl: 'https://apps.apple.com/br/app/lets-train/id6739985648',
      videoUrl: '/assets/lets-train.mp4',
      isPrivate: true,
    },
    {
      name: 'team-up',
      displayName: 'TeamUp',
      description: 'Android app to find coop players.',
      technologies: ['android', 'node', 'postgresql', 'steam'],
      languages: ['java', 'typescript'],
      githubUrl: 'https://github.com/orochaa/team-up?tab=readme-ov-file#readme',
      tags: ['mobile', 'backend', 'android', 'app', 'steam'],
      imgUrl: '/assets/team-up.png',
    },
    {
      name: 'scalable-upload',
      displayName: 'Scalable Upload',
      description:
        'API created without frameworks, made to handle files with GIGABYTES of data.',
      technologies: [
        'react',
        'node',
        'express',
        'tailwindcss',
        'busboy',
        'socket',
      ],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/scalable-upload?tab=readme-ov-file#readme',
      tags: ['backend', 'upload', 'streaming', 'realtime'],
      imgUrl: '/assets/scalable-upload.png',
    },
    {
      name: 'chattys',
      displayName: 'Chattys',
      description:
        'Web chat based on chat rooms about backend program languages.',
      technologies: ['node', 'express', 'socket'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/chattys?tab=readme-ov-file#readme',
      tags: ['backend', 'chat', 'realtime', 'rooms'],
    },
    {
      name: 'my-cli',
      displayName: 'MyCLI',
      description: 'A compilation of my CLI snippets.',
      technologies: ['go-clack'],
      languages: ['go'],
      githubUrl: 'https://github.com/orochaa/my-cli?tab=readme-ov-file#readme',
      tags: ['tools', 'automation', 'cli', 'prompt', 'terminal'],
      imgUrl: '/assets/my-cli.jpg',
    },
    {
      name: 'go-clack',
      displayName: 'GoClack',
      description: 'Effortlessly build beautiful command-line apps',
      technologies: ['cobra'],
      languages: ['go'],
      githubUrl:
        'https://github.com/orochaa/go-clack?tab=readme-ov-file#readme',
      tags: ['tools', 'cli', 'prompt', 'terminal'],
      imgUrl: '/assets/clack.gif',
    },
    {
      name: 'eslint-config',
      displayName: 'ESLint Config',
      description:
        'ESLint plugin that provides comprehensive configurations for various environments.',
      technologies: ['node', 'eslint'],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/eslint-config?tab=readme-ov-file#readme',
      tags: ['tools', 'eslint', 'config', 'plugin', 'linting'],
      imgUrl: '/assets/eslint-config.png',
    },
  ] satisfies (Omit<Project, 'technologies' | 'languages'> & {
    technologies: TechnologyName[]
    languages: LanguageName[]
  })[]
).map(project => ({
  ...project,
  languages: project.languages.map(getLanguage),
  technologies: project.technologies.map(getTechnology),
}))
