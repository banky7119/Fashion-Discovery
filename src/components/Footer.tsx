/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/anchor-is-valid */
// src/components/Footer.tsx

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faFacebookF, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons';

const Footer: React.FC = () => (
  <footer className="footer">
    <div className="container">
      <p>&copy; 2024 Fashion Brand Discovery. All rights reserved.</p>
      <div className="social-icons">
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faFacebookF} /></a>
        Visit this facebook account for more exciting results
        <a href="https://x.com/home?utm_source=homescreen&utm_medium=shortcut" className="social-icon"><FontAwesomeIcon icon={faTwitter} /></a>
        Explore the world of Fashion on twitter
        <a href="#" className="social-icon"><FontAwesomeIcon icon={faInstagram} /></a>
        We can satisfy your every taste
      </div>
    </div>
  </footer>
);

export default Footer;
