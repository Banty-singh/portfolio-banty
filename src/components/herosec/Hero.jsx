import React from 'react';
import './Hero.css';
import profile from '../../assets/profile.jpeg';
import hand from '../../assets/hand.png';
// import hand from '../../assets/hand.png';
import linkedin from '../../assets/linkedin.png';
import github from '../../assets/github.png';
import mail from '../../assets/mail.png';
import insta from '../../assets/insta.png';

const Hero = () => {
  return (
    <section className='hero'>
      <div className='hero-content'>
        <div className="hero-text">
          <h1>
            Hello, I am Banty <img className='wave-emoji' src={hand} alt="wave" />
          </h1>
          <p>
            A passionate <strong>Full Stack Developer</strong> 🚀 with experience in building web using JavaScript, React, Node.js, and more.
          </p>
          <div className="social-icons">
            <a href="https://www.linkedin.com/in/banty-singh-512110305/"><img src={linkedin} alt="LinkedIn" /></a>
            <a href=""><img src={github} alt="GitHub" /></a>
            <img src={mail} alt="Email" />
            <a href=""><img src={insta} alt="Instagram" /></a>
          </div>
          <div className="hero-buttons">
            <button className='hero-btn'>Contact Me</button>
            <button className='hero-btn'>Resume</button>
          </div>
        </div>

        <div className="hero-image">
          <img src={profile} alt="Profile" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
