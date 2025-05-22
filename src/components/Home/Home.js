import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FaMapMarkerAlt } from "react-icons/fa";
import Achievements from "./Achievments";
import dayjs from "dayjs";

const Home = () => {
  const titles = ["Frontend Developer", "Software Engineer"];
  const typingSpeed = 100; // Speed for typing effect
  const deletingSpeed = 50; // Speed for deleting effect
  const pauseDuration = 1000; // Pause before deleting text

  const [text, setText] = useState("");
  const [titleIndex, setTitleIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [cursor, setCursor] = useState("|");
  const [experience, setExperience] = useState("");
  const [years , setYears]= useState("");

  useEffect(() => {
    let index = text.length;
    let currentTitle = titles[titleIndex];

    const handleTyping = () => {
      if (!isDeleting) {
        if (index < currentTitle.length) {
          setText(currentTitle.substring(0, index + 1));
        } else {
          setTimeout(() => setIsDeleting(true), pauseDuration);
        }
      } else {
        if (index > 0) {
          setText(currentTitle.substring(0, index - 1));
        } else {
          setIsDeleting(false);
          setTitleIndex((prevIndex) => (prevIndex + 1) % titles.length);
        }
      }
    };

    const interval = setTimeout(handleTyping, isDeleting ? deletingSpeed : typingSpeed);

    return () => clearTimeout(interval);
  }, [text, isDeleting, titleIndex]);

  useEffect(() => {
    // Blinking cursor effect
    const cursorInterval = setInterval(() => {
      setCursor((prev) => (prev === "|" ? "" : "|"));
    }, 500);

    return () => clearInterval(cursorInterval);
  }, []);

  useEffect(() => {
    // Calculate experience dynamically
    const startDate = dayjs("2023-07-17"); // Set your actual start date here
    const today = dayjs();
    const diffMonths = today.diff(startDate, "month");
    const calculatedYears = Math.floor(diffMonths / 12);
    const months = diffMonths % 12;
  
    setYears(calculatedYears);
  
    let experienceString = `${calculatedYears} year${calculatedYears !== 1 ? "s" : ""}`;
  
    if (months > 0) {
      experienceString += ` ${months+1} month${months !== 1 ? "s" : ""}`;
    }
  
    setExperience(experienceString);
  }, []);
  

  return (
    <div id="home" className="section container-sm">
      <div className="row home">
        {/* Image comes from the left */}
        <motion.div
          className="col-md-6 col-12 home-right"
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <img
            src={require("../../styles/istockphoto-1342829261-612x612.jpg")}
            alt="Your Description"
          />
          <Achievements />
        </motion.div>

        {/* Text content comes from the right */}
        <motion.div
          className="col-md-6 col-12 home-left"
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
        >
          <h1 className="home-left-header">
            Hi, I'm{"  "}
            <span className="home-left-header-span">Anoushka Srivastava</span>
          </h1>

          <h4 className="home-left-designation">
            {text}
            {cursor}
            <br />
            <span className="location">
              <FaMapMarkerAlt /> Mumbai, India
            </span>
            <br />
            <span className="experience-text"> {years < 1 ? "🌱" : years < 3 ? "🚀" : "🔥"} {experience} of experience</span>
          </h4>

          <p className="home-left-designation-about">
            Welcome to my digital playground! I'm a frontend developer who
            believes in the magic of code. My mission? To turn your wildest web
            dreams into reality, one line of JavaScript at a time.
          </p>

          <p className="home-left-designation-about">
            I have experience in React.js, Redux, and agile tools like Jira.
            Strong in communication, leadership, and delivering efficient,
            user-friendly web applications.
          </p>

          <div className="home-left-checks">
            <div className="home-left-checks-point">
              <i className="far fa-calendar-check home-left-checks-point-icon"></i>{" "}
              Open for exciting opportunities in React Development, Frontend
              Development.
            </div>
            <div className="home-left-checks-point">
              <i className="far fa-lightbulb home-left-checks-point-icon"></i>{" "}
              Passionate about writing clean code, system design, tackling
              complex challenges, learning new technologies, and making a
              significant impact.
            </div>
          </div>

          <a
            href="https://drive.google.com/file/d/1mI7_XAThUEq7DAG_LjrpmvkwzMjhcADf/view?usp=drive_link"
            className="cta-button"
            target="_blank"
            rel="noopener noreferrer"
          >
            View My Resume
          </a>
        </motion.div>
      </div>
    </div>
  );
};

export default Home;
