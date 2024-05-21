import { SyntheticEvent, useState } from "react";
import { Project } from "../models/Project";

type ProjectFormProps = {
    project: Project;
    onCancel: () => void;
    onSave: (project: Project) => void;
}

export default function ProjectForm({ onCancel, onSave, project: initialProject }: ProjectFormProps) {
    const [name, setName] = useState<string>(initialProject.name);
    const [description, setDescription] = useState<string>(initialProject.description);
    const [budget, setBudget] = useState<number>(initialProject.budget);
    const [isActive, setIsActive] = useState<boolean>(initialProject.isActive);

    const handleSubmit = (event: SyntheticEvent) => {
      event.preventDefault();
      const updatedProject = new Project ({
          ...initialProject, 
          name,             
          description,
          budget,
          isActive
      });
      onSave(updatedProject);
  };

    return (
        <form className="input-group vertical" onSubmit={handleSubmit}>
            <label htmlFor="name">Project Name</label>
            <input value={name} onChange={(e) => setName(e.target.value)} type="text" name="name" placeholder="enter name" />

            <label htmlFor="description">Project Description</label>
            <textarea value={description} onChange={(e) => setDescription(e.target.value)} name="description" placeholder="enter description" />

            <label htmlFor="budget">Project Budget</label>
            <input value={budget} onChange={(e) => setBudget(parseFloat(e.target.value))} type="number" name="budget" placeholder="enter budget" />
            
            <label htmlFor="isActive">Active?</label>
            <input checked={isActive} onChange={(e) => setIsActive(e.target.checked)} type="checkbox" name="isActive" />

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
    );
}
