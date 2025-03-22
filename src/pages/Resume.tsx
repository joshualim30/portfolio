// Resume.tsx - Resume page component
// 10/22/2024 - Joshua Lim

import { useState } from 'react';
import { motion, AnimatePresence } from "framer-motion";

const Resume = () => {
  const [isHovered, setIsHovered] = useState(false);
  const [currentSection, setCurrentSection] = useState(0);

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = '/resume.pdf';
    link.download = 'Joshua_Lim_Resume.pdf';
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const handlePrevious = () => {
    setCurrentSection((prev) => (prev > 0 ? prev - 1 : sections.length - 1));
  };

  const handleNext = () => {
    setCurrentSection((prev) => (prev < sections.length - 1 ? prev + 1 : 0));
  };

  const sections = [
    {
      title: "About Me",
      content: (
        <div className="space-y-3">
          <p className="text-base text-default-600 leading-relaxed">
            Experienced Software Developer seeking an internship opportunity. Successfully launched a social media app on the Apple App Store in 2016. Skilled in frontend mobile development and well-versed in various web and backend development techniques.
          </p>
          <p className="text-base text-default-600 leading-relaxed">
            In addition to leading and developing a tech startup for the past 3 years, actively facilitated internship opportunities for fellow students. Eager to contribute technical prowess and drive for innovation to make a meaningful impact in the tech industry.
          </p>
          <div className="mt-4 space-y-1">
            <p className="text-default-500">hi@joshualim.me</p>
            <p className="text-default-500">+1 (937) 707-3022</p>
            <p className="text-default-500">Orlando, FL 32817</p>
            <a href="https://www.joshualim.me" className="text-primary hover:text-primary-600">www.joshualim.me</a>
          </div>
        </div>
      )
    },
    {
      title: "Experience",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">Creating Real LLC, Orlando, FL</h3>
            <p className="text-default-500">Startup Founder • October 2022 - Present</p>
            <ul className="mt-3 space-y-1.5 text-default-600">
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Conducted target market research to scope out industry competition and identify advantageous trends.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Built an extensive network of connections within the industry, facilitating collaboration and resource sharing.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Improved software efficiency by troubleshooting and resolving coding issues.
              </li>
              <li className="flex items-start">
                <span className="text-primary mr-2">•</span>
                Saved time and resources by identifying and fixing bugs before product deployment.
              </li>
            </ul>
          </div>
        </div>
      )
    },
    {
      title: "Education",
      content: (
        <div className="space-y-4">
          <div>
            <h3 className="text-lg font-semibold text-foreground">University of Central Florida, Orlando, FL</h3>
            <p className="text-default-500">BBA • August 2022 - May 2026</p>
            <p className="text-default-600">Business Analytics, Minor in Computer Science</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Mechanicsburg High School, Mechanicsburg, OH</h3>
            <p className="text-default-500">August 2020 - May 2022</p>
            <p className="text-default-600">Honors HS Diploma</p>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground">Marysville Early College High School, Marysville, OH</h3>
            <p className="text-default-500">August 2018 - May 2020</p>
            <p className="text-default-600">Honors HS Diploma</p>
          </div>
        </div>
      )
    },
    {
      title: "Skills & Accomplishments",
      content: (
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Technical Skills</h3>
            <div className="space-y-1.5">
              <p className="text-default-600">• Mobile Development (Flutter, Swift/SwiftUI)</p>
              <p className="text-default-600">• Backend Development (Golang, C#, Python)</p>
              <p className="text-default-600">• Database Development (MongoDB, SQL)</p>
              <p className="text-default-600">• Cloud Services (AWS, GCP, Firebase, Azure)</p>
              <p className="text-default-600">• Source Control (Git, GitHub)</p>
              <p className="text-default-600">• Communication & Collaboration (Slack, ClickUp)</p>
            </div>
          </div>
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-3">Soft Skills</h3>
            <div className="space-y-1.5">
              <p className="text-default-600">• Strategic thinking</p>
              <p className="text-default-600">• Adaptability and resilience</p>
              <p className="text-default-600">• Visionary leadership</p>
            </div>
            <h3 className="text-lg font-semibold text-foreground mt-4 mb-3">Key Accomplishments</h3>
            <div className="space-y-1.5">
              <p className="text-default-600">• Supervised team of 10+ staff members</p>
              <p className="text-default-600">• Achieved small funding in pitch competition</p>
              <p className="text-default-600">• Lead Software Developer on a team of 6</p>
              <p className="text-default-600">• Mentored numerous new employees</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <section className='min-h-screen w-full flex flex-col px-4 py-8'>
      <div className="flex-1 w-full max-w-4xl mx-auto flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="text-center mb-8"
        >
          <h1 className="text-3xl font-bold text-foreground mb-2">Resume</h1>
          <p className="text-base text-default-500">Download my full resume or explore below</p>
        </motion.div>

        {/* Download Button */}
        <motion.div
          className="flex justify-center mb-8"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <button
            onClick={handleDownload}
            onMouseEnter={() => setIsHovered(true)}
            onMouseLeave={() => setIsHovered(false)}
            className="inline-flex items-center px-6 py-2 border border-transparent text-base font-medium rounded-md shadow-sm text-white bg-primary hover:bg-primary-600 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-500 transition-all duration-200"
          >
            <svg
              className={`w-5 h-5 mr-2 ${isHovered ? 'transform translate-y-1' : ''} transition-transform duration-200`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4"
              />
            </svg>
            Download Resume
          </button>
        </motion.div>

        {/* Content Sections */}
        <div className="flex-1 relative overflow-hidden mb-6">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentSection}
              initial={{ opacity: 0, x: 100 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -100 }}
              transition={{ duration: 0.3 }}
              className="absolute inset-0 bg-content1 rounded-lg shadow-lg p-6 overflow-y-auto"
            >
              <h2 className="text-xl font-bold text-foreground mb-4">{sections[currentSection].title}</h2>
              {sections[currentSection].content}
            </motion.div>
          </AnimatePresence>
        </div>

        {/* Navigation Controls */}
        <div className="flex items-center justify-center space-x-4 py-4">
          <button
            onClick={handlePrevious}
            className="p-2 rounded-full bg-default-100 hover:bg-default-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          {/* Navigation Dots */}
          <div className="flex space-x-2">
            {sections.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSection(index)}
                className={`w-2 h-2 rounded-full transition-all duration-200 ${currentSection === index ? 'bg-primary w-4' : 'bg-default-300'
                  }`}
              />
            ))}
          </div>

          <button
            onClick={handleNext}
            className="p-2 rounded-full bg-default-100 hover:bg-default-200 transition-colors"
          >
            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Resume;