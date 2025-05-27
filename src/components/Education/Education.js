import React, { useEffect, useState } from 'react';
import { FaGraduationCap, FaStar, FaClipboardList, FaUniversity } from 'react-icons/fa';

const Education = () => {
    const [text, setText] = useState(''); // State for the typed text
    // const [cursor, setCursor] = useState('|'); // State for cursor
    const degree = "Bachelor of Technology in Computer Science"; // Text to type
  
    useEffect(() => {
      let index = -1;
      setText(''); // Reset text at the start
    
      const typingInterval = setInterval(() => {
        index++;
        setText((prevText) => prevText + degree[index]);
       
    
        if (index === degree.length-1) {
          clearInterval(typingInterval);
        }
      }, 100);
    
     
    
      return () => {
        clearInterval(typingInterval);
       
      };
    }, []); // Added 'degree' as a dependency for safety
    
  return (
    <div id="education" className="section education">
     <h1 className="skills-header text-center display-4 mb-4">Education</h1>
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-md-8">
            <div className="card shadow-sm border-light mb-4">
              <div className="card-body">
                <h5 className="card-title cursor-effect">
                  <FaGraduationCap /> {text}
                </h5>
                <h6 className="card-subtitle mb-3 d-flex flex-row justifiy-content-center w-100 gap-2"> <FaUniversity />Amity University, Haryana</h6>
                <p className="card-text">
                  <strong>Duration:</strong> 2019 - 2023
                </p>
                <p className="card-text">
                  <strong>Grade:</strong> 8.62 (CGPA) <FaStar className="text-warning" />
                </p>
                <p className="card-text">
                  <strong>Distinction:</strong> First Division with Distinction{' '}
                  <FaStar className="text-warning" />
                </p>

                <h6 className="course-list-title"><FaClipboardList /> Coursework</h6>
                <ul className="course-list">
                  <li>Advanced Web Development</li>
                  <li>Data Structures & Algorithms</li>
                  <li>Object-Oriented Programming with Java</li>
                  <li>Database Management Systems</li>
                  <li>Software Engineering Principles</li>
                  <li>Operating Systems</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Education;
