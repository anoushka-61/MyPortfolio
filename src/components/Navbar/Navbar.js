import React, { useState, useEffect } from 'react';
import { Link as ScrollLink } from 'react-scroll';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect for sticky navbar
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Handle Intersection Observer for section visibility
  useEffect(() => {
    const sections = document.querySelectorAll('.section'); // Ensure sections have a common class
    const observerOptions = {
      rootMargin: '0px 0px -15% 0px', // Trigger when 50% of the section is visible
    };

    const observer = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setActiveLink(entry.target.id); // Update active link based on the section
        }
      });
    }, observerOptions);

    sections.forEach((section) => observer.observe(section));

    return () => {
      sections.forEach((section) => observer.unobserve(section));
    };
  }, []);

  // Set active link manually on nav link click
  const handleSetActiveLink = (link) => setActiveLink(link);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'navbar-scrolled' : 'navbar-top'}`}>
      <div className="container-fluid">
        {/* Brand or Logo */}
        <button
          className="navbar-toggler custom-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavDropdown"
          aria-controls="navbarNavDropdown"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="30"
              height="30"
              fill="white"
              className="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                d="M2 2h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2zm0 4h12a1 1 0 0 1 0 2H2a1 1 0 0 1 0-2z"
              />
            </svg>
          </span>
        </button>

        <div className="collapse navbar-collapse" id="navbarNavDropdown">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <ScrollLink
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('home')}
                to="home"
                smooth={true}
                duration={500}
                offset={-50} // To ensure smooth scrolling, adjust offset if needed
              >
                Home
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('skills')}
                to="skills"
                smooth={true}
                duration={500}
                offset={-50} // Adjust offset if needed
              >
                Skills
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className={`nav-link ${activeLink === 'experience' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('experience')}
                to="experience"
                smooth={true}
                duration={500}
                offset={-50} // Adjust offset if needed
              >
                Experience
              </ScrollLink>
            </li>
            <li className="nav-item">
              <ScrollLink
                className={`nav-link ${activeLink === 'education' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('education')}
                to="education"
                smooth={true}
                duration={500}
                offset={-50}
              >
                Education
              </ScrollLink>
            </li>
          </ul>
        </div>

        {/* Social Media Links */}
        <div className="navbar-social d-flex align-items-center">
          <SocialIcon href="https://linkedin.com/in/yourprofile" icon="fab fa-linkedin" />
          <SocialIcon href="https://github.com/yourprofile" icon="fab fa-github" />
        </div>

        {/* Connect Button with margin */}
        <button type="button" className="btn btn-dark ms-auto navbar-button" aria-label="Connect with me">
        <ScrollLink
                to="connect"
                smooth={true}
                duration={500}
                offset={-50}
              >
          Let's Connect
          </ScrollLink>
        </button>
      </div>
    </nav>
  );
};

// Reusable SocialIcon component
const SocialIcon = ({ href, icon }) => (
  <a href={href} target="_blank" rel="noopener noreferrer" className="navbar-social-apps-icon mx-2">
    <i className={icon}></i>
  </a>
);

export default Navbar;
