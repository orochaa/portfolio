import { GlowContainer } from '@/components/glow-container'
import { Title } from '@/components/title'
import { useTranslation } from '@/hooks/use-translation'
import type { Language } from '@/lib/i18n/locales/types'
import { ScrollText } from 'lucide-react'

type Certification = Record<
  Language,
  { title: string; description: string; institution: string }
> & {
  startAt: Date
  endAt: Date | undefined
}

const certifications: Certification[] = [
  {
    en: {
      title: 'Systems Analysis and Development',
      description: "Associate's degree",
      institution: 'Uniftec University Center',
    },
    'pt-BR': {
      title: 'Análise e Desenvolvimento de Sistemas',
      description: 'Curso Superior em Tecnologia',
      institution: 'Centro Universitário Uniftec',
    },
    startAt: new Date(2020, 2, 1),
    endAt: new Date(2024, 11, 1),
  },
  {
    en: {
      title: 'Scalable Microservices',
      description: 'Event',
      institution: 'Rocketseat',
    },
    'pt-BR': {
      title: 'Microsserviços Escaláveis',
      description: 'Evento',
      institution: 'Rocketseat',
    },
    startAt: new Date(2025, 5, 2),
    endAt: new Date(2025, 5, 6),
  },
  {
    en: {
      title: 'NodeJs, Typescript, TDD, DDD, Clean Architecture and SOLID ',
      description: 'Backend Development Course',
      institution: 'Udemy',
    },
    'pt-BR': {
      title: 'NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID ',
      description: 'Curso de Desenvolvimento Backend',
      institution: 'Udemy',
    },
    startAt: new Date(2022, 3, 1),
    endAt: new Date(2022, 6, 1),
  },
  {
    en: {
      title: 'Web Development',
      description: 'Fullstack Development Course',
      institution: 'Alura',
    },
    'pt-BR': {
      title: 'Desenvolvimento Web',
      description: 'Curso de Desenvolvimento Fullstack',
      institution: 'Alura',
    },
    startAt: new Date(2021, 3, 1),
    endAt: new Date(2021, 9, 1),
  },
]

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
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {certifications.map((certification, i) => (
            <GlowContainer
              // eslint-disable-next-line react/no-array-index-key
              key={i}
              containerClassName="rounded-md border border-zinc-600 bg-zinc-900 p-1"
              glowClassName="size-96 from-sky-500"
            >
              <div className="relative flex h-full items-center gap-4 rounded-md bg-zinc-900/90 p-4">
                <ScrollText size={40} className="shrink-0 text-slate-200" />
                <div>
                  <p className="text-lg font-semibold text-pretty">
                    {certification[lang].title}
                  </p>
                  <p className="mb-2 text-base text-pretty">
                    {certification[lang].description},{' '}
                    {certification[lang].institution}
                  </p>
                  <p className="flex items-center gap-1.5 text-sm">
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
                </div>
              </div>
            </GlowContainer>
          ))}
        </div>
      </div>
    </div>
  )
}
