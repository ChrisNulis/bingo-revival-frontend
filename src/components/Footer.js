import React from 'react';

const Footer = () => {
  return (
    <div className="footer-container">
      <h4>...and bingo was his Django.</h4>
      <p>project by:</p>
      <ul>
        <li>
          <p>Christopher Nugroho</p>
          <a href="https://www.linkedin.com/in/christophernugroho/" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-linkedin"></i>
          </a>
          <a href="https://github.com/ChrisNulis" target="_blank" rel="noopener noreferrer">
            <i className="fab fa-github"></i>
          </a>
        </li>
      </ul>
    </div>
  );
};

export default Footer;