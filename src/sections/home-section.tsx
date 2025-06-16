import { GlowContainer } from '@/components/glow-container'
import { GlowText } from '@/components/glow-text'
import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from '@/components/icons/mail'
import { useTranslation } from '@/hooks/use-translation'
import { scrollTo } from '@/lib/utils'

export function HomeSection(): React.JSX.Element {
  const { t } = useTranslation()

  return (
    <section
      id="home"
      className="bg-gradient-to-b from-slate-950 from-50% to-slate-900 py-20"
    >
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="mx-auto max-w-xl">
            <p className="mb-1 block text-2xl font-medium">{t('home.hello')}</p>
            <p className="block text-3xl font-semibold">
              {t('home.iam')}{' '}
              <GlowText textClassName="text-blue-400">Bruno Rocha</GlowText>
            </p>
            <p className="mt-2 text-pretty">{t('home.description')}</p>
            <div className="mt-3 flex gap-2">
              <GlowContainer
                containerClassName="bg-zinc-800 rounded-md p-0.5 text-zinc-200 hover:text-zinc-100 active:text-zinc-100"
                glowClassName="size-22 from-zinc-100"
              >
                <a
                  title="LinkedIn"
                  href="https://linkedin.com/in/bruno-rocha-a65a49157"
                  target="_blank"
                  rel="noreferrer"
                  className="relative block rounded-md bg-zinc-800/90"
                >
                  <LinkedinIcon size={24} className="p-1.5" />
                </a>
              </GlowContainer>
              <GlowContainer
                containerClassName="bg-zinc-800 rounded-md p-0.5 text-zinc-200 hover:text-zinc-100 active:text-zinc-100"
                glowClassName="size-22 from-zinc-100"
              >
                <a
                  title="GitHub"
                  href="https://github.com/orochaa"
                  target="_blank"
                  rel="noreferrer"
                  className="relative block rounded-md bg-zinc-800/90"
                >
                  <GithubIcon size={24} className="p-1.5" />
                </a>
              </GlowContainer>
              <GlowContainer
                containerClassName="bg-zinc-800 rounded-md p-0.5 text-zinc-200 hover:text-zinc-100 active:text-zinc-100"
                glowClassName="size-22 from-zinc-100"
              >
                <button
                  type="button"
                  title="Mail"
                  className="relative block rounded-md bg-zinc-800/90"
                  onClick={scrollTo('#contact', { behavior: 'instant' })}
                >
                  <MailIcon size={24} className="p-1.5" />
                </button>
              </GlowContainer>
            </div>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/100330057?v=4"
              alt="bruno-rocha.png"
              className="mx-auto aspect-square size-96 w-fit rounded-md bg-cover"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
