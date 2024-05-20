import ProjectList from "../components/ProjectList";
import { MOCK_PROJECTS } from "../data/MockProjects";


export default function ProjectsPage() {

  return (
    <>
      <h1>PROJECTS</h1>
      <ProjectList projects={MOCK_PROJECTS} />
    </>
  )
}
