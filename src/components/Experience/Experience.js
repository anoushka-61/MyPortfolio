import React from 'react';
import { motion } from 'framer-motion';
import { MdOutlineAutoGraph } from "react-icons/md";


const Experience = () => {
  const experiences = [
    {
      position: "Software Engineer- Frontend",
      company: "Timespro",
      logoUrl: "/path-to-logo/timespro.png",
      startDate: "July 2023",
      endDate: "Present",
      duration: "1.5 Years",
      location: "Mumbai,Maharashtra,India",
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
      startDate: "July 2022",
      endDate: "Sep 2022",
      duration: "2 months",
      location: "Navi Mumbai,Maharashtra,India",
      highlights: [
        "Designed and Developed UI from scratch",
        "Improved user engagement by 30%",
        
      ],
      techStack: ["React", "JavaScript", "REST APIs", "Balsamiq", "Adobe XD",],
      roleType: "Intenship",
      description: [
        "UI Design: Designed and Developed UI from scratch and  Improved UI efficiency by 40% for the SBI CRCF Portal.",
        "Performance: Enhanced frontend performance by 30% using React.js, Node.js."
      ],
    },
  ];

  return (
    <div id="experience" className="section experience ">
      <h1 className="skills-header text-center display-4 mb-4">Experience</h1>
      <div className="timeline-container">
        {experiences.map((experience, index) => (
          <motion.div
            key={index}
            className="experience-card"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: index * 0.3 }}
          >
            {index > 0 && <hr className="progress" />}
            
            <div className="card-inner">
              {/* Front side of the card */}
              <div className="card-front">
                {/* Company Logo */}
                {/* {experience.logoUrl && (
                  <img src={experience.logoUrl} alt={`${experience.company} logo`} className="company-logo" />
                )} */}
                
                <div className="experience-header">
                  <h3 className="experience-header-position">{experience.position}</h3>
                  <p className="experience-header-company">
                    {experience.company} · {experience.startDate} - {experience.endDate}
                  </p>
                  <span className="experience-header-location">  <i className="fas fa-map-marker-alt"></i>{experience.location}</span>
                  {/* Duration Badge */}
                  <span className="experience-header-badge"><i class="fas fa-business-time"></i>{experience.duration}</span>
                </div>
                
                {/* Key Highlights
                <div className="highlights">
                  {experience.highlights.map((highlight, idx) => (
                    <p key={idx} className="highlight">
                      • {highlight}
                    </p>
                  ))}
                </div> */}
                
                {/* Technology Stack */}
                <div className="tech-stack">
                  {experience.techStack.map((tech, idx) => (
                    <span key={idx} className="badge">
                      {tech}
                    </span>
                  ))}
                </div>
                
                {/* Flip prompt */}
                <div className="flip-prompt">Hover for details ↔️</div>
              </div>
              
              {/* Back side of the card */}
              <div className="card-back">
                {experience.description.map((desc, idx) => (
                  <div key={idx} className="description"><i className="fas fa-check-circle home-left-checks-point-icon"></i> {desc}</div>
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
