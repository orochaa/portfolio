/* eslint-disable react/jsx-no-bind */
import { useDebounce } from '@/hooks/use-debounce'
import { useTranslation } from '@/hooks/use-translation'
import { useWindowSize } from '@/hooks/use-window-size'
import type { Language } from '@/lib/i18n/locales/types'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useState } from 'react'
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

  const { windowWidth } = useWindowSize()

  const [selectedTechnology, setSelectedTechnology] = useState<Technology>()
  const [selectedCard, setSelectedCard] = useState<Technology>()

  const debounceSelectTechnology = useDebounce(setSelectedTechnology, 150)

  const handleSelectCard = useCallback(
    (technology: Technology) => {
      setSelectedCard(technology)
      debounceSelectTechnology(technology)
    },
    [debounceSelectTechnology]
  )

  return (
    <div id="technologies" className="bg-slate-950 py-20">
      <div className="mx-auto grid w-11/12 max-w-6xl grid-cols-1 gap-6 lg:grid-cols-2">
        <div className="mx-auto w-xl max-w-full">
          <h2 className="mb-6 text-3xl font-semibold">
            {t('technologies.title')}
          </h2>
          <div className="h-44 overflow-hidden sm:h-auto">
            <AnimatePresence>
              <motion.p
                key={selectedTechnology?.displayName}
                className="text-pretty whitespace-pre-wrap text-zinc-300"
                initial={{
                  y: -25,
                  opacity: 0,
                }}
                animate={{
                  y: 0,
                  opacity: 1,
                  transition: { duration: 0.15, delay: 0.4 },
                }}
                exit={{
                  y: 25,
                  opacity: 0,
                  transition: { duration: 0.15 },
                  height: 0,
                }}
              >
                {selectedTechnology?.description[lang] ??
                  t('technologies.placeholder')}
              </motion.p>
            </AnimatePresence>
          </div>
        </div>
        <div>
          <div className="mx-auto grid w-fit grid-cols-3 gap-3 sm:grid-cols-4 sm:gap-6">
            {technologies.map((technology, i) => {
              const colsByRow = windowWidth < 640 ? 3 : 4
              const colIndex = i % colsByRow
              const rowIndex = Math.floor(i / colsByRow)

              const isEvenRow = rowIndex % 2 === 0

              const colDelay = 0.15
              const rowDelay = colDelay * colsByRow

              const itemRowDelay = rowDelay * rowIndex
              const itemColDelay = isEvenRow
                ? colDelay * (colIndex + 1)
                : rowDelay - colDelay * colIndex
              const delay = itemRowDelay + itemColDelay

              return (
                <motion.div
                  key={technology.displayName}
                  title={technology.title}
                  data-active={
                    selectedCard?.displayName === technology.displayName
                  }
                  className="flex size-28 flex-col items-center justify-center gap-2 rounded-md border border-zinc-700 bg-zinc-900 p-4 text-slate-200 transition-colors duration-200 data-active:border-2 data-active:border-blue-500/80 data-active:bg-zinc-800 data-active:text-blue-500"
                  onPointerEnter={() => handleSelectCard(technology)}
                  initial={{ y: -50, x: isEvenRow ? -25 : 25, opacity: 0 }}
                  whileInView={{
                    y: 0,
                    x: 0,
                    opacity: 1,
                    transition: {
                      delay: delay,
                      duration: 0.2,
                    },
                  }}
                  viewport={{ once: true }}
                >
                  <technology.Icon size={40} />
                  {technology.displayName}
                </motion.div>
              )
            })}
          </div>
        </div>
      </div>
    </div>
  )
}

interface Technology {
  title: string
  displayName: string
  description: Record<Language, string>
  Icon: IconType
}

