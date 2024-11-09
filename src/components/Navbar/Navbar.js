import React, { useState, useEffect } from 'react';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('home');
  const [scrolled, setScrolled] = useState(false);

  // Handle scroll effect
  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Set active link
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
      fill="white" /* Set the color of lines to white */
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
              <a
                className={`nav-link ${activeLink === 'home' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('home')}
                href="#home"
              >
                Home
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'skills' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('skills')}
                href="#skills"
              >
                Skills
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'projects' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('projects')}
                href="#projects"
              >
                Experience
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'education' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('education')}
                href="#education"
              >
                Education
              </a>
            </li>
            <li className="nav-item">
              <a
                className={`nav-link ${activeLink === 'awards' ? 'active' : ''}`}
                onClick={() => handleSetActiveLink('awards')}
                href="#awards"
              >
                Awards
              </a>
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
          Let's Connect
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
