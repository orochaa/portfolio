import { GithubIcon } from '@/components/icons/github'
import { LinkedinIcon } from '@/components/icons/linkedin'
import { MailIcon } from 'lucide-react'

export function AboutMeSection(): React.JSX.Element {
  return (
    <div className="bg-zinc-900 py-20">
      <div className="mx-auto w-11/12">
        <div className="grid grid-cols-2 items-center gap-4">
          <div>
            <p className="mb-1 block text-2xl font-medium">Hello,</p>
            <p className="block text-3xl font-semibold">
              I&apos;m <span className="text-blue-400">Bruno Rocha</span>
            </p>
            <p className="mt-2">
              Fullstack Software Developer with 5 years of experience in web
              development. Skilled in leading projects end-to-end, from
              requirements gathering to deployment and post-launch maintenance.
              Strong advocate for clean architecture, scalable code, and
              continuous improvement.
            </p>

            <div className="mt-3 flex gap-1">
              <a
                href="https://linkedin.com/in/bruno-rocha-a65a49157"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent bg-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 active:border-zinc-400"
              >
                <LinkedinIcon size={24} />
              </a>
              <a
                href="https://github.com/orochaa"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent bg-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 active:border-zinc-400"
              >
                <GithubIcon size={24} />
              </a>
              <a
                href="mailto:brunorocha2674@gmail.com"
                target="_blank"
                rel="noreferrer"
                className="rounded-md border border-transparent bg-zinc-800 p-2 text-zinc-300 transition-colors hover:border-zinc-500 hover:text-zinc-100 active:border-zinc-400"
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
