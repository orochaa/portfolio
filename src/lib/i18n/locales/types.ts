export type Language = 'pt-BR' | 'en'

export interface LocaleTranslation {
  header: {
    lang: {
      name: string
      imgUrl: string
      imgAlt: string
    }
    home: string
  }
  about: {
    hello: string
    iam: string
    description: string
  }
  education: {
    title: string
  }
  technologies: {
    title: string
    placeholder: string
  }
  projects: {
    title: string
    categories: string
    filters: string
    notFound: string
  }
  project: {
    link: string
    github: string
    private: string
    downloads: string
  }
  learnMore: {
    title: string
    documentation: string
  }
}

export type TranslationKey<TLocale = LocaleTranslation> = {
  [K in keyof TLocale]: K extends string
    ? TLocale[K] extends string
      ? K
      : `${K}.${TranslationKey<TLocale[K]>}`
    : never
}[keyof TLocale]
