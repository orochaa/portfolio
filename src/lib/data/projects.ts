/* eslint-disable unicorn/no-array-callback-reference */
import { getLanguage } from '@/lib/data/languages'
import type { Language, LanguageName } from '@/lib/data/languages'
import { getTechnology } from '@/lib/data/technologies'
import type { Technology, TechnologyName } from '@/lib/data/technologies'

export type TagName =
  | 'backend'
  | 'frontend'
  | 'mobile'
  | 'game'
  | 'tools'
  | 'serverless'
  | 'contributor'
  | 'live'

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
  tags: TagName[]
  stars?: number
  downloadsByMonth?: number
  _weight: number
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
      tags: ['frontend', 'live'],
      videoUrl: '/assets/cineapp.mp4',
      _weight: 1,
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
      tags: ['frontend', 'live'],
      videoUrl: '/assets/cantinho-do-acai.mp4',
      _weight: 1,
    },
    {
      name: 'ftec-chatbot',
      displayName: 'TechIAcad',
      description:
        'Chat with many AI integrations, and Dashboards for tracking token usage.',
      technologies: [
        'react',
        'node',
        'nest',
        'postgresql',
        'aws-sqs',
        'aws-s3',
      ],
      languages: ['typescript'],
      liveUrl: 'https://tap.uniftec.com.br/',
      imgUrl: '/assets/techiacad.png',
      tags: ['frontend', 'backend', 'live'],
      isPrivate: true,
      _weight: 2,
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
      tags: ['frontend', 'game', 'live'],
      _weight: 1,
    },
    {
      name: 'team-up',
      displayName: 'TeamUp',
      description: 'Android app to find coop players.',
      technologies: ['android', 'node', 'postgresql', 'steam'],
      languages: ['java', 'typescript'],
      githubUrl: 'https://github.com/orochaa/team-up?tab=readme-ov-file#readme',
      tags: ['mobile', 'backend'],
      imgUrl: '/assets/team-up.png',
      _weight: 1,
    },
    {
      name: 'url-shortener-lambda',
      displayName: 'URL Shortener',
      description: 'A simple, scalable URL shortener service.',
      technologies: ['node', 'aws-lambda', 'aws-dynamodb', 'serverless'],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/orochaa/url-shortener-lambda?tab=readme-ov-file#readme',
      tags: ['backend', 'serverless'],
      _weight: 1,
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
      tags: ['backend', 'serverless'],
      _weight: 1,
    },
    {
      name: 'lets-train',
      displayName: "Let's Train",
      description: 'Android/iOS app for tracking personalized workouts.',
      technologies: ['react-native', 'expo'],
      languages: ['typescript'],
      liveUrl: 'https://apps.apple.com/br/app/lets-train/id6739985648',
      videoUrl: '/assets/lets-train.mp4',
      tags: ['mobile', 'live'],
      isPrivate: true,
      _weight: 2,
    },
    {
      name: 'my-cli',
      displayName: 'MyCLI',
      description: 'A compilation of my CLI snippets.',
      technologies: ['go-clack'],
      languages: ['go'],
      githubUrl: 'https://github.com/orochaa/my-cli?tab=readme-ov-file#readme',
      tags: ['tools'],
      imgUrl: '/assets/my-cli.jpg',
      _weight: 1,
    },
    {
      name: 'go-clack',
      displayName: 'GoClack',
      description: 'Effortlessly build beautiful command-line apps',
      technologies: ['cobra'],
      languages: ['go'],
      githubUrl:
        'https://github.com/orochaa/go-clack?tab=readme-ov-file#readme',
      tags: ['tools'],
      imgUrl: '/assets/clack.gif',
      _weight: 1,
    },
    {
      name: 'clack',
      displayName: 'Clack',
      description: 'Effortlessly build beautiful command-line apps.',
      technologies: [],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/bombshell-dev/clack?tab=readme-ov-file#readme',
      liveUrl: 'https://www.clack.cc',
      tags: ['contributor', 'live'],
      imgUrl: '/assets/clack.gif',
      stars: 6400,
      downloadsByMonth: 4_800_000,
      _weight: 1,
    },
    {
      name: 'brazilian-utils',
      displayName: 'Brazilian Utils',
      description: 'Utils library for specific Brazilian businesses.',
      technologies: [],
      languages: ['typescript'],
      githubUrl:
        'https://github.com/brazilian-utils/brazilian-utils?tab=readme-ov-file#readme',
      liveUrl: 'https://brazilian-utils.com.br',
      tags: ['contributor', 'live'],
      imgUrl: '/assets/brazilian-utils.png',
      stars: 1600,
      downloadsByMonth: 42_000,
      _weight: 1,
    },
  ] satisfies (Omit<Project, 'technologies' | 'languages'> & {
    technologies: TechnologyName[]
    languages: LanguageName[]
  })[]
)
  .map(project => ({
    ...project,
    languages: project.languages.map(getLanguage),
    technologies: project.technologies.map(getTechnology),
  }))
  .sort((a, b) => b._weight - a._weight)
