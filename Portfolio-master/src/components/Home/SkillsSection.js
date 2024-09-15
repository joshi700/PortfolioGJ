import React from "react";
import "./skills.css"; // Ensure you have styles for alignment and responsiveness

const skills = [
  {
    category: "Strategy",
    expertise: [
      "Roadmap Planning",
      "Product Roadmaps",
      "Competitor Analysis",
      "Customer Interviews",
      "Feature Creation",
    ],
  },
  {
    category: "Team Leadership",
    expertise: [
      "Cross-functional Collaboration",
      "Stakeholder Management",
      "Agile Methodologies",
      "Mentorship & Development",
      "Product Ownership",
    ],
  },
  {
    category: "Data-Driven Decision Making",
    expertise: [
      "A/B Testing",
      "Data Analysis & Reporting",
      "KPIs & Metrics Tracking",
      "User Research",
      "User Experience (UX)",
      "Wireframes",
      "Figma",
    ],
  },
  {
    category: "Technical Acumen",
    expertise: [
      "Generative AI",
      "JIRA / Atlassian Tools",
      "Python",
      "Javascript",
      "SQL / Databases",
      "Tokenization",
      "Postman" ,
      "JSON/XML",
    ],
  },
];

const SkillsSection = () => {
  return (
    <section className="skills-section">
      <h2>SKILLS & EXPERTISE</h2>
      <div className="skills-grid">
        {skills.map((skillCategory, index) => (
          <div key={index} className="skill-category">
            <h3>{skillCategory.category}</h3>
            <ul>
              {skillCategory.expertise.map((skill, i) => (
                <li key={i}>{skill}</li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
};

export default SkillsSection;
