import { Project } from '@/components/project'
import { Title } from '@/components/title'
import { groups } from '@/data/groups'

export function App(): React.JSX.Element {
  return (
    <div className="min-h-svh">
      <div className="mx-auto w-11/12 max-w-6xl py-20">
        <Title>Projects</Title>
        <div className="flex flex-col gap-8">
          {groups.map((group, groupIndex) => (
            <div key={group.name}>
              <p className="mb-2 text-xl font-semibold">{group.name}</p>
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
  )
}
