"use client";
import { FC } from "react";
import Image from "next/image";

import Skills from "@/components/skills";
import ExperienceSection from "@/components/Experinces";
import ProjectShowcase from "@/components/ProjectShowcase";
import Testimonials from "@/components/testimonials";

const HeroSection: FC = () => {
  return (
    <main className="min-h-screen bg-white">
      {/* Hero Section Start*/}
      <section className="hero-section py-32">
        <div className="container">
          <div className="row align-items-center">
            {/* Hero Content - 8 columns for large screens */}
            <div className="col-12 col-md-8">
              <div className="hero-content">
                <h1 className="hero-title m-0">
                  Hi, I&apos;m Noman Khaliq <span className="animate-waving-hand">👋</span>
                </h1>
                <p className="hero-description">
                  A Full Stack Developer with expertise in designing modern,
                  scalable, and user-centric web applications. I leverage
                  cutting-edge technologies like generative AI, responsive design
                  principles, and advanced frameworks to deliver innovative
                  solutions aligned with the latest global tech trends.
                </p>

                <ul className="hero-info list-none p-0">
                  <li>
                    <i className="fas fa-map-marker-alt m-2 text-gray text-xl"></i>
                    <span className="font-medium text-gray">Karachi, Pakistan</span>
                  </li>
                  <li>
                    <i className="fas fa-circle m-2 text-green text-xs"></i>
                    <span className="font-medium text-gray">Available for new projects</span>
                  </li>
                </ul>

                <div className="hero-social-links">
                  <a
                    href="https://github.com/NomanKhaliq1"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-github"></i>
                  </a>
                  <a
                    href="https://linkedin.com/in/nomanghouri-dev"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-linkedin"></i>
                  </a>
                  <a
                    href="https://instagram.com/nomanghouri2"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-instagram"></i>
                  </a>
                  <a
                    href="https://twitter.com/yourprofile"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <i className="fab fa-twitter"></i>
                  </a>
                </div>
              </div>
            </div>

            {/* Hero Image - 4 columns for large screens */}
            <div className="col-12 col-md-4">
              <div className="hero-image">
                <img
                  src="/hero-sec-img.png"
                  alt="Hero Section"
                  className="img-responsive"
                  style={{
                    width: "100%",
                    height: "auto",
                    maxWidth: "400px",
                    borderRadius: "10px",
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* Hero Section End */}


      {/* About Section Start */}
      <section id="about" className="py-20 bg-gray">
        <div className="container">
          <div className="row items-center justify-center">
            {/* About Title */}
            <div className="col-12">
              <div className="about-content text-center mb-12">
                <span className="about-title text-gray">About Me</span>
              </div>
            </div>

            {/* About Content */}
            <div className="col-12 row">
              {/* Image Section */}
              <div className="col-12 col-md-6 mb-4 mb-md-0 flex justify-center">
                <div className="about-image">
                  <Image
                    src="/aboutme.jpeg"
                    alt="About Me Image"
                    width={500}
                    height={500}
                    className="object-cover rounded-lg"
                  />
                </div>
              </div>

              {/* Description Section */}
              <div className="col-12 col-md-6">
                <div className="about-description">
                  <h3 className="text-2xl font-bold text-gray-800 mb-4">
                    Curious about me? Here you have it:
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    I&apos;m a passionate full-stack developer who specializes in
                    creating modern, user-friendly, and scalable web applications.
                    Leveraging my expertise in frontend technologies like{" "}
                    <span className="font-semibold">React.js</span>,{" "}
                    <span className="font-semibold">Next.js</span>, and{" "}
                    <span className="font-semibold">TailwindCSS</span>, alongside
                    backend frameworks like{" "}
                    <span className="font-semibold">Node.js</span>, I enjoy
                    bringing innovative ideas to life with seamless technical
                    solutions.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    My Journey:
                  </h3>
                  <p className="text-gray-600 leading-relaxed mb-4">
                    My development journey began a few years ago, driven by
                    curiosity and a desire to solve real-world problems through
                    technology. Since then, I’ve continuously enhanced my skills
                    by embracing challenges and mastering tools like{" "}
                    <span className="font-semibold">TypeScript</span>, RESTful
                    APIs, and modern JavaScript frameworks. Today, I focus on
                    building highly efficient, maintainable, and impactful web
                    applications.
                  </p>

                  <h3 className="text-xl font-semibold text-gray-800 mb-3">
                    What I Work With:
                  </h3>
                  <ul className="p-0 list-inside list-disc text-gray-600 space-y-2">
                    <li>
                      Frontend: <span className="font-semibold">React.js</span>,{" "}
                      <span className="font-semibold">Next.js</span>,{" "}
                      <span className="font-semibold">TailwindCSS</span>
                    </li>
                    <li>
                      Backend: <span className="font-semibold">Node.js</span>
                    </li>
                    <li>
                      Technologies:{" "}
                      <span className="font-semibold">TypeScript</span>, REST APIs
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* About Section End */}


      <Skills />
      <ExperienceSection />

      <section id="work" className="bg-white">
        <ProjectShowcase />
      </section>

      <section id="testimonials" className="bg-gray">
        <Testimonials />
      </section>
    </main>
  );
};

export default HeroSection;
