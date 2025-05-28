import { projects } from '@/lib/data/projects'
import type { Project } from '@/lib/data/projects'

export interface ProjectGroup {
  name: string
  tag: string
  projects: Project[]
}

export const projectGroups: ProjectGroup[] = [
  'Frontend',
  'Backend',
  'Mobile',
  'Tools',
  'Contributor',
].map(name => ({
  name,
  tag: name.toLowerCase(),
  projects: [],
}))

for (const project of projects) {
  for (const tag of project.tags) {
    const group = projectGroups.find(group => group.tag === tag)

    if (group) {
      group.projects.push(project)
    }
  }
}
