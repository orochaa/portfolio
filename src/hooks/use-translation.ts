import type { Language, TranslationKey } from '@/lib/i18n/locales/types'
import { useCallback } from 'react'
import { useTranslation as _useTranslation } from 'react-i18next'

interface UseTranslationResponse {
  t: (translationKey: TranslationKey) => string | undefined
  lang: Language
  changeLang: (lang: Language) => void
}

export function useTranslation(): UseTranslationResponse {
  const { t, i18n } = _useTranslation()

  const changeLanguage = useCallback(
    (lang: Language): void => {
      i18n.changeLanguage(lang)
      localStorage.setItem('i18nextLng', lang)
    },
    [i18n]
  )

  return {
    t,
    lang: i18n.language as Language,
    changeLang: changeLanguage,
  }
}
