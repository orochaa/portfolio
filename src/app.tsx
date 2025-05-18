import { Project } from '@/components/project'
import { ScrollSpyNav } from '@/components/scroll-spy-nav'
import { Title } from '@/components/title'
import { groups } from '@/lib/data/groups'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <div className="mx-auto w-11/12 max-w-6xl py-20">
        <Title className="bg-background sticky top-0 left-0 z-20 pt-4">
          Projects
        </Title>
        <div className="relative flex">
          <ScrollSpyNav />
          <div className="flex flex-col gap-8 px-6">
            {groups.map((group, groupIndex) => (
              <div key={group.name}>
                <h3 id={group.name} className="mb-2 text-xl font-semibold">
                  {group.name}
                </h3>
                <ul className="grid grid-cols-1 gap-2 lg:grid-cols-2">
                  {group.projects.map((project, projectIndex) => (
                    <Project
                      key={project.name}
                      project={project}
                      groupIndex={groupIndex}
                      projectIndex={projectIndex}
                    />
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}
