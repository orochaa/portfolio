export type Language = 'pt-BR' | 'en'

export interface LocaleTranslation {
  header: {
    lang: {
      name: string
      imgUrl: string
      imgAlt: string
    }
  }
  home: {
    title: string
    hello: string
    iam: string
    description: string
  }
  education: {
    title: string
  }
  technologies: {
    title: string
    subtitle: string
    hint: string
  }
  'hard-skills': {
    title: string
    subtitle: string
  }
  'soft-skills': {
    title: string
    subtitle: string
  }
  projects: {
    title: string
    categories: string
    filters: string
    notFound: string
  }
  contact: {
    title: string
    subtitle: string
    form: {
      name: {
        label: string
        placeholder: string
      }
      email: {
        label: string
        placeholder: string
      }
      subject: {
        label: string
        placeholder: string
      }
      message: {
        label: string
        placeholder: string
      }
      submit: string
    }
    alert: {
      success: {
        title: string
        message: string
      }
      error: {
        title: string
        message: string
      }
    }
  }
  project: {
    link: string
    github: string
    private: string
    privateTitle: string
    downloadsPerMonth: string
    downloadsTitle: string
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
