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
    title: 'CA Digitalization Platform',
    description: 'A full-stack web application designed for Chartered Accountants to manage client login authentication, invoice processing, and document management.',
    tech: ['Node.js', 'Express.js', 'EJS', 'MongoDB'],
    link: 'https://cad-chartered-accountants-digitaliz.vercel.app/'
  },
  {
    title: 'AbHiMaaN.ai',
    description: 'A personalized AI assistant web application built with React and integrated with the Google Gemini API to deliver interactive chat responses, prompt suggestions, and context management.',
    tech: ['React', 'JavaScript', 'CSS', 'Gemini API'],
    link: 'https://abhimaan.vercel.app/'
  },
  {
    title: 'URL Shortener & QR Code Generator',
    description: 'A full-stack web application featuring a JavaScript frontend built with Vite and a Node.js/Express REST API. It converts long URLs into short aliases using nanoid, generates downloadable QR codes, and persists link records in MongoDB.',
    tech: ['JavaScript', 'Vite', 'Node.js', 'Express.js', 'MongoDB'],
    link: 'https://url-shortner-ashy-seven.vercel.app/'
  },
  {
    title: 'ToDo App',
    description: 'A task management app with CRUD operations, using local storage and React hooks.',
    tech: ['Html', 'CSS', 'JavaScript'],
    link: 'https://my-todo-virid-six.vercel.app/'
  },
  {
    title: 'Weather Dashboard',
    description: 'Displays real-time weather using OpenWeather API with dynamic backgrounds based on weather conditions.',
    tech: ['HTML', 'CSS', 'API'],
    link: 'https://weather-app-delta-silk-67.vercel.app'
  },
  {
    title: 'Tic Tac Toe – Web Game',
    description: 'Tic Tac Toe is a simple web-based game created using HTML, CSS, and JavaScript.',
    tech: ['HTML', 'CSS', 'JavaScript'],
    link: 'https://tic-tac-toe-gilt-kappa-61.vercel.app/'
  },
  {
    title: 'Tic Tac Toe – Using React',
    description: 'Tic Tac Toe is a simple web-based game created using React and css for its web design.',
    tech: ['React', 'CSS'],
    link: 'https://tic-tac-toe-react-two-gamma.vercel.app/'
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