const technologies: Technology[] = [
  {
    title: 'NodeJS',
    displayName: 'NodeJS',
    description: {
      en: 'NodeJS is a runtime environment that allows JavaScript to be executed on the server-side. It enables developers to build scalable and high-performance network applications using JavaScript, facilitating tasks such as server management, database interactions, and handling HTTP requests.',
      'pt-BR':
        'NodeJS é um ambiente de execução que permite que o JavaScript seja executado no lado do servidor. Ele permite que os desenvolvedores construam aplicações de rede escaláveis e de alto desempenho usando JavaScript, facilitando tarefas como gerenciamento de servidores, interações com bancos de dados e tratamento de requisições HTTP.',
    },
    Icon: SiNodedotjs,
  },
  {
    title: 'NestJS',
    displayName: 'NestJS',
    description: {
      en: 'NestJS is a progressive Node.js framework for building efficient, reliable and scalable server-side applications.',
      'pt-BR':
        'NestJS é um framework progressivo para Node.js voltado à construção de aplicações do lado do servidor eficientes, confiáveis e escaláveis.',
    },
    Icon: SiNestjs,
  },
  {
    title: 'Express',
    displayName: 'Express',
    description: {
      en: 'Express is a minimal and flexible Node.js web application framework that provides a robust set of features for building APIs and web applications. It simplifies routing, middleware integration, and request handling, making it a popular choice for developing server-side applications.',
      'pt-BR':
        'Express é um framework minimalista e flexível para aplicações web em Node.js, que oferece um conjunto robusto de recursos para construir APIs e aplicações web. Ele simplifica o roteamento, a integração de middlewares e o tratamento de requisições, sendo uma escolha popular para desenvolvimento no lado do servidor.',
    },
    Icon: SiExpress,
  },
  {
    title: 'GraphQL',
    displayName: 'GraphQL',
    description: {
      en: 'GraphQL is a query language for APIs that allows clients to request specific data, reducing over-fetching and improving efficiency. It enables developers to define the structure of the data they need, and the server responds with exactly that data.',
      'pt-BR':
        'GraphQL é uma linguagem de consulta para APIs que permite aos clientes requisitarem dados específicos, reduzindo excessos e melhorando a eficiência. Ele permite que os desenvolvedores definam a estrutura dos dados que precisam, e o servidor responde com exatamente esses dados.',
    },
    Icon: SiGraphql,
  },
  {
    title: 'React',
    displayName: 'React',
    description: {
      en: 'React is a JavaScript library for building user interfaces, particularly single-page applications. It allows developers to create reusable UI components, manage application state efficiently, and update the view in response to data changes.',
      'pt-BR':
        'React é uma biblioteca JavaScript para construção de interfaces de usuário, especialmente aplicações de página única (single-page applications). Permite criar componentes reutilizáveis de UI, gerenciar o estado da aplicação de forma eficiente e atualizar a interface em resposta a mudanças nos dados.',
    },
    Icon: SiReact,
  },
  {
    title: 'NextJS',
    displayName: 'NextJS',
    description: {
      en: 'NextJS is a React framework that provides additional features such as server-side rendering, static site generation, and API routes. It simplifies the development of production-ready React applications by offering built-in optimizations and tools.',
      'pt-BR':
        'NextJS é um framework para React que oferece recursos adicionais como renderização no lado do servidor (server-side rendering), geração de sites estáticos (static site generation) e rotas de API. Ele simplifica o desenvolvimento de aplicações React prontas para produção com otimizações e ferramentas integradas.',
    },
    Icon: TbBrandNextjs,
  },
  {
    title: 'TailwindCSS',
    displayName: 'TailwindCSS',
    description: {
      en: 'TailwindCSS is a utility-first CSS framework that provides low-level utility classes for styling web applications. It allows developers to quickly build custom designs by composing pre-defined classes, resulting in maintainable and efficient CSS.',
      'pt-BR':
        'TailwindCSS é um framework CSS com abordagem utility-first que fornece classes utilitárias de baixo nível para estilização de aplicações web. Ele permite construir rapidamente designs personalizados por meio da composição de classes pré-definidas, resultando em um CSS eficiente e fácil de manter.',
    },
    Icon: SiTailwindcss,
  },
  {
    title: 'Styled Components',
    displayName: 'StyledComp.',
    description: {
      en: 'Styled Components is a CSS-in-JS library that allows you to write CSS code directly within your JavaScript components. It enhances component styling by enabling dynamic styles based on component props and state, and it automatically scopes styles to prevent conflicts.',
      'pt-BR':
        'Styled Components é uma biblioteca CSS-in-JS que permite escrever código CSS diretamente dentro dos componentes JavaScript. Ela melhora a estilização ao permitir estilos dinâmicos com base em props e estado dos componentes, além de escopar automaticamente os estilos para evitar conflitos.',
    },
    Icon: SiStyledcomponents,
  },
  {
    title: 'ReactNative',
    displayName: 'ReactNative',
    description: {
      en: 'ReactNative is a framework for building native mobile apps with JavaScript and React. It allows developers to create cross-platform applications for iOS and Android from a single codebase, leveraging React components and native device capabilities.',
      'pt-BR':
        'ReactNative é um framework para construção de aplicativos móveis nativos usando JavaScript e React. Ele permite criar aplicações multiplataforma para iOS e Android a partir de uma única base de código, aproveitando componentes React e funcionalidades nativas do dispositivo.',
    },
    Icon: TbBrandReactNative,
  },
  {
    title: 'ExpoJS',
    displayName: 'ExpoJS',
    description: {
      en: 'ExpoJS is a framework built on top of React Native that provides a set of tools and services to simplify the development of mobile applications. It offers features like over-the-air updates, push notifications, and pre-built components, making it easier to build and deploy React Native apps.',
      'pt-BR':
        'ExpoJS é um framework construído sobre o React Native que fornece um conjunto de ferramentas e serviços para simplificar o desenvolvimento de aplicativos móveis. Oferece recursos como atualizações over-the-air, notificações push e componentes prontos, facilitando a construção e o deploy de apps com React Native.',
    },
    Icon: SiExpo,
  },
  {
    title: 'PostgreSQL',
    displayName: 'PostgreSQL',
    description: {
      en: 'PostgreSQL is a powerful open-source relational database management system known for its reliability, robustness, and extensibility. It supports advanced data types, full-text search, and various features to handle complex data management tasks.',
      'pt-BR':
        'PostgreSQL é um sistema de gerenciamento de banco de dados relacional open-source conhecido por sua confiabilidade, robustez e extensibilidade. Ele oferece suporte a tipos de dados avançados, busca textual e diversos recursos para lidar com tarefas complexas de gerenciamento de dados.',
    },
    Icon: SiPostgresql,
  },
  {
    title: 'Prisma',
    displayName: 'Prisma',
    description: {
      en: 'Prisma is an open-source ORM (Object-Relational Mapping) for Node.js and TypeScript. It simplifies database access by providing a type-safe query builder and an intuitive data modeling interface, making it easier to interact with databases.',
      'pt-BR':
        'Prisma é um ORM (Object-Relational Mapping) open-source para Node.js e TypeScript. Ele simplifica o acesso ao banco de dados oferecendo um construtor de consultas com segurança de tipos e uma interface intuitiva para modelagem de dados, facilitando a interação com bancos de dados.',
    },
    Icon: SiPrisma,
  },
  {
    title: 'Jest',
    displayName: 'Jest',
    description: {
      en: 'Jest is a JavaScript testing framework that focuses on simplicity and developer experience. It provides a complete solution for testing JavaScript code, including test runners, assertions, and mocking capabilities, making it easy to write and run tests for your applications.',
      'pt-BR':
        'Jest é um framework de testes para JavaScript que foca na simplicidade e na experiência do desenvolvedor. Ele oferece uma solução completa para testar código JavaScript, incluindo runners de testes, asserções e funcionalidades de mocking, tornando fácil escrever e executar testes nas aplicações.',
    },
    Icon: SiJest,
  },
  {
    title: 'Testing Library',
    displayName: 'TestingLibrary',
    description: {
      en: 'Testing Library is a set of utilities that allow you to test React components in a way that resembles how users interact with them. It provides functions to query elements, simulate user events, and assert the expected behavior of components.',
      'pt-BR':
        'Testing Library é um conjunto de utilitários que permite testar componentes React de forma semelhante à interação dos usuários. Ela oferece funções para consultar elementos, simular eventos do usuário e verificar o comportamento esperado dos componentes.',
    },
    Icon: SiTestinglibrary,
  },
  {
    title: 'Amazon Web Services',
    displayName: 'AWS',
    description: {
      en: 'Amazon Web Services is a suite of cloud computing services that offers a wide range of tools and infrastructure for building and running applications. It includes services for computing, storage, databases, analytics, machine learning, and more.',
      'pt-BR':
        'Amazon Web Services é um conjunto de serviços de computação em nuvem que oferece uma ampla variedade de ferramentas e infraestrutura para construção e execução de aplicações. Inclui serviços de armazenamento, bancos de dados, analytics, machine learning, entre outros.',
    },
    Icon: SiAmazonwebservices,
  },
  {
    title: 'Docker',
    displayName: 'Docker',
    description: {
      en: 'Docker is a platform for developing, shipping, and running applications inside containers. It simplifies the process of packaging applications with their dependencies, ensuring consistency across different environments and facilitating deployment and scaling.',
      'pt-BR':
        'Docker é uma plataforma para desenvolvimento, distribuição e execução de aplicações dentro de containers. Ele simplifica o empacotamento das aplicações com suas dependências, garantindo consistência entre ambientes e facilitando o deploy e a escalabilidade.',
    },
    Icon: SiDocker,
  },
]
