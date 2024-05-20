import { MOCK_PROJECTS } from "../data/MockProjects";


export default function ProjectsPage() {

  return (
    <pre>{JSON.stringify(MOCK_PROJECTS, null, ' ')}</pre>
  )
}
