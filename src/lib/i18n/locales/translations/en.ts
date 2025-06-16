import type { LocaleTranslation } from '@/lib/i18n/locales/types'

export const en: LocaleTranslation = {
  header: {
    lang: {
      name: 'EN/US',
      imgUrl: '/assets/usa-flag.svg',
      imgAlt: 'usa-flag.svg',
    },
  },
  home: {
    title: 'Home',
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
    subtitle: 'Main technologies that I work with.',
    hint: 'Hover a technology to see its description',
  },
  'hard-skills': {
    title: 'Hard Skills',
    subtitle: 'Technical skills and specific knowledge',
  },
  'soft-skills': {
    title: 'Soft Skills',
    subtitle: 'Interpersonal and behavioral skills',
  },
  projects: {
    title: 'Projects',
    categories: 'Categories',
    filters: 'Filters',
    notFound: '😦 There is no project with selected filters.',
  },
  contact: {
    title: 'Contact Me',
    subtitle:
      'Feel free to reach out for new opportunities, collaborations, or just to say hi!',
    form: {
      name: {
        label: 'Name',
        placeholder: 'Enter your name',
      },
      email: {
        label: 'Email',
        placeholder: 'example@gmail.com',
      },
      subject: {
        label: 'Subject',
        placeholder: 'Enter the subject of your message',
      },
      message: {
        label: 'Message',
        placeholder: 'Write your message here',
      },
      submit: 'Send message',
      pending: 'Sending message...',
    },
    alert: {
      success: {
        title: 'Message sent successfully!',
        message:
          'Thanks for your message! I will get back to you as soon as possible.',
      },
      error: {
        title: 'Error sending message!',
        message:
          'There was an error sending your message. Please try again later.',
      },
    },
  },
  project: {
    link: 'Go to application',
    github: 'Go to repository',
    private: 'private',
    privateTitle: 'Project is private',
    downloadsPerMonth: '{{downloads}}/month',
    downloadsTitle: 'Downloads per month',
  },
  learnMore: {
    title: 'Learn more',
    documentation: 'Go to documentation',
  },
}
