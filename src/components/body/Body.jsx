// import React from 'react'
// import './Body.css'
// import body from '../../assets/body.jpeg'
// import html from '../../assets/html.png'
// import css from '../../assets/css.png'
// import js from '../../assets/js.png'
// import nodejs from '../../assets/nodejs.png'
// import npm from '../../assets/npm.png'
// import react from '../../assets/react.png'
// import sql from '../../assets/sql.jpeg'
// import python from '../../assets/python.png'

// const Body = () => {
//     return (
//         <>
//             <div className="todo">
//                 <img src={body} alt="" className='left-img' />
//                 <div className="all">
//                     <div className="desc">
//                         <h2>What I do</h2>
//                         <p>CRAZY FULL STACK DEVELOPER WHO WANTS TO EXPLORE EVERY TECH STACK</p>
//                     </div>
//                     <div className="tech">
//                         <img src={html} alt="" />
//                         <img src={css} alt="" />
//                         <img src={js} alt="" />
//                         <img src={react} alt="" />
//                         <img src={nodejs} alt="" />
//                         <img src={npm} alt="" />
//                         <img src={sql} alt="" />
//                         <img src={python} alt="" />
//                     </div>
//                     <span><h3 className='h2'>⚡ Develop highly interactive Front end / User Interfaces for your web and mobile applications</h3></span>
//                     <span><h3 className='h2'>⚡ Progressive Web Applications ( PWA ) in normal and SPA Stacks</h3></span>
//                     <span><h3 className='h2'>⚡ Integration of third party services such as Firebase/ AWS / Digital Ocean</h3></span>

//                 </div>

//             </div>


//         </>
//     )
// }

// export default Body



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
