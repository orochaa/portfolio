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
    pt: {
      title: 'Análise e Desenvolvimento de Sistemas',
      description: 'Curso Superior em Tecnologia',
      institution: 'Centro Universitário Uniftec',
    },
    startAt: new Date(2020, 2, 1),
    endAt: new Date(2024, 11, 1),
  },
  {
    en: {
      title: 'NodeJs, Typescript, TDD, DDD, Clean Architecture and SOLID ',
      description: 'Backend Development Course',
      institution: 'Udemy',
    },
    pt: {
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
    pt: {
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
    <div id="education" className="bg-background py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h2 className="mb-6 text-3xl font-semibold">{t('education.title')}</h2>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {certifications.map(certification => (
            <div
              key={certification[lang].title}
              className="flex items-center gap-4 rounded-md border border-zinc-600 bg-zinc-900 p-4"
            >
              <ScrollText size={40} className="shrink-0 text-slate-200" />
              <div>
                <p className="text-lg font-semibold">
                  {certification[lang].title}
                </p>
                <p className="mb-2 text-base">
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
          ))}
        </div>
      </div>
    </div>
  )
}
