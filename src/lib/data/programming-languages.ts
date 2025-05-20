export const programmingLanguages = [
  {
    name: 'typescript',
    displayName: 'TypesScript',
    description:
      'TypeScript is a strongly typed programming language that builds on JavaScript.',
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'go',
    displayName: 'Go',
    description: 'An open-source programming language supported by Google.',
    url: 'https://go.dev/',
  },
  {
    name: 'java',
    displayName: 'Java',
    description:
      'High-level, general-purpose, memory-safe, object-oriented programming language.',
    url: 'https://www.java.com/',
  },
] as const satisfies ProgrammingLanguage[]

export interface ProgrammingLanguage {
  name: string
  displayName: string
  description: string
  url: string
}

export type ProgrammingLanguageName =
  (typeof programmingLanguages)[number]['name']

export function getProgrammingLanguage(
  languageName: ProgrammingLanguageName
): ProgrammingLanguage {
  const language = programmingLanguages.find(
    language => language.name === languageName
  )

  if (!language) {
    throw new Error(`Language ${languageName} not found`)
  }

  return language
}
