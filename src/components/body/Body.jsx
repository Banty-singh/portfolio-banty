import React from 'react';
import './Body.css';
import body from '../../assets/body.jpeg';
import html from '../../assets/html.png';
import css from '../../assets/css.png';
import js from '../../assets/js.png';
import nodejs from '../../assets/nodejs.png';
import npm from '../../assets/npm.png';
import react from '../../assets/react.png';
import sql from '../../assets/sql.jpeg';
import python from '../../assets/python.png';

const Body = () => {
    return (
        <div id="skills">

        <section className="body-section">
            <div className="body-container">
                <img src={body} alt="dev" className="body-image" />

                <div className="body-content">
                    <div className="body-desc">
                        <h2>What I Do</h2>
                        <p>Crazy Full Stack Developer who loves to explore every tech stack 🚀</p>
                    </div>

                    <div className="tech-stack">
                        {[html, css, js, react, nodejs, npm, sql, python].map((imgSrc, index) => (
                            <img src={imgSrc} alt={`tech-${index}`} key={index} />
                        ))}
                    </div>

                    <div className="features">
                        <p>⚡ Develop highly interactive Frontend / UI for web & mobile apps</p>
                        <p>⚡ Build Progressive Web Applications (PWAs) using modern stacks</p>
                        <p>⚡ Integrate third-party services like Firebase, AWS, DigitalOcean</p>
                    </div>
                </div>
            </div>
        </section>
        </div>
    );
};

export default Body;
