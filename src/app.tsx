import { GlowContainer } from '@/components/glow-container'
import { Title } from '@/components/title'
import { GithubIcon } from '@/components/ui/github'
import { LinkIcon } from '@/components/ui/link'
import { groups } from '@/data/groups'
import { motion } from 'motion/react'

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
                    <GlowContainer
                      containerClassName="h-32 rounded-lg border border-zinc-600 p-4 "
                      boxClassName="rounded-lg "
                      glowClassName="size-96 from-zinc-200"
                    >
                      <div className="flex items-center justify-between">
                        <p className="text-lg font-semibold">
                          {project.displayName}
                        </p>
                        <div className="flex gap-1">
                          {!!project.liveUrl && (
                            <GlowContainer
                              containerClassName="rounded-md p-2 hover:text-blue-300"
                              boxClassName="rounded-md bg-zinc-800"
                              glowClassName="from-blue-400 size-20"
                            >
                              <a
                                title="Acessar aplicação"
                                href={project.liveUrl}
                                target="_blank"
                                rel="noreferrer"
                              >
                                <LinkIcon size={20} />
                              </a>
                            </GlowContainer>
                          )}
                          <GlowContainer
                            containerClassName="rounded-md p-2 hover:text-indigo-300"
                            boxClassName="rounded-md bg-zinc-800"
                            glowClassName="from-indigo-400 size-20"
                          >
                            <a
                              title="Acessar repositório no Github"
                              href={project.githubUrl}
                              target="_blank"
                              rel="noreferrer"
                            >
                              <GithubIcon size={20} />
                            </a>
                          </GlowContainer>
                        </div>
                      </div>
                      <p>{project.description}</p>
                    </GlowContainer>
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
