import { useState } from "react";
import ProjectList from "../components/ProjectList";
import { MOCK_PROJECTS } from "../data/MockProjects";
import { Project } from "../models/Project";


export default function ProjectsPage() {
  const [projects, setProjects] = useState<Project[]>(MOCK_PROJECTS);

  const saveProject = (project: Project) => {
    let updatedProjects = projects.map((p: Project) => {
      return p.id === project.id ? project : p;
    });
    setProjects(updatedProjects);
  };
  
  return (
    <>
      <h1>PROJECTS</h1>
      <ProjectList projects={projects} onSave={saveProject} />
    </>
  )
}
