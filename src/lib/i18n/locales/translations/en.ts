import type { LocaleTranslation } from '@/lib/i18n/locales/types'

export const en: LocaleTranslation = {
  header: {
    lang: {
      name: 'EN/US',
      imgUrl: '/assets/usa-flag.svg',
      imgAlt: 'usa-flag.svg',
    },
    home: 'Home',
  },
  about: {
    hello: 'Hello,',
    iam: "I'm",
    description:
      'Fullstack Software Developer with 5 years of experience in web development. Skilled in leading projects end-to-end, from requirements gathering to deployment and post-launch maintenance. Strong advocate for clean architecture, scalable code, and continuous improvement.',
  },
  education: {
    title: 'Education',
  },
  technologies: {
    title: 'Technologies',
    placeholder: '*Hover a technology to see its description*',
  },
  projects: {
    title: 'Projects',
    categories: 'Categories',
    filters: 'Filters',
    notFound: '😦 There is no project with selected filters.',
  },
  project: {
    link: 'Go to application',
    github: 'Go to repository',
    downloads: 'Downloads per month',
    private: 'Project is private',
  },
  learnMore: {
    title: 'Learn more',
    documentation: 'Go to documentation',
  },
}
