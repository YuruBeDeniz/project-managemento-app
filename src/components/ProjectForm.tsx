import { SyntheticEvent, useState } from "react";
import { Project } from "../models/Project";

type ProjectFormProps = {
  project: Project;
  onCancel: () => void;
  onSave: (project: Project) => void;
}

export default function ProjectForm({ onCancel, onSave, project: initialProject }: ProjectFormProps) {
  const [project, setProject] = useState<Project>(initialProject);
 
  const handleSubmit = (event: SyntheticEvent) => {
    event.preventDefault();
    onSave(project)
  };

  const handleChange = (event: any) => {
    const { type, name, value, checked } = event.target;

    let updatedValue = type === 'checkbox' ? checked : value;

    if (type === 'number') {
      updatedValue = Number(updatedValue);
    };

    const change = {
      [name]: updatedValue,
    };

    let updatedProject: Project;

    setProject((p) => {
      updatedProject = new Project({ ...p, ...change });
      return updatedProject;
    })
  }

  return (
  <form 
    className="input-group vertical"
    onSubmit={handleSubmit}
  >
    <label htmlFor="name">Project Name</label>
    <input value={project.name} onChange={handleChange} type="text" name="name" placeholder="enter name" />

    <label htmlFor="description">Project Description</label>
    <textarea value={project.description} onChange={handleChange} name="description" placeholder="enter description" />

    <label htmlFor="budget">Project Budget</label>
    <input value={project.budget} onChange={handleChange} type="number" name="budget" placeholder="enter budget" />

    <label htmlFor="isActive">Active?</label>
    <input checked={project.isActive} onChange={handleChange} type="checkbox" name="isActive" />

    <div className="input-group">
      <button className="primary bordered medium">Save</button>
      <span />
      <button 
        onClick={onCancel}
        type="button" 
        className="secondary bordered medium"
      >
        Cancel
      </button>
    </div>
  </form> 
  )
}
