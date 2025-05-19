export const technologies = [
  {
    name: 'node',
    displayName: 'NodeJS',
    description:
      'Node.js® is a free, open-source, cross-platform JavaScript runtime environment that lets developers create servers, web apps, command line tools and scripts.',
    url: 'https://nodejs.org/en',
  },
  {
    name: 'react',
    displayName: 'ReactJS',
    description: 'The library for web and native user interfaces',
    url: 'https://react.dev/',
  },
  {
    name: 'postgresql',
    displayName: 'PostgreSQL',
    description: "The World's Most Advanced Open Source Relational Database",
    url: 'https://www.postgresql.org/',
  },
  {
    name: 'cobra',
    displayName: 'Cobra',
    description:
      'Cobra is a library for creating powerful modern CLI applications.',
    url: 'https://github.com/spf13/cobra?tab=readme-ov-file#readme',
  },
  {
    name: 'go-clack',
    displayName: 'Clack',
    description: 'Effortlessly build beautiful command-line apps.',
    url: 'https://github.com/orochaa/go-clack?tab=readme-ov-file#readme',
  },
  {
    name: 'aws-lambda',
    displayName: 'AWS Lambda',
    description: 'Run code without thinking about servers or clusters.',
    url: 'https://aws.amazon.com/lambda',
  },
  {
    name: 'aws-dynamodb',
    displayName: 'AWS DynamoDB',
    description:
      'Serverless, NoSQL, fully managed database with single-digit millisecond performance at any scale.',
    url: 'https://aws.amazon.com/dynamodb',
  },
  {
    name: 'aws-ses',
    displayName: 'AWS Simple Email Service',
    description:
      'Optimize your email communication with reliable, scalable, and secure solutions that ensure compliance and efficiency at competitive prices.',
    url: 'https://aws.amazon.com/ses',
  },
  {
    name: 'serverless',
    displayName: 'Serverless',
    description: 'Easy Serverless Apps on AWS Lambda.',
    url: 'https://www.serverless.com/',
  },
  {
    name: 'whatsapp',
    displayName: 'WhatsApp',
    description:
      'Simple, reliable, private messaging and calling for free*, available all over the world.',
    url: 'https://www.whatsapp.com/?lang=pt_br',
  },
  {
    name: 'tailwindcss',
    displayName: 'Tailwindcss',
    description: 'A utility-first CSS framework packed with classes.',
    url: 'https://tailwindcss.com/',
  },
  {
    name: 'busboy',
    displayName: 'Busboy',
    description: 'A streaming parser for HTML form data for node.js',
    url: 'https://github.com/mscdex/busboy#readme',
  },
  {
    name: 'the-movie-database',
    displayName: 'The Movie Database',
    description:
      'The Movie Database (TMDB) is a developer API for movies and TV shows.',
    url: 'https://www.themoviedb.org/',
  },
  {
    name: 'sqlite',
    displayName: 'SQLite',
    description: 'File based SQL database.',
    url: 'https://www.sqlite.org/',
  },
  {
    name: 'gorm',
    displayName: 'GORM',
    description: 'ORM library for Golang aims to be developer friendly.',
    url: 'https://gorm.io/',
  },
  {
    name: 'android',
    displayName: 'Android',
    description:
      'Operating system designed primarily for touchscreen-based mobile devices.',
    url: 'https://www.android.com/',
  },
  {
    name: 'steam',
    displayName: 'Steam',
    description:
      'API for retrieving information about games, players, and groups.',
    url: 'https://steamcommunity.com/dev',
  },
  {
    name: 'eslint',
    displayName: 'ESLint',
    description:
      'ESLint statically analyzes your code to quickly find problems.',
    url: 'https://eslint.org/',
  },
  {
    name: 'express',
    displayName: 'Express',
    description: 'Fast, unopinionated, minimalist router framework.',
    url: 'https://expressjs.com/',
  },
  {
    name: 'nest',
    displayName: 'NestJS',
    description:
      'A progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    url: 'https://nestjs.com/',
  },
  {
    name: 'socket',
    displayName: 'Socket',
    description:
      'Bidirectional and low-latency communication for every platform.',
    url: 'https://socket.io/',
  },
  {
    name: 'react-native',
    displayName: 'ReactNative',
    description: 'Build native mobile apps using JavaScript and React.',
    url: 'https://reactnative.dev/',
  },
  {
    name: 'expo',
    displayName: 'ExpoJS',
    description: 'Build native iOS and Android apps with JavaScript',
    url: 'https://expo.dev',
  },
  {
    name: 'aws-sqs',
    displayName: 'AWS Simple Queue Service',
    description:
      'A fully managed message queuing service that enables you to decouple and scale microservices, distributed systems, and serverless applications.',
    url: 'https://aws.amazon.com/sqs',
  },
  {
    name: 'aws-s3',
    displayName: 'AWS Simple Storage Service',
    description:
      'Object storage built to retrieve any amount of data from anywhere.',
    url: 'https://aws.amazon.com/s3',
  },
] as const satisfies Technology[]

export interface Technology {
  name: string
  displayName: string
  description: string
  url: string
}

export type TechnologyName = (typeof technologies)[number]['name']

export function getTechnology(technologyName: TechnologyName): Technology {
  const technology = technologies.find(
    technology => technology.name === technologyName
  )

  if (!technology) {
    throw new Error(`Technology ${technologyName} not found`)
  }

  return technology
}
