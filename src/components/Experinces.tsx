"use client";

import { FC } from "react";
import Image from "next/image";

type Experience = {
  title: string;
  company: string;
  logo: string;
  date: string;
  description: string[];
};

const experiences: Experience[] = [
  {
    title: "Web Developer",
    company: "Awesome Technologies Inc",
    logo: "/experience-logos/AwesomeTech.webp",
    date: "Nov 2021 - Present",
    description: [
      "Developed and maintained responsive websites using platforms like Webflow and WordPress, focusing on delivering seamless user experiences.",
      "Specialized in e-commerce websites and custom WordPress solutions, including the creation of custom plugins tailored to client needs.",
      "Collaborated with teams to design visually appealing and high-performance websites aligned with client goals.",
      "Ensured adherence to best practices in web development, including responsive design, cross-browser compatibility, and performance optimization.",
      "Worked on CMS-based projects, implementing content updates, and managing website functionalities for various industries.",
    ],
  },
  {
    title: "Team Lead",
    company: "Upwork",
    logo: "/experience-logos/upwork.png",
    date: "Jul 2017 - Oct 2021",
    description: [
      "Led a team of developers to deliver high-quality web applications on time and within budget.",
      "Managed multiple projects simultaneously while ensuring smooth communication with clients.",
      "Implemented agile methodologies to streamline development processes and improve efficiency.",
      "Maintained project documentation and provided technical guidance to team members.",
    ],
  },
];

const ExperienceSection: FC = () => {
  return (
    <div className="experience-section">
      <div className="section-header">
        <span className="badge">Experience</span>
      </div>
      <p className="section-description">
        Here is a quick summary of my most recent experiences:
      </p>
      <div className="experience-container">
        {experiences.map((experience, index) => (
          <div key={index} className="experience-card">
            <div className="experience-details">
              <h3 className="experience-title m-0 text-gray-600">{experience.title}</h3>
              <ul className="experience-description">
                {experience.description.map((point, i) => (
                  <li key={i}>{point}</li>
                ))}
              </ul>
            </div>
            <div className="experience-meta">
              <Image
                src={experience.logo}
                alt={experience.company}
                width={128}
                height={64}
                className="experience-logo"
              />
              <p className="experience-date">{experience.date}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ExperienceSection;
