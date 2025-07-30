import React from 'react';
import './Projects.css';

const projects = [
  {
    title: 'Portfolio Website',
    description: 'A fully responsive portfolio built using React and styled with custom CSS. Showcases my skills, education, and experience.',
    tech: ['React', 'CSS'],
    link: 'https://portfolio-banty.netlify.app/'
  },
  {
    title: 'ToDo App',
    description: 'A task management app with CRUD operations, using local storage and React hooks.',
    tech: ['Html','CSS' , 'JavaScript'],
    link: '#'
  },
  {
    title: 'Weather Dashboard',
    description: 'Displays real-time weather using OpenWeather API with dynamic backgrounds based on weather conditions.',
    tech: ['HTML', 'CSS', 'API'],
    link: 'https://weather-app-delta-silk-67.vercel.app'
  },
  {
    title: 'Tic Tac Toe – Web Game',
    description: 'Tic Tac Toe is a simple web-based game created using HTML, CSS, and JavaScript. It allows two players to play the classic 3x3 grid game in turns (Player X and Player O) directly in the browser. The game checks for winning conditions or draw, displays results, and allows resetting the board.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'apptic-tac-toe.netlify.app'
  }
];

const Projects = () => {
  return (
    <>
    <div id='Projects'>
    <section className="projects-section">
      <h1>Projects</h1>
      <div className="projects-boxes">
        {projects.map((project, index) => (
          <div className="project-card" key={index}>
            <h2>{project.title}</h2>
            <p>{project.description}</p>
            <div className="tech-tags">
              {project.tech.map((tag, idx) => (
                <span key={idx}>{tag}</span>
              ))}
            </div>
            <a href={project.link} target="_blank" rel="noopener noreferrer">View Project</a>
          </div>
        ))}
      </div>
    </section>
    </div>
    </>
  );
};

export default Projects;
