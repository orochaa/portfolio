import { GlowContainer } from '@/components/glow-container'
import { Title } from '@/components/title'
import { useTranslation } from '@/hooks/use-translation'
import type { Language } from '@/lib/i18n/locales/types'

export function EducationSection(): React.JSX.Element {
  const { t, lang } = useTranslation()

  return (
    <div
      id="education"
      className="from-background bg-gradient-to-br from-40% to-zinc-950 py-20"
    >
      <div className="mx-auto w-11/12 max-w-7xl">
        <Title className="mx-auto w-fit after:left-1/2 after:w-5/7 after:-translate-x-1/2 after:from-cyan-500 after:via-blue-500 after:to-cyan-500">
          {t('education.title')}
        </Title>
        <div className="flex flex-col gap-10">
          {certifications.map(certification => (
            <div
              className="gap-6 even:flex-row-reverse md:flex"
              key={certification.en.title}
            >
              <GlowContainer
                containerClassName="shrink-0 bg-zinc-800 p-1 rounded-md rounded-b-none md:size-fit md:rounded-full "
                glowClassName="size-[28rem] from-sky-500"
              >
                <a
                  href={certification.institutionUrl}
                  title={certification[lang].institutionName}
                  className="bg-background relative block md:rounded-full md:p-1"
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                >
                  <img
                    src={certification.imgUrl}
                    alt="formatura.jpeg"
                    className="h-48 w-full object-cover md:w-48 md:rounded-full"
                    loading="lazy"
                  />
                </a>
              </GlowContainer>
              <GlowContainer
                containerClassName="rounded-md rounded-t-none h-fit bg-zinc-800 p-1 md:rounded-t-md"
                glowClassName="size-[28rem] from-sky-500"
              >
                <div className="relative h-full rounded-md bg-zinc-900/90 p-6">
                  <p className="mb-1 flex items-center gap-1.5 text-sm text-zinc-100">
                    {certification.startAt.toLocaleString(lang, {
                      month: '2-digit',
                      year: 'numeric',
                    })}
                    <span className="block h-0.5 w-1.5 rounded-lg bg-zinc-400" />
                    {certification.endAt?.toLocaleString(lang, {
                      month: '2-digit',
                      year: 'numeric',
                    }) ?? 'Present'}
                  </p>
                  <p className="mb-4 text-xl font-semibold text-pretty">
                    {certification[lang].title}
                  </p>
                  <p className="text-base text-pretty">
                    {certification[lang].description}
                  </p>
                </div>
              </GlowContainer>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

type Certification = Record<
  Language,
  {
    title: string
    description: string
    institutionName: string
  }
> & {
  startAt: Date
  endAt: Date | undefined
  imgUrl: string
  institutionUrl: string
}

const certifications: Certification[] = [
  {
    en: {
      title: 'Scalable Microservices Event',
      description:
        'I participated an advanced event focused on designing scalable microservices architectures powered by Rocketseat, where I deepened my knowledge in microservices architecture, distributed systems, observability and scalability practices using modern tools and strategies.',
      institutionName: 'Rocketseat',
    },
    'pt-BR': {
      title: 'Evento Microsserviços Escaláveis',
      description:
        'Participei de um evento avançado focado em projetar microsserviços escaláveis promovido pela Rocketseat, onde aprofundei meus conhecimentos em arquitetura de microsserviços, sistemas distribuídos, observabilidade e práticas de escalabilidade usando ferramentas e estratégias modernas.',
      institutionName: 'Rocketseat',
    },
    startAt: new Date(2025, 5, 2),
    endAt: new Date(2025, 5, 6),
    imgUrl: '/assets/education/rocketseat.jpg',
    institutionUrl: 'https://www.rocketseat.com.br/',
  },
  {
    en: {
      title: 'Associate Degree in Systems Analysis and Development',
      description:
        'I graduated in Systems Analysis and Development from Uniftec University Center, where I built a solid foundation in software development, cybersecurity, database modeling, systems analysis, and project management.',
      institutionName: 'Uniftec University Center',
    },
    'pt-BR': {
      title: 'Curso Superior em Análise e Desenvolvimento de Sistemas',
      description:
        'Sou formado em Análise e Desenvolvimento de Sistemas pelo Centro Universitário Uniftec, onde adquiri uma base sólida em desenvolvimento de software, cyber-segurança, modelagem de banco de dados, análise de sistemas e gestão de projetos.',
      institutionName: 'Centro Universitário Uniftec',
    },
    startAt: new Date(2020, 2, 1),
    endAt: new Date(2024, 11, 1),
    imgUrl: '/assets/education/formatura.jpeg',
    institutionUrl: 'https://www.uniftec.com.br/',
  },
  {
    en: {
      title:
        'Backend Development with Node.js, TypeScript, TDD, DDD, Clean Architecture and SOLID',
      description:
        'I completed this intensive backend development course on Udemy, focused on building scalable, testable and maintainable APIs using Node.js and TypeScript, applying best practices such as TDD, DDD, SOLID principles, and Clean Architecture.',
      institutionName: 'Udemy',
    },
    'pt-BR': {
      title:
        'Desenvolvimento Backend com Node.js, TypeScript, TDD, DDD, Clean Architecture e SOLID',
      description:
        'Concluí este curso intensivo de desenvolvimento backend na Udemy, com foco na criação de APIs escaláveis e testáveis usando Node.js e TypeScript, aplicando boas práticas como TDD, DDD, princípios SOLID e Clean Architecture.',
      institutionName: 'Udemy',
    },
    startAt: new Date(2022, 3, 1),
    endAt: new Date(2022, 6, 1),
    imgUrl: '/assets/education/udemy.png',
    institutionUrl: 'https://www.udemy.com/course/tdd-com-mango/',
  },
  {
    en: {
      title: 'Fullstack Web Development Program',
      description:
        'I completed the Fullstack Web Development program at Alura, where I learned to build complete web applications using modern technologies for both frontend and backend, including HTML, CSS, JavaScript, React, Node.js and databases.',
      institutionName: 'Alura',
    },
    'pt-BR': {
      title: 'Programa de Desenvolvimento Web Fullstack',
      description:
        'Concluí o programa de Desenvolvimento Web Fullstack na Alura, onde aprendi a construir aplicações web completas utilizando tecnologias modernas tanto no frontend quanto no backend, incluindo HTML, CSS, JavaScript, React, Node.js e bancos de dados.',
      institutionName: 'Alura',
    },
    startAt: new Date(2021, 3, 1),
    endAt: new Date(2021, 9, 1),
    imgUrl: '/assets/education/alura.png',
    institutionUrl: 'https://www.alura.com.br/',
  },
]
