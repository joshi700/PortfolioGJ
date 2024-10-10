// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'CheckFree RXP', description: 'Integrating Fiserv's Bill Pay solution - CheckFree RXP to Stifel's Online Banking Platform' },
  { id: 2, title: 'The Vault ', description: 'Central Business Intelligence and Service Delivery Framework' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <h1>Projects I have been part of</h1>
      <div className="project-list">
        {projects.map(project => (
          <Link to={`/projects/${project.id}`} key={project.id}>
            <ProjectCard project={project} />
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Projects;
