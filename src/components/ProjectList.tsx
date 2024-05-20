import { useState } from "react";
import { Project } from "../models/Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

type ProjectListProps = {
    projects: Project[];
}

export default function ProjectList({ projects }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
    //console.log(project);
  };

  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited 
            ? <ProjectForm />
            : <ProjectCard onEdit={handleEdit} project={project} />
          }
        </div>
      ))}
    </div>
  );
}
