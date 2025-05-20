/* eslint-disable react/jsx-no-bind */
import { useTranslation } from '@/hooks/use-translation'
import type { Language } from '@/lib/i18n/locales/types'
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

export function TechnologiesSection(): React.JSX.Element {
  const { t, lang } = useTranslation()

  const [selectedTechnology, setSelectedTechnology] = useState<Technology>()

  return (
    <div id="technologies" className="bg-slate-950 py-20">
      <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 lg:grid-cols-2">
        <div className="mx-auto mb-6 w-xl max-w-full">
          <h2 className="mb-6 text-3xl font-semibold">
            {t('technologies.title')}
          </h2>
          <p className="min-h-40 text-zinc-300">
            {selectedTechnology?.description[lang] ??
              t('technologies.placeholder')}
          </p>
        </div>
        <div>
          <div className="mx-auto grid w-fit grid-cols-4 gap-3 sm:gap-6">
            {technologies.map(technology => (
              <div
                key={technology.displayName}
                title={technology.displayName}
                data-active={
                  selectedTechnology?.displayName === technology.displayName
                }
                className="flex size-20 items-center justify-center rounded-md border border-zinc-700 bg-zinc-900 text-slate-200 transition-colors duration-200 data-active:border-2 data-active:border-blue-500/80 data-active:bg-zinc-800 data-active:text-blue-500 sm:size-28"
                onPointerEnter={() => setSelectedTechnology(technology)}
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
  description: Record<Language, string>
  Icon: IconType
}

const technologies: Technology[] = [
  {
    displayName: 'NodeJS',
    description: {
      en: 'NodeJS is a runtime environment that allows JavaScript to be executed on the server-side. It enables developers to build scalable and high-performance network applications using JavaScript, facilitating tasks such as server management, database interactions, and handling HTTP requests.',
      pt: 'NodeJS é um ambiente de execução que permite que o JavaScript seja executado no lado do servidor. Ele permite que os desenvolvedores construam aplicações de rede escaláveis e de alto desempenho usando JavaScript, facilitando tarefas como gerenciamento de servidores, interações com bancos de dados e tratamento de requisições HTTP.',
    },
    Icon: SiNodedotjs,
  },
  {
    displayName: 'NestJS',
    description: {
      en: 'NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
      pt: 'NestJS é um framework progressivo para Node.js voltado à construção de aplicações do lado do servidor eficientes, confiáveis e escaláveis.',
    },
    Icon: SiNestjs,
  },
  {
    displayName: 'Express',
    description: {
      en: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building APIs and web applications. It simplifies routing, middleware integration, and request handling, making it a popular choice for developing server-side applications.',
      pt: 'Express é um framework minimalista e flexível para aplicações web em Node.js, que oferece um conjunto robusto de recursos para construir APIs e aplicações web. Ele simplifica o roteamento, a integração de middlewares e o tratamento de requisições, sendo uma escolha popular para desenvolvimento no lado do servidor.',
    },
    Icon: SiExpress,
  },
  {
    displayName: 'GraphQL',
    description: {
      en: 'GraphQL is a query language for APIs that allows clients to request specific data, reducing over-fetching and improving efficiency. It enables developers to define the structure of the data they need, and the server responds with exactly that data.',
      pt: 'GraphQL é uma linguagem de consulta para APIs que permite aos clientes requisitarem dados específicos, reduzindo excessos e melhorando a eficiência. Ele permite que os desenvolvedores definam a estrutura dos dados que precisam, e o servidor responde com exatamente esses dados.',
    },
    Icon: SiGraphql,
  },
  {
    displayName: 'React',
    description: {
      en: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and update the view in response to data changes.',
      pt: 'React é uma biblioteca JavaScript para construção de interfaces de usuário, especialmente aplicações de página única (single-page applications). Permite criar componentes reutilizáveis de UI, gerenciar o estado da aplicação de forma eficiente e atualizar a interface em resposta a mudanças nos dados.',
    },
    Icon: SiReact,
  },
  {
    displayName: 'NextJS',
    description: {
      en: 'NextJS is a React framework that provides additional features such as server-side rendering, static site generation, and API routes. It simplifies the development of production-ready React applications by offering built-in optimizations and tools.',
      pt: 'NextJS é um framework para React que oferece recursos adicionais como renderização no lado do servidor (server-side rendering), geração de sites estáticos (static site generation) e rotas de API. Ele simplifica o desenvolvimento de aplicações React prontas para produção com otimizações e ferramentas integradas.',
    },
    Icon: TbBrandNextjs,
  },
  {
    displayName: 'TailwindCSS',
    description: {
      en: 'TailwindCSS is a utility-first CSS framework that provides low-level utility classes for styling web applications. It allows developers to quickly build custom designs by composing pre-defined classes, resulting in maintainable and efficient CSS.',
      pt: 'TailwindCSS é um framework CSS com abordagem utility-first que fornece classes utilitárias de baixo nível para estilização de aplicações web. Ele permite construir rapidamente designs personalizados por meio da composição de classes pré-definidas, resultando em um CSS eficiente e fácil de manter.',
    },
    Icon: SiTailwindcss,
  },
  {
    displayName: 'Styled Components',
    description: {
      en: 'Styled Components is a CSS-in-JS library that allows you to write CSS code directly within your JavaScript components. It enhances component styling by enabling dynamic styles based on component props and state, and it automatically scopes styles to prevent conflicts.',
      pt: 'Styled Components é uma biblioteca CSS-in-JS que permite escrever código CSS diretamente dentro dos componentes JavaScript. Ela melhora a estilização ao permitir estilos dinâmicos com base em props e estado dos componentes, além de escopar automaticamente os estilos para evitar conflitos.',
    },
    Icon: SiStyledcomponents,
  },
  {
    displayName: 'ReactNative',
    description: {
      en: 'ReactNative is a framework for building native mobile apps with JavaScript and React. It allows developers to create cross-platform applications for iOS and Android from a single codebase, leveraging React components and native device capabilities.',
      pt: 'ReactNative é um framework para construção de aplicativos móveis nativos usando JavaScript e React. Ele permite criar aplicações multiplataforma para iOS e Android a partir de uma única base de código, aproveitando componentes React e funcionalidades nativas do dispositivo.',
    },
    Icon: TbBrandReactNative,
  },
  {
    displayName: 'ExpoJS',
    description: {
      en: 'ExpoJS is a framework built on top of React Native that provides a set of tools and services to simplify the development of mobile applications. It offers features like over-the-air updates, push notifications, and pre-built components, making it easier to build and deploy React Native apps.',
      pt: 'ExpoJS é um framework construído sobre o React Native que fornece um conjunto de ferramentas e serviços para simplificar o desenvolvimento de aplicativos móveis. Oferece recursos como atualizações over-the-air, notificações push e componentes prontos, facilitando a construção e o deploy de apps com React Native.',
    },
    Icon: SiExpo,
  },
  {
    displayName: 'PostgreSQL',
    description: {
      en: 'PostgreSQL is a powerful open-source relational database management system known for its reliability, robustness, and extensibility. It supports advanced data types, full-text search, and various features to handle complex data management tasks.',
      pt: 'PostgreSQL é um sistema de gerenciamento de banco de dados relacional open-source conhecido por sua confiabilidade, robustez e extensibilidade. Ele oferece suporte a tipos de dados avançados, busca textual e diversos recursos para lidar com tarefas complexas de gerenciamento de dados.',
    },
    Icon: SiPostgresql,
  },
  {
    displayName: 'Prisma',
    description: {
      en: 'Prisma is an open-source ORM (Object-Relational Mapping) for Node.js and TypeScript. It simplifies database access by providing a type-safe query builder and an intuitive data modeling interface, making it easier to interact with databases.',
      pt: 'Prisma é um ORM (Object-Relational Mapping) open-source para Node.js e TypeScript. Ele simplifica o acesso ao banco de dados oferecendo um construtor de consultas com segurança de tipos e uma interface intuitiva para modelagem de dados, facilitando a interação com bancos de dados.',
    },
    Icon: SiPrisma,
  },
  {
    displayName: 'Jest',
    description: {
      en: 'Jest is a JavaScript testing framework that focuses on simplicity and developer experience. It provides a complete solution for testing JavaScript code, including test runners, assertions, and mocking capabilities, making it easy to write and run tests for your applications.',
      pt: 'Jest é um framework de testes para JavaScript que foca na simplicidade e na experiência do desenvolvedor. Ele oferece uma solução completa para testar código JavaScript, incluindo runners de testes, asserções e funcionalidades de mocking, tornando fácil escrever e executar testes nas aplicações.',
    },
    Icon: SiJest,
  },
  {
    displayName: 'Testing Library',
    description: {
      en: 'Testing Library is a set of utilities that allow you to test React components in a way that resembles how users interact with them. It provides functions to query elements, simulate user events, and assert the expected behavior of components.',
      pt: 'Testing Library é um conjunto de utilitários que permite testar componentes React de forma semelhante à interação dos usuários. Ela oferece funções para consultar elementos, simular eventos do usuário e verificar o comportamento esperado dos componentes.',
    },
    Icon: SiTestinglibrary,
  },
  {
    displayName: 'Amazon Web Services',
    description: {
      en: 'Amazon Web Services is a suite of cloud computing services that offers a wide range of tools and infrastructure for building and running applications. It includes services for computing, storage, databases, analytics, machine learning, and more, providing scalable and cost-effective solutions for businesses of all sizes.',
      pt: 'Amazon Web Services é um conjunto de serviços de computação em nuvem que oferece uma ampla variedade de ferramentas e infraestrutura para construção e execução de aplicações. Inclui serviços de computação, armazenamento, bancos de dados, analytics, machine learning, entre outros, fornecendo soluções escaláveis e com bom custo-benefício para empresas de todos os tamanhos.',
    },
    Icon: SiAmazonwebservices,
  },
  {
    displayName: 'Docker',
    description: {
      en: 'Docker is a platform for developing, shipping, and running applications inside containers. It simplifies the process of packaging applications with their dependencies, ensuring consistency across different environments and facilitating deployment and scaling.',
      pt: 'Docker é uma plataforma para desenvolvimento, distribuição e execução de aplicações dentro de containers. Ele simplifica o empacotamento das aplicações com suas dependências, garantindo consistência entre ambientes e facilitando o deploy e a escalabilidade.',
    },
    Icon: SiDocker,
  },
]
