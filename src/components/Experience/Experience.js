import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaArrowLeft } from 'react-icons/fa'; // Importing the back arrow icon

const current = new Date();

const calculateDuration = (startDate, endDate = null) => {
  const start = new Date(startDate);
  const end = endDate ? new Date(endDate) : current;

  const totalMonths = (end.getFullYear() - start.getFullYear()) * 12 + (end.getMonth() - start.getMonth());
  const years = Math.floor(totalMonths / 12);
  const months = totalMonths % 12;

  return years > 0 
    ? `${years} yr ${months} mo` 
    : `${months} mo`;  // Show only months if less than a year
};

const experiences = [
  {
    position: "Software Engineer - Frontend",
    company: "Timespro",
    logoUrl: "/path-to-logo/timespro.png",
    startDate: "2023-07-17",
    endDate: null,  // Keep endDate null for ongoing jobs
    location: "Mumbai, Maharashtra, India",
    highlights: [
      "Boosted User Satisfaction by 30%",
      "Streamlined Workflows, Increasing Productivity by 40%",
      "Integrated REST APIs, Enhancing Data Retrieval by 25%"
    ],
    techStack: ["React", "Typescript", "REST APIs", "Redux"],
    roleType: "Full-Time",
    description: [
      "Developed UI/UX of learner management system, boosting satisfaction by 30%.",
      "Streamlined workflows, raising productivity by 40%.",
      "Integrated frontend with REST APIs, enhancing data retrieval by 25%.",
      "Improved platform functionality by integrating Zoom, streamlining workflows.",
      "Implemented features and resolved bugs, reducing reported issues by 50% through thorough testing and proactive code reviews.",
      "Developed an admin portal that streamlined workflows, boosting productivity by 40% through efficient UI design.",
      "Used Scrum and Jira for effective project management and delivery and managed source code using Bitbucket and Git."
    ]
  },
  {
    position: "Frontend Developer Intern",
    company: "State Bank of India",
    startDate: "2022-07-01",
    endDate: "2022-09-01",
    location: "Navi Mumbai, Maharashtra, India",
    highlights: [
      "Designed and Developed UI from scratch",
      "Improved user engagement by 30%",
    ],
    techStack: ["React", "JavaScript", "REST APIs", "Balsamiq", "Adobe XD"],
    roleType: "Internship",
    description: [
      "UI Design: Designed and Developed UI from scratch and Improved UI efficiency by 40% for the SBI CRCF Portal.",
      "Performance: Enhanced frontend performance by 30% using React.js, Node.js."
    ]
  }
];




const Experience = () => {
  const [flippedIndex, setFlippedIndex] = useState(null);

  const handleFlip = (index) => {
    setFlippedIndex(flippedIndex === index ? null : index); // Toggle flip on click
  };

  return (
    <div id="experience" className="section experience">
      <h1 className="skills-header text-center display-4 mb-4">Experience</h1>
      <div className="timeline-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className={`experience-card ${flippedIndex === index ? "flipped" : ""}`}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.2 }}
            onClick={() => handleFlip(index)} // Flip only when clicked
          >
            {index > 0 && <hr className="progress" />}

            <div className="card-inner">
              {/* Front Side */}
              <div className="card-front">
                <div className="experience-header">
                  <h3 className="experience-header-position">{experience.position}</h3>
                  <p className="experience-header-company">
                    {experience.company} · {experience.startDate} - {experience.endDate ? experience.endDate : "Present"}
                  </p>
                  <span className="experience-header-location">
                    <i className="fas fa-map-marker-alt"></i> {experience.location}
                  </span>
                  <span className="experience-header-badge">
                    <i className="fas fa-business-time"></i> {calculateDuration(experience.startDate, experience.endDate)}
                  </span>
                </div>

                <div className="tech-stack">
                  {experience.techStack.map((tech, idx) => (
                    <span key={idx} className="badge">{tech}</span>
                  ))}
                </div>

                <div className="flip-prompt">
  <span>Tap to Explore</span> <span className="icon">🔄</span>
</div>
              </div>

              {/* Back Side */}
              <div className="card-back">
                {/* Back Arrow Icon to Flip Back */}
                <div className="back-button" onClick={() => handleFlip(null)}>
  <div className="back-arrow">←</div> 
</div>

                {experience.description.map((desc, idx) => (
                  <div key={idx} className="description">
                    <i className="fas fa-check-circle home-left-checks-point-icon"></i> {desc}
                  </div>
                ))}

                
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default Experience;


