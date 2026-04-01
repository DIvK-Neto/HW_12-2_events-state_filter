import './ProjectList.css';

export function ProjectList({ projects }) {
  if (!projects || projects.length === 0) {
    return <div className="project-list">No projects to display.</div>;
  }

  return (
    <div className="project-list">
      {projects.map((project, index) => (
        <div key={project.img + index} className="project-card">
          <img src={project.img} alt={project.category} />
        </div>
      ))}
    </div>
  );
}
