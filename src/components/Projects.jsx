import React from 'react';

const Projects = () => {
  const projects = [
    { name: 'Project One', description: 'Description for Project One' },
    { name: 'Project Two', description: 'Description for Project Two' },
  ];

  return (
    <section>
      <h2>Projects</h2>
      {projects.map((project, index) => (
        <div key={index}>
          <h3>{project.name}</h3>
          <p>{project.description}</p>
        </div>
      ))}
    </section>
  );
};

export default Projects;
