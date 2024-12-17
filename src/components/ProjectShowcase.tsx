"use client";

import { FC } from "react";
import { FiExternalLink } from "react-icons/fi";
import Image from "next/image"; // Importing Next.js Image component

type Project = {
  title: string;
  description: string;
  technologies: string[];
  image: string;
  link: string;
};

const projects: Project[] = [
  {
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec arcu ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "TailwindCSS",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    image: "/projectimages/DummyPortfolio.png",
    link: "https://fiskil.com",
  },
  {
    title: "Fiskil",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Maecenas nec arcu ac tellus volutpat viverra. Vestibulum ante ipsum primis in faucibus orci luctus et ultrices posuere cubilia curae.",
    technologies: [
      "React",
      "Next.js",
      "Typescript",
      "Nest.js",
      "PostgreSQL",
      "TailwindCSS",
      "Figma",
      "Cypress",
      "Storybook",
      "Git",
    ],
    image: "/projectimages/DummyPortfolio.png",
    link: "https://fiskil.com",
  },
];

const ProjectShowcase: FC = () => {
  return (
    <div className="project-section">
      <div className="section-header">
        <span className="badge">Work</span>
      </div>
      <p className="section-description">
        Some of the noteworthy projects I have built:
      </p>
      <div className="projects-container">
        {projects.map((project, index) => (
          <div
            key={index}
            className={`project-card ${
              index % 2 === 0 ? "row-normal" : "row-reverse"
            }`}
          >
            {/* Project Image */}
            <div className="project-image">
              <Image
                src={project.image}
                alt={project.title}
                width={800}
                height={400}
                className="image-content"
              />
            </div>

            {/* Project Details */}
            <div className="project-details">
              <div>
                <h3 className="project-title">{project.title}</h3>
                <p className="project-description">{project.description}</p>
              </div>
              <div>
                <div className="project-technologies">
                  {project.technologies.map((tech, i) => (
                    <span key={i} className="tech-badge">
                      {tech}
                    </span>
                  ))}
                </div>
                <a
                  href={project.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <FiExternalLink />
                </a>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ProjectShowcase;
