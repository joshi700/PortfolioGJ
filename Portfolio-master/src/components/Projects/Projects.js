// src/pages/Projects.js
import React from 'react';
import { Link } from 'react-router-dom';
import ProjectCard from './ProjectCard';

const projects = [
  { id: 1, title: 'Project 1', description: 'Description of project 1' },
  { id: 2, title: 'Project 2', description: 'Description of project 2' },
  // Add more projects as needed
];

const Projects = () => {
  return (
    <div>
      <h1>My Projects</h1>
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
