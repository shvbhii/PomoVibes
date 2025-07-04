import React from 'react';
import { FaGithub, FaLinkedin } from 'react-icons/fa';

const Footer = ({ githubUrl, linkedinUrl }) => {
  return (
    <footer className="site-footer">
      <div className="footer-links">
        <a href={linkedinUrl} target="_blank" rel="noopener noreferrer">
          <FaLinkedin />
          <span>Connect via LinkedIn</span>
        </a>
        <a href={githubUrl} target="_blank" rel="noopener noreferrer">
          <FaGithub />
          <span>View Source on GitHub</span>
        </a>
      </div>
      <div className="creator-credit">
        <p>Made by Shubhi Sharma</p>
      </div>
    </footer>
  );
};

export default Footer;