// import React from 'react'
// import './Achievement.css'

// const Achievement = () => {
//     return (
//         <>
//             <h1>Achievements And Certifications 🏆</h1>
//             <div className="boxes">
//                 <div className="box"></div>
//                 <div className="box"></div>
//                 <div className="box"></div>
//                 <div className="box"></div>
                
//             </div>
//         </>
//     )
// }

// export default Achievement





import React from 'react';
import './Achievement.css';

// const achievements = [
//   {
//     title: 'Google Developer Certification',
//     description: 'Completed the Google Associate Android Developer certification covering UI, testing, and performance optimization.',
//     year: '2022'
//   },
//   {
//     title: 'AWS Certified Developer',
//     description: 'Earned AWS certification for deploying, debugging, and developing cloud-based applications.',
//     year: '2023'
//   },
//   {
//     title: 'Hackathon Winner - CodeFest',
//     description: 'Won 1st place in a national-level hackathon for building a real-time food donation app.',
//     year: '2021'
//   },
//   {
//     title: 'Coursera Full Stack Specialization',
//     description: 'Completed a 6-month specialization on React, Node.js, and databases from the University of London.',
//     year: '2020'
//   }
// ];

const Achievement = () => {
  return (
    <>
    <div id='achievements'>
    <section className="achievement-section">
      <h1>Achievements & Certifications 🏆</h1>
      {/* <div className="achievement-boxes">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <h2>{item.title}</h2>
            <p className="year">{item.year}</p>
            <p>{item.description}</p>
          </div>
        ))}
      </div> */}
    </section>
    </div>
    </>
  );
};

export default Achievement;
