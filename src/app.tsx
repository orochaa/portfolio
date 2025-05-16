import { Title } from '@/components/title'
import { GithubIcon } from '@/components/ui/github'
import { LinkIcon } from '@/components/ui/link'
import { projects } from '@/data/projects'
import type { Project } from '@/data/projects'
import { motion } from 'motion/react'

const groups: {
  name: string
  projects: Project[]
}[] = [
  {
    name: 'Frontend',
    projects: projects.filter(project => project.tags.includes('frontend')),
  },
  {
    name: 'Backend',
    projects: projects.filter(project => project.tags.includes('backend')),
  },
  {
    name: 'FullStack',
    projects: projects.filter(project => project.tags.includes('frontend')),
  },
  {
    name: 'Tools',
    projects: projects.filter(project => project.tags.includes('tools')),
  },
  {
    name: 'Games',
    projects: projects.filter(project => project.tags.includes('game')),
  },
]

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <div className="mx-auto w-11/12 py-20">
        <Title>Projetos</Title>
        <div className="flex flex-col gap-8">
          {groups.map(group => (
            <div key={group.name}>
              <p className="mb-2 text-xl font-semibold">{group.name}</p>
              <ul className="grid grid-cols-2 gap-2">
                {group.projects.map((project, i) => (
                  <motion.li
                    key={project.name}
                    className="h-32 rounded-lg border border-zinc-600 p-4 shadow"
                    initial="hidden"
                    whileInView="visible"
                    variants={{
                      hidden: { opacity: 0, y: 50 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: {
                          delay: 0.1 * i,
                        },
                      },
                    }}
                    viewport={{ once: true }}
                  >
                    <div className="flex items-center justify-between">
                      <p className="text-lg font-semibold">
                        {project.displayName}
                      </p>
                      <div className="flex gap-1">
                        {!!project.liveUrl && (
                          <a
                            title="Acessar aplicação"
                            href={project.liveUrl}
                            target="_blank"
                            rel="noreferrer"
                            className="rounded-md border border-zinc-600 p-1.5 hover:border-zinc-400 hover:bg-zinc-900 active:border-zinc-400"
                          >
                            <LinkIcon size={20} />
                          </a>
                        )}
                        <a
                          title="Acessar repositório no Github"
                          href={project.githubUrl}
                          target="_blank"
                          rel="noreferrer"
                          className="rounded-md border border-zinc-600 p-1.5 hover:border-zinc-400 hover:bg-zinc-900 active:border-zinc-400"
                        >
                          <GithubIcon size={20} />
                        </a>
                      </div>
                    </div>
                    <p>{project.description}</p>
                  </motion.li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
