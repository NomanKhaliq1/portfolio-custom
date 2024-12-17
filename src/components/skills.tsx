"use client";

import Image from "next/image";
import React from "react";

const Skills = () => {
  const skills = [
    { src: "/icons/javascript.svg", alt: "Javascript", label: "Javascript" },
    { src: "/icons/typescript.svg", alt: "Typescript", label: "Typescript" },
    { src: "/icons/react.svg", alt: "React", label: "React" },
    { src: "/icons/nextjs.svg", alt: "Next.js", label: "Next.js" },
    { src: "/icons/nodejs.svg", alt: "Node.js", label: "Node.js" },
    { src: "/icons/postgresql.svg", alt: "PostgreSQL", label: "PostgreSQL" },
    { src: "/icons/mongodb.svg", alt: "MongoDB", label: "MongoDB" },
    { src: "/icons/tailwindcss.svg", alt: "TailwindCSS", label: "TailwindCSS" },
    { src: "/icons/figma.svg", alt: "Figma", label: "Figma" },
    { src: "/icons/wordpress.svg", alt: "Wordpress", label: "Wordpress" },
    { src: "/icons/php.svg", alt: "PHP", label: "PHP" },
    { src: "/icons/python.svg", alt: "Python", label: "Python" },
  ];

  return (
    <section id="skills" className="skills-section">
      <div className="container px-4">
        <div className="section-header">
          <span className="badge">Skills</span>
        </div>
        <div className="section-description">
          <h2 className="font-normal">The skills, tools and technologies I am really good at:</h2>
        </div>
        {/* Skill Grid */}
        <div className="skills-grid">
          {skills.map((skill, index) => (
            <div key={index} className="skill-card">
              <div className="skill-icon">
                <Image
                  src={skill.src}
                  alt={skill.alt}
                  width={64}
                  height={64}
                  className="icon"
                />
              </div>
              <span className="skill-label">{skill.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
