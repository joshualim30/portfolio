// Projects.tsx - Projects page component
// 10/22/2024 - Joshua Lim

import Portfolio from "../assets/images/portfolio-screenshot.jpeg";
import Gray from "../assets/images/gray.jpeg";
import React, { useState } from 'react';
import { Card, CardHeader, CardBody, CardFooter, Button, Chip, Image } from "@nextui-org/react";
import { motion, AnimatePresence } from "framer-motion";

interface Project {
  title: string;
  description: string;
  image: string;
  technologies: string[];
  githubLink: string;
  liveLink: string | null;
}

const projects: Project[] = [
  {
    title: "Portfolio Website",
    description: "A modern portfolio website built with React, TypeScript, and NextUI. Features smooth animations, responsive design, and a clean user interface.",
    image: Portfolio,
    technologies: ["React", "TypeScript", "NextUI", "Tailwind CSS", "Framer Motion"],
    githubLink: "https://github.com/joshualim30/portfolio",
    liveLink: "https://www.joshualim.me"
  },
  {
    title: "More Projects Coming Soon!",
    description: "I'm currently working on more projects and will update this section as soon as they are ready.",
    image: Gray,
    technologies: ["In Progress"],
    githubLink: "https://github.com/joshualim30/",
    liveLink: null,
  }
];

const Projects: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + projects.length) % projects.length);
  };

  return (
    <section className='min-h-screen w-full flex flex-col px-4 py-8'>
      <div className="flex-1 w-full max-w-7xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-4xl font-bold text-foreground mb-4">Projects</h1>
          <p className="text-default-500">Here are some of my recent projects</p>
        </motion.div>

        {/* Desktop Grid View */}
        <div className="hidden md:grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <Card className="w-full h-full flex flex-col">
                <CardHeader className="p-0">
                  <div className="relative w-full h-48 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                    />
                  </div>
                </CardHeader>
                <CardBody className="p-4 flex-1 flex flex-col">
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">{project.title}</h3>
                    <p className="text-default-500 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {project.technologies.map((tech) => (
                        <Chip key={tech} size="sm" variant="flat" color="primary" className="px-3 py-1">
                          {tech}
                        </Chip>
                      ))}
                    </div>
                  </div>
                </CardBody>
                <CardFooter className="p-4 flex gap-2 bg-default-100">
                  <Button
                    as="a"
                    href={project.githubLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    variant="flat"
                    color="primary"
                    className="flex-1"
                  >
                    GitHub
                  </Button>
                  {project.liveLink ? (
                    <Button
                      as="a"
                      href={project.liveLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="bordered"
                      color="primary"
                      className="flex-1 hover:bg-primary hover:text-white transition-colors"
                    >
                      Live Demo
                    </Button>
                  ) : (
                    <Button
                      variant="bordered"
                      color="primary"
                      className="flex-1"
                      isDisabled
                    >
                      Live Demo
                    </Button>
                  )}
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>

        {/* Mobile Carousel View */}
        <div className="md:hidden">
          <div className="relative h-[450px]">
            <AnimatePresence mode="wait">
              <motion.div
                key={currentIndex}
                initial={{ opacity: 0, x: 100 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -100 }}
                transition={{ duration: 0.3 }}
                className="absolute inset-0"
              >
                <Card className="w-full h-full bg-content1 flex flex-col">
                  <CardHeader className="p-0">
                    <div className="relative w-full h-48 overflow-hidden">
                      <Image
                        src={projects[currentIndex].image}
                        alt={projects[currentIndex].title}
                        width={400}
                        height={192}
                        className="w-full h-full object-cover object-center"
                      />
                    </div>
                  </CardHeader>
                  <CardBody className="p-4 flex-1 flex flex-col">
                    <div className="flex-1">
                      <h3 className="text-xl font-semibold text-foreground mb-2">{projects[currentIndex].title}</h3>
                      <p className="text-default-500 mb-4">{projects[currentIndex].description}</p>
                      <div className="flex flex-wrap gap-2">
                        {projects[currentIndex].technologies.map((tech) => (
                          <Chip key={tech} size="sm" variant="flat" color="primary" className="px-3 py-1">
                            {tech}
                          </Chip>
                        ))}
                      </div>
                    </div>
                  </CardBody>
                  <CardFooter className="p-4 flex gap-2 bg-default-100">
                    <Button
                      as="a"
                      href={projects[currentIndex].githubLink}
                      target="_blank"
                      rel="noopener noreferrer"
                      variant="flat"
                      color="primary"
                      className="flex-1"
                    >
                      GitHub
                    </Button>
                    {projects[currentIndex].liveLink ? (
                      <Button
                        as="a"
                        href={projects[currentIndex].liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        variant="bordered"
                        color="primary"
                        className="flex-1 hover:bg-primary hover:text-white transition-colors"
                      >
                        Live Demo
                      </Button>
                    ) : (
                      <Button
                        variant="bordered"
                        color="primary"
                        className="flex-1"
                        isDisabled
                      >
                        Live Demo
                      </Button>
                    )}
                  </CardFooter>
                </Card>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Navigation Controls */}
          <div className="flex items-center justify-center gap-4 mt-4">
            <Button
              isIconOnly
              variant="flat"
              color="primary"
              onClick={prevSlide}
              className="bg-default-100"
            >
              ←
            </Button>
            <div className="flex gap-2">
              {projects.map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`w-2 h-2 rounded-full transition-all duration-200 ${currentIndex === index ? 'bg-primary w-4' : 'bg-default-300'
                  }`}
                />
              ))}
            </div>
            <Button
              isIconOnly
              variant="flat"
              color="primary"
              onClick={nextSlide}
              className="bg-default-100"
            >
              →
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;