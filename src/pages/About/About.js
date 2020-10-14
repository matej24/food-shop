import React from 'react';
import { FaGithubAlt } from 'react-icons/fa';
import './About.css';

const About = () => {
  return (
    <div className='about__page'>
      <div className='about__card'>
        <h3>About project</h3>
        <p>
          Project was made entirely by me, without using 3rd party helpers for
          style
        </p>
        <p>It is responsive but not mobile frendly! :(</p>
        <p>
          This project serves only as reference to showcase my skills by now
          (oct. 2020)
        </p>
        <p>
          Project repo : FE &nbsp;
          <a
            href='https://github.com/matej24/food-shop'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubAlt className='about__githubIcon' />
          </a>
        </p>
        <p>
          Project repo : BE &nbsp;
          <a
            href='https://github.com/matej24/food-shop-api'
            target='_blank'
            rel='noopener noreferrer'
          >
            <FaGithubAlt className='about__githubIcon' />
          </a>
        </p>
        <p>
          Thank you for taking interest in my project and spending your time on
          it! :)
        </p>
      </div>
    </div>
  );
};

export default About;
