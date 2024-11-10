import React, { useState, useEffect } from 'react';

const Home = () => {
  const [text, setText] = useState('');
  const phrase = "Frontend Developer";
  const typingSpeed = 100;

  useEffect(() => {
    let index = -1;

    // Reset text at the start
    setText('');
    
    const intervalId = setInterval(() => {
      index++;
      setText((prevText) => prevText + phrase[index]);

      // Clear interval when finished typing the phrase
      if (index === phrase.length - 1) {
        clearInterval(intervalId);
      }
    }, typingSpeed);

    // Cleanup interval on unmount
    return () => clearInterval(intervalId);
  }, []);

  return (
    <div id="home" className="section container-sm">
      <div className="row home">
      
        <div className="col-md-6 col-12 home-left">
          <h1 className="home-left-header">
            Hi, I'M <span className="home-left-header-span">Anoushka Srivastava</span>
          </h1>

          <h4 className="home-left-designation">{text}
          <br />
          <span className="location">  <i className="fas fa-map-marker-alt"></i> Mumbai,India</span>
          </h4>

          <p className="home-left-designation-about">
            Welcome to my digital playground! I'm a frontend developer who believes in the magic of code. 
            My mission? To turn your wildest web dreams into reality, one line of JavaScript at a time.

          </p>
          <p className="home-left-designation-about">
         I have  experience in React.js, Redux, and agile tools like Jira. Strong in communication, leadership, and delivering efficient, user-friendly web application.
          </p>

          <div className="home-left-checks">
          <div className='home-left-checks-point'><i className="far fa-calendar-check home-left-checks-point-icon"></i> Open for exciting opportunities in React Development, Frontend Development.</div>
          <div className='home-left-checks-point'><i className="far fa-lightbulb home-left-checks-point-icon"></i> Passionate about writing clean code,system design, tackling complex challenges, learning new technologies, and making a significant impact.</div>

          </div>

          <a href="/path/to/your/resume.pdf" className="cta-button" target="_blank" rel="noopener noreferrer">
            View My Resume
          </a>
        </div>
        <div className="col-md-6 col-12 home-right">
         
        </div>
      </div>
    </div>
  );
};

export default Home;
