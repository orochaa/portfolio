import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { useTranslation } from '@/hooks/use-translation'
import { useWindowSize } from '@/hooks/use-window-size'
import { scrollTo } from '@/lib/utils'
import { MailIcon } from 'lucide-react'
import { AnimatePresence, motion } from 'motion/react'
import { useCallback, useEffect, useState } from 'react'

export function HeaderSection(): React.JSX.Element {
  const { t, lang, changeLang } = useTranslation()
  const { windowWidth } = useWindowSize()

  const [scrolled, setScrolled] = useState(false)
  const [flagUrl, setFlagUrl] = useState(t('header.lang.imgUrl'))

  useEffect(() => {
    const onScroll = (): void => {
      setScrolled(window.scrollY > 0)
    }

    // run once in case the page is already scrolled
    onScroll()

    window.addEventListener('scroll', onScroll, { passive: true })

    return (): void => {
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  const handleToggleLang = useCallback(() => {
    changeLang(lang === 'pt-BR' ? 'en' : 'pt-BR')

    setTimeout(() => setFlagUrl(t('header.lang.imgUrl')), 400)
  }, [changeLang, lang, t])

  return (
    <div
      data-scrolled={scrolled}
      className="group lef-0 fixed top-0 z-20 w-full border-b border-transparent bg-slate-950 pt-4 transition-all data-[scrolled=true]:border-zinc-700 data-[scrolled=true]:bg-zinc-950 data-[scrolled=true]:py-0"
    >
      <div className="mx-auto flex w-11/12 max-w-6xl items-center justify-between">
        <div>
          <button
            type="button"
            data-scrolled={scrolled}
            className="relative h-11 w-27 rounded-xl border-2 border-zinc-800 bg-zinc-900/50 text-sm outline-hidden transition-colors duration-200 hover:border-zinc-700 active:border-zinc-700 data-[scrolled=true]:border-transparent data-[scrolled=true]:bg-transparent"
            onClick={handleToggleLang}
          >
            <AnimatePresence>
              <motion.span
                key={t('header.lang.name')}
                className="absolute top-1/2 -translate-y-1/2"
                initial={{
                  left: '60%',
                  translateX: '-60%',
                  opacity: 0,
                }}
                animate={{
                  left: '0.5rem',
                  translateX: '0',
                  opacity: 1,
                  transition: { delay: 0.4 },
                }}
                exit={{
                  left: '60%',
                  translateX: '-60%',
                  opacity: 0,
                }}
              >
                {t('header.lang.name')}
              </motion.span>
              <motion.img
                key={flagUrl}
                src={flagUrl}
                alt={t('header.lang.imgAlt')}
                className="absolute top-1/2 left-1/2 w-9 translate-x-1 -translate-y-1/2"
                initial={{
                  opacity: 0,
                }}
                animate={{
                  opacity: 1,
                }}
                exit={{
                  opacity: 0,
                }}
              />
            </AnimatePresence>
          </button>
        </div>
        {!!scrolled && (
          <div className="flex gap-14">
            {windowWidth > 768 && (
              <div className="flex gap-4 text-lg">
                <button
                  type="button"
                  className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
                  onClick={scrollTo('#home')}
                >
                  {t('header.home')}
                </button>
                <button
                  type="button"
                  className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
                  onClick={scrollTo('#education')}
                >
                  {t('education.title')}
                </button>
                <button
                  type="button"
                  className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
                  onClick={scrollTo('#technologies')}
                >
                  {t('technologies.title')}
                </button>
                <button
                  type="button"
                  className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
                  onClick={scrollTo('#projects')}
                >
                  {t('projects.title')}
                </button>
              </div>
            )}

            <div className="flex gap-4">
              <a
                title="LinkedIn"
                href="https://linkedin.com/in/bruno-rocha-a65a49157"
                target="_blank"
                rel="noreferrer"
                className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                title="GitHub"
                href="https://github.com/orochaa"
                target="_blank"
                rel="noreferrer"
                className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
              >
                <GithubIcon size={24} />
              </a>
              <a
                title="Mail"
                href="mailto:brunorocha2674@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="relative text-zinc-300 transition-colors before:absolute before:-bottom-[0.66rem] before:left-0 before:h-0 before:w-full before:rounded-lg before:bg-blue-500 before:transition-[height] hover:text-zinc-100 hover:before:h-0.5 active:text-zinc-100"
              >
                <MailIcon size={24} />
              </a>
            </div>
          </div>
        )}
      </div>
    </div>
  )
}
