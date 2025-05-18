/* eslint-disable unicorn/no-array-callback-reference */
import { getLanguage } from '@/data/languages'
import type { Language, LanguageName } from '@/data/languages'
import { getTechnology } from '@/data/tecnologies'
import type { Technology, TechnologyName } from '@/data/tecnologies'

export interface Project {
  name: string
  displayName: string
  description: string
  languages: Language[]
  technologies: Technology[]
  githubUrl: string
  liveUrl?: string
  tags: string[]
  _weight: number
}

export const projects: Project[] = (
  [
    {
      name: 'my-cli',
      displayName: 'MyCLI',
      description: 'A compilation of my CLI snippets.',
      technologies: ['go-clack'],
      languages: ['go'],
      githubUrl: 'https://github.com/orochaa/my-cli?tab=readme-ov-file#readme',
      tags: ['tools', 'automation', 'cli', 'prompt', 'terminal'],
      _weight: 2,
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
      _weight: 2,
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
      _weight: 3,
    },
    {
      name: 'newsletter-lambda',
      displayName: 'Newsletter',
      description:
        'A simple, scalable newsletter subscription API built with AWS Lambda, DynamoDB, SES, and the Serverless Framework, using TypeScript.',
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
      _weight: 3,
    },
    {
      name: 'url-shortener-lambda',
      displayName: 'URL Shortener',
      description:
        'A simple, scalable URL shortener service built with AWS Lambda, DynamoDB, and the Serverless Framework, using TypeScript.',
      technologies: ['node', 'aws-lambda', 'aws-dynamodb', 'serverless'],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/url-shortener-lambda?tab=readme-ov-file#readme',
      tags: ['backend', 'url-shortener', 'serverless'],
      _weight: 3,
    },
    {
      name: 'cantinho-do-acai',
      displayName: 'Cantinho do Açaí',
      description: '🍨 Online menu for @cantinho_do_acaiiii',
      technologies: ['react', 'whatsapp', 'tailwindcss'],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/url-shortener-lambda?tab=readme-ov-file#readme',
      liveUrl: 'https://cantinho-do-acai.vercel.app/',
      tags: ['frontend', 'menu', 'order', 'whatsapp'],
      _weight: 3,
    },
    {
      name: '2048',
      displayName: '2048',
      description:
        'Web-based implementation of the popular 2048 game, developed using TypeScript, React, and TailwindCSS.',
      technologies: ['react', 'tailwindcss'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/2048?tab=readme-ov-file#readme',
      liveUrl: 'https://2048-orochaa.vercel.app/',
      tags: ['frontend', 'game'],
      _weight: 3,
    },
    {
      name: 'snake',
      displayName: 'Snake',
      description:
        'Web-based implementation of the popular Snake game, developed using TypeScript, React, and TailwindCSS.',
      technologies: ['react', 'tailwindcss'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/snake?tab=readme-ov-file#readme',
      liveUrl: 'https://snake-orochaa.vercel.app/',
      tags: ['frontend', 'game'],
      _weight: 3,
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
      tags: ['backend', 'frontend', 'upload', 'streaming', 'realtime'],
      _weight: 3,
    },
    {
      name: 'cineapp',
      displayName: 'Cineapp',
      description:
        '🎥 Web app based on streaming services, made with React, TailwindCSS, SWR and The Movie Database.',
      technologies: ['react', 'tailwindcss', 'the-movie-database'],
      languages: ['typescript'],
      githubUrl: 'https://github.com/orochaa/cineapp?tab=readme-ov-file#readme',
      tags: ['frontend', 'movies', 'tv-shows', 'streaming'],
      _weight: 3,
    },
    {
      name: 'go-opportunities',
      displayName: 'Opportunities',
      description: 'API for job vacancy tracking',
      technologies: ['gorm', 'sqlite'],
      languages: ['go'],
      githubUrl:
        'https://github.com/orochaa/go-opportunities?tab=readme-ov-file#readme',
      tags: ['backend', 'jobs', 'opportunities', 'tracking'],
      _weight: 3,
    },
    {
      name: 'team-up',
      displayName: 'TeamUP',
      description: 'Android app to find coop players.',
      technologies: ['android', 'node', 'postgresql', 'steam'],
      languages: ['java', 'typescript'],
      githubUrl: 'https://github.com/orochaa/team-up?tab=readme-ov-file#readme',
      tags: ['mobile', 'backend', 'android', 'app', 'steam'],
      _weight: 3,
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
      _weight: 3,
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
      _weight: 3,
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
