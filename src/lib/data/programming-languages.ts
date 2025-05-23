export const programmingLanguages = [
  {
    name: 'typescript',
    displayName: 'TypesScript',
    description: {
      en: 'TypeScript is a strongly typed programming language that builds on JavaScript.',
      'pt-BR':
        'TypeScript é uma linguagem de programação fortemente tipada que expande o JavaScript.',
    },
    url: 'https://www.typescriptlang.org/',
  },
  {
    name: 'go',
    displayName: 'Go',
    description: {
      en: 'An open-source programming language supported by Google.',
      'pt-BR':
        'Uma linguagem de programação open-source com suporte do Google.',
    },
    url: 'https://go.dev/',
  },
  {
    name: 'java',
    displayName: 'Java',
    description: {
      en: 'High-level, general-purpose, memory-safe, object-oriented programming language.',
      'pt-BR':
        'Linguagem de programação de alto nível, de propósito geral, segura em memória e orientada a objetos.',
    },
    url: 'https://www.java.com/',
  },
] as const satisfies ProgrammingLanguage[]

export interface ProgrammingLanguage {
  name: string
  displayName: string
  description: {
    en: string
    'pt-BR': string
  }
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
