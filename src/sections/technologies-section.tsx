/* eslint-disable react/jsx-no-bind */
import { useState } from 'react'
import type { IconType } from 'react-icons'
import {
  SiAmazonwebservices,
  SiDocker,
  SiExpo,
  SiExpress,
  SiGraphql,
  SiJest,
  SiNestjs,
  SiNodedotjs,
  SiPostgresql,
  SiPrisma,
  SiReact,
  SiStyledcomponents,
  SiTailwindcss,
  SiTestinglibrary,
} from 'react-icons/si'
import { TbBrandNextjs, TbBrandReactNative } from 'react-icons/tb'

const DEFAULT_DESCRIPTION = '*Hover a technology to see its description*'

export function TechnologiesSection(): React.JSX.Element {
  const [description, setDescription] = useState(DEFAULT_DESCRIPTION)

  return (
    <div className="bg-slate-950 py-20">
      <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-2">
        <div>
          <h2 className="mb-6 text-3xl font-semibold">Technologies</h2>
          <p className="text-zinc-300">{description}</p>
        </div>
        <div>
          <div className="mx-auto grid w-fit grid-cols-4 gap-6">
            {technologies.map(technology => (
              <div
                key={technology.displayName}
                title={technology.displayName}
                className="flex size-28 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-slate-200 transition-colors duration-200 hover:border-2 hover:border-blue-500/80 hover:bg-zinc-800 hover:text-blue-500"
                onPointerEnter={() => setDescription(technology.description)}
                onPointerLeave={() => setDescription(DEFAULT_DESCRIPTION)}
              >
                <technology.Icon size={40} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

interface Technology {
  displayName: string
  description: string
  Icon: IconType
}

const technologies: Technology[] = [
  {
    displayName: 'NodeJS',
    description:
      'NodeJS is a runtime environment that allows JavaScript to be executed on the server-side. It enables developers to build scalable and high-performance network applications using JavaScript, facilitating tasks such as server management, database interactions, and handling HTTP requests.',
    Icon: SiNodedotjs,
  },
  {
    displayName: 'NestJS',
    description:
      'NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
    Icon: SiNestjs,
  },
  {
    displayName: 'Express',
    description:
      'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building APIs and web applications. It simplifies routing, middleware integration, and request handling, making it a popular choice for developing server-side applications.',
    Icon: SiExpress,
  },
  {
    displayName: 'GraphQL',
    description:
      'GraphQL is a query language for APIs that allows clients to request specific data, reducing over-fetching and improving efficiency. It enables developers to define the structure of the data they need, and the server responds with exactly that data.',
    Icon: SiGraphql,
  },
  {
    displayName: 'React',
    description:
      'React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and update the view in response to data changes.',
    Icon: SiReact,
  },
  {
    displayName: 'NextJS',
    description:
      'NextJS is a React framework that provides additional features such as server-side rendering, static site generation, and API routes. It simplifies the development of production-ready React applications by offering built-in optimizations and tools.',
    Icon: TbBrandNextjs,
  },
  {
    displayName: 'TailwindCSS',
    description:
      'TailwindCSS is a utility-first CSS framework that provides low-level utility classes for styling web applications. It allows developers to quickly build custom designs by composing pre-defined classes, resulting in maintainable and efficient CSS.',
    Icon: SiTailwindcss,
  },
  {
    displayName: 'Styled Components',
    description:
      'Styled Components is a CSS-in-JS library that allows you to write CSS code directly within your JavaScript components. It enhances component styling by enabling dynamic styles based on component props and state, and it automatically scopes styles to prevent conflicts.',
    Icon: SiStyledcomponents,
  },
  {
    displayName: 'ReactNative',
    description:
      'ReactNative is a framework for building native mobile apps with JavaScript and React. It allows developers to create cross-platform applications for iOS and Android from a single codebase, leveraging React components and native device capabilities.',
    Icon: TbBrandReactNative,
  },
  {
    displayName: 'ExpoJS',
    description:
      'ExpoJS is a framework built on top of React Native that provides a set of tools and services to simplify the development of mobile applications. It offers features like over-the-air updates, push notifications, and pre-built components, making it easier to build and deploy React Native apps.',
    Icon: SiExpo,
  },
  {
    displayName: 'PostgreSQL',
    description:
      'PostgreSQL is a powerful open-source relational database management system known for its reliability, robustness, and extensibility. It supports advanced data types, full-text search, and various features to handle complex data management tasks.',
    Icon: SiPostgresql,
  },
  {
    displayName: 'Prisma',
    description:
      'Prisma is an open-source ORM (Object-Relational Mapping) for Node.js and TypeScript. It simplifies database access by providing a type-safe query builder and an intuitive data modeling interface, making it easier to interact with databases.',
    Icon: SiPrisma,
  },
  {
    displayName: 'Jest',
    description:
      'Jest is a JavaScript testing framework that focuses on simplicity and developer experience. It provides a complete solution for testing JavaScript code, including test runners, assertions, and mocking capabilities, making it easy to write and run tests for your applications.',
    Icon: SiJest,
  },
  {
    displayName: 'Testing Library',
    description:
      'Testing Library is a set of utilities that allow you to test React components in a way that resembles how users interact with them. It provides functions to query elements, simulate user events, and assert the expected behavior of components.',
    Icon: SiTestinglibrary,
  },
  {
    displayName: 'Amazon Web Services',
    description:
      'Amazon Web Services is a suite of cloud computing services that offers a wide range of tools and infrastructure for building and running applications. It includes services for computing, storage, databases, analytics, machine learning, and more, providing scalable and cost-effective solutions for businesses of all sizes.',
    Icon: SiAmazonwebservices,
  },
  {
    displayName: 'Docker',
    description:
      'Docker is a platform for developing, shipping, and running applications inside containers. It simplifies the process of packaging applications with their dependencies, ensuring consistency across different environments and facilitating deployment and scaling.',
    Icon: SiDocker,
  },
]
