import { ScrollText } from 'lucide-react'

interface Certification {
  title: string
  description: string
  startAt: Date
  endAt: Date | undefined
  institution: string
}

const certifications: Certification[] = [
  {
    title: 'Systems Analysis and Development',
    description: "Associate's degree",
    institution: 'Uniftec University Center',
    startAt: new Date(2020, 2, 1),
    endAt: new Date(2024, 11, 1),
  },
  {
    title: 'NodeJs, Typescript, TDD, DDD, Clean Architecture e SOLID ',
    description: 'Backend Development Course',
    institution: 'Udemy',
    startAt: new Date(2022, 3, 1),
    endAt: new Date(2022, 6, 1),
  },
  {
    title: 'Web Development',
    description: 'Fullstack Development Course',
    institution: 'Alura',
    startAt: new Date(2021, 3, 1),
    endAt: new Date(2021, 9, 1),
  },
]

export function EducationSection(): React.JSX.Element {
  return (
    <div className="bg-background py-20">
      <div className="mx-auto w-11/12 max-w-7xl">
        <h2 className="mb-6 text-3xl font-semibold">Education</h2>
        <div className="grid grid-cols-1 gap-6 xl:grid-cols-3">
          {certifications.map(certification => (
            <div
              key={certification.title}
              className="flex items-center gap-4 rounded-md border border-zinc-600 bg-zinc-900 p-4"
            >
              <ScrollText size={40} className="shrink-0 text-slate-200" />
              <div>
                <p className="text-lg font-semibold">{certification.title}</p>
                <p className="mb-2 text-base">
                  {certification.description}, {certification.institution}
                </p>
                <p className="flex items-center gap-1.5 text-sm">
                  {certification.startAt.toLocaleString('en', {
                    month: 'short',
                    year: 'numeric',
                  })}
                  <span className="block h-0.5 w-1.5 rounded-lg bg-zinc-400" />
                  {certification.endAt?.toLocaleString('en', {
                    month: 'short',
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
