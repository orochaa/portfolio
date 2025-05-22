import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { useTranslation } from '@/hooks/use-translation'
import { MailIcon } from '@/components/icons/mail'

export function AboutMeSection(): React.JSX.Element {
  const { t } = useTranslation()

  return (
    <div
      id="home"
      className="bg-gradient-to-b from-slate-950 from-50% to-slate-900 py-20"
    >
      <div className="mx-auto w-11/12 max-w-6xl">
        <div className="grid grid-cols-1 items-center gap-6 md:grid-cols-2">
          <div className="mx-auto max-w-xl">
            <p className="mb-1 block text-2xl font-medium">
              {t('about.hello')}
            </p>
            <p className="block text-3xl font-semibold">
              {t('about.iam')}{' '}
              <span className="text-blue-400">Bruno Rocha</span>
            </p>
            <p className="mt-2 text-pretty">{t('about.description')}</p>
            <div className="mt-3 flex gap-2">
              <a
                title="LinkedIn"
                href="https://linkedin.com/in/bruno-rocha-a65a49157"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent bg-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 active:border-zinc-400"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                title="GitHub"
                href="https://github.com/orochaa"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent bg-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 active:border-zinc-400 active:text-zinc-100"
              >
                <GithubIcon size={24} />
              </a>
              <a
                title="Mail"
                href="mailto:brunorocha2674@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent bg-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 active:border-zinc-400 active:text-zinc-100"
              >
                <MailIcon size={24} />
              </a>
            </div>
          </div>
          <div>
            <img
              src="https://avatars.githubusercontent.com/u/100330057?v=4"
              alt="bruno-rocha.png"
              className="mx-auto size-96 w-fit rounded-md bg-cover"
            />
          </div>
        </div>
      </div>
    </div>
  )
}
