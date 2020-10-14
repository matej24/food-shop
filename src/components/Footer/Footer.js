import React from 'react';
import './Footer.css';
import { FaLinkedin, FaGithub } from 'react-icons/fa';

const Footer = () => {
  return (
    <footer>
      <div className='footer-container'>
        <div className='footer__content'>
          <p>Copyright &copy; Matej</p>
         
          <a
            href='https://hr.linkedin.com/in/matej-sekuli%C4%87'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaLinkedin className='footer__content__icon' />
          </a>
          <a
            href='https://github.com/matej24'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithub className='footer__content__icon' />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
