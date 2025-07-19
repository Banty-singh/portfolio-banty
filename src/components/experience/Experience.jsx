// import React from 'react'
// import './Experience.css'

// const Experience = () => {
//     return (
//         <>
//         <h1>Experience</h1>
//             <div className="boxes">
//                 <div className="box"></div>
//                 <div className="box"></div>
//                 <div className="box"></div>
//                 <div className="box"></div>
//                 <div className="box"></div>
//             </div>
//         </>

//     )
// }

// export default Experience




import React from 'react';
import './Experience.css';

// const experiences = [
//   {
//     title: 'Frontend Developer',
//     company: 'Tech Corp',
//     duration: 'Jan 2020 – Dec 2021',
//     description: 'Built interactive UIs using React.js and improved UX for over 50+ components.'
//   },
//   {
//     title: 'Backend Developer',
//     company: 'CloudWave',
//     duration: 'Feb 2019 – Dec 2019',
//     description: 'Developed scalable REST APIs using Node.js and integrated with MongoDB.'
//   },
//   {
//     title: 'Full Stack Intern',
//     company: 'Startup Hub',
//     duration: 'Jun 2018 – Jan 2019',
//     description: 'Worked on full stack features, from UI to database integration.'
//   },
//   {
//     title: 'Open Source Contributor',
//     company: 'GitHub Projects',
//     duration: '2020 – Present',
//     description: 'Contributed to open-source libraries, fixing bugs and improving performance.'
//   },
//   {
//     title: 'UI/UX Designer',
//     company: 'Designify',
//     duration: 'Jan 2022 – Present',
//     description: 'Designed intuitive interfaces and optimized web accessibility.'
//   }
// ];

const Experience = () => {
  return (
    <>
    <div id='Experience'>
    <section className="experience-section">
      <h1>Experience</h1>
      {/* <div className="experience-boxes">
        {experiences.map((exp, i) => (
          <div className="experience-card" key={i}>
            <h2>{exp.title}</h2>
            <h3>{exp.company}</h3>
            <p className="duration">{exp.duration}</p>
            <p>{exp.description}</p>
          </div>
        ))}
      </div> */}
    </section>
    </div>
    </>
  );
};

export default Experience;
