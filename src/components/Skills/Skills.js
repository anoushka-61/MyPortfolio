import React, { useEffect, useState } from 'react';
import { FaReact, FaJava, FaCuttlefish, FaNodeJs, FaDatabase, FaGitAlt,FaCss3 } from 'react-icons/fa';
import { IoIosGitBranch} from 'react-icons/io';
import { DiSass, DiJavascript1, DiHtml5 } from 'react-icons/di';
import { IoBulbOutline } from "react-icons/io5";


const skillsData = {
  "Programming Languages": [
    { icon: <FaJava />, name: 'Java', color: '#f8981d' },
    { icon: <FaCuttlefish />, name: 'C++', color: '#00599C' },
    { icon: <DiJavascript1 />, name: 'JavaScript', color: '#f7df1e' },
    { icon: <FaReact />, name: 'TypeScript', color: '#007acc' },
  ],
  "Frontend Development": [
    { icon: <FaReact />, name: 'React', color: '#0D92F4' },
    { icon: <DiHtml5 />, name: 'HTML', color: '#e34f26' },
    { icon:<FaCss3 />, name: 'CSS', color: '#264de4' },
    { icon: <DiSass />, name: 'SASS', color: '#CC6699' },
  ],
  "Backend Development": [
    { icon: <FaNodeJs />, name: 'Node.js', color: '#68a063' },
    { icon: <FaNodeJs />, name: 'Express.js', color: '#4f4f4f' },
    { icon: <FaDatabase />, name: 'SQL', color: '#f29111' },
    { icon: <FaDatabase />, name: 'MongoDB', color: '#47A248' },
  ],
  "Tools & Platforms": [
    { icon: <FaGitAlt />, name: 'Git', color: '#f1502f' },
    { icon: <IoIosGitBranch />, name: 'Jira', color: '#0061F2' },
    { icon: <IoIosGitBranch />, name: 'Bitbucket', color: '#205081' },
  ],
  "Soft Skills": [
    { icon: <IoBulbOutline />, name: 'Leadership', color: '#0D92F4' },
    { icon: <IoBulbOutline />, name: 'Communication', color: '#0D92F4' },
    { icon: <IoBulbOutline />, name: 'Problem Solving', color: '#0D92F4' },
  ],
};

const SegmentedSkills = () => {
  const [visibleRows, setVisibleRows] = useState([]);
  const [isDarkMode, setIsDarkMode] = useState(true);

  // Check system theme preference for dark mode
  // useEffect(() => {
  //   const theme = window.matchMedia('(prefers-color-scheme: dark)');
  //   setIsDarkMode(theme.matches);
  //   theme.addEventListener('change', (e) => setIsDarkMode(e.matches));
  // }, []);

  // Intersection Observer setup to detect when rows are in view or out of view
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        // Add row to visible rows when it comes into view (scrolling down)
        setVisibleRows((prevRows) => {
          if (!prevRows.includes(entry.target)) {
            return [...prevRows, entry.target];
          }
          return prevRows;
        });
      } else {
        // Remove row from visible rows when it leaves the viewport (scrolling up)
        setVisibleRows((prevRows) => prevRows.filter(row => row !== entry.target));
      }
    });
  }, {
    threshold: 0.5, // 50% visibility for the observer to trigger
  });

  // Apply observer to each row
  useEffect(() => {
    const rows = document.querySelectorAll('.skills-row');
    rows.forEach(row => observer.observe(row));
    return () => {
      rows.forEach(row => observer.unobserve(row));
    };
  }, []);

  return (
    <div id="skills" className={`section segmented-skills ${isDarkMode ? 'dark' : 'light'}`}>
      <h1 className="skills-header text-center display-4 mb-4">Skills</h1>

      {Object.keys(skillsData).map((category, index) => (
        <div key={index} className="skill-category">
          <h3 className="category-title">{category}</h3>
          <div
            className={`skills-row ${visibleRows.includes(document.querySelector(`#row-${index}`)) ? 'visible' : ''}`}
            id={`row-${index}`}
          >
            {skillsData[category].map((skill, i) => (
              <div
                key={i}
                className="skill-item chip"
                style={{
                  backgroundColor: skill.color,
                  animationDelay: `${i * 0.1}s`,
                }}
              >
                <div className="skill-icon">
                  {React.cloneElement(skill.icon, { size: 18 })}
                </div>
                <span className="skill-name">{skill.name}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default SegmentedSkills;
