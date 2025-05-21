import i18n from 'i18next'
import LanguageDetector from 'i18next-browser-languagedetector'
import { initReactI18next } from 'react-i18next'
import { en } from './locales/translations/en'
import { pt } from './locales/translations/pt'

// eslint-disable-next-line import/no-named-as-default-member
i18n
  .use(LanguageDetector) // detecta idioma automaticamente
  .use(initReactI18next)
  .init({
    resources: {
      en: { translation: en },
      pt: { translation: pt },
      'pt-BR': { translation: pt },
    },
    fallbackLng: 'en', // idioma padrão
    detection: {
      // ordem de detecção de idioma
      order: ['localStorage', 'navigator', 'htmlTag'],
      // onde salvar o idioma escolhido
      caches: ['localStorage'],
    },
    interpolation: {
      escapeValue: false, // React já faz escaping
    },
  })
