import { useState } from "react";
import { Project } from "../models/Project";
import ProjectCard from "./ProjectCard";
import ProjectForm from "./ProjectForm";

type ProjectListProps = {
    projects: Project[];
    onSave: (project: Project) => void;
}

export default function ProjectList({ projects, onSave }: ProjectListProps) {
  const [projectBeingEdited, setProjectBeingEdited] = useState({});

  const handleEdit = (project: Project) => {
    setProjectBeingEdited(project);
    //console.log(project);
  };

  const cancelEditing = () => {
    setProjectBeingEdited({});
  }



  return (
    <div className="row">
      {projects.map((project) => (
        <div key={project.id} className="cols-sm">
          {project === projectBeingEdited 
            ? <ProjectForm onCancel={cancelEditing} onSave={onSave} project={project} />
            : <ProjectCard onEdit={handleEdit} project={project} />
          }
        </div>
      ))}
    </div>
  );
}
