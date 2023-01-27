import React from 'react';
import './footer.css';

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer_container container">
        <h1 className="footer_title">Nitin Ahirwal</h1>

        <ul className="footer_list">
          <li>
            <a href="#about" className="footer_link">About</a>
          </li>

          <li>
            <a href="portfolio" className="footer_link">Projects</a>
          </li>

          
        </ul>

        <div className="footer_social">
        <a href="https://www.linkedin.com/in/nitinahirwal" className="home_social-icon" target="_blank">
    <i class="bx bxl-linkedin"></i>
    </a>
    <a href="https://twitter.com/nitinahirwal_in" className="home_social-icon" target="_blank">
    <i class="bx bxl-twitter"></i>
    </a>
    <a href="https://github.com/nitinahirwal" className="home_social-icon" target="_blank">
    <i class="bx bxl-github"></i>
    </a>
    <a href="https://www.instagram.com/nitinahirwal_in/" className="home_social-icon" target="_blank">
    <i class="bx bxl-instagram"></i>
    </a>
    <a href="https://www.facebook.com/nitinahirwal.in" className="home_social-icon" target="_blank">
    <i class="bx bxl-facebook"></i>
    </a>
    
        </div>
        <span className='footer_copy'>&#169; nitinahirwal.in All rights reserved</span>
      </div>
    </footer>
  );
};

export default Footer;