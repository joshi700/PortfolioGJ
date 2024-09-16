// src/pages/ProjectDetails.js
import React from 'react';
import { useParams } from 'react-router-dom';

const projects = [
  { id: 1, title: 'Project 1', description: 'Detailed description of project 1' },
  { id: 2, title: 'Project 2', description: 'Detailed description of project 2' },
  // Add more projects as needed
];

const ProjectDetails = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === parseInt(id));

  if (!project) {
    return <div>Project not found</div>;
  }

  return (
    <div>
      <h1>{project.title}</h1>
      <p>{project.description}</p>
    </div>
  );
};

export default ProjectDetails;
