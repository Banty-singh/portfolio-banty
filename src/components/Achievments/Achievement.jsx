import React from 'react';
import './Achievement.css';
import nptel from '../../assets/nptel.jpeg';
import django from '../../assets/django.jpg';
// import hackathonLogo from '../../assets/hackathon.png';
// import courseraLogo from '../../assets/coursera.png';

const achievements = [
  {
    title: 'Programming in Java (NPTEL – IIT Kharagpur)',
    description: 'I have successfully completed the 12-week NPTEL course on Programming in Java offered by IIT Kharagpur, achieving an Elite certification with a consolidated score of 84%.',
    Certificate_ID: 'Certificate_ID : NPTEL25CS57S1149501375',
    image: nptel
  },
  {
    title: 'Certificate of Completion – Python with Django',
    description: 'Python with Django conducted by Ardent Computech Pvt. Ltd. in collaboration with Guru Nanak Institute of Technology.',
    Duration: 'Feb 21, 2025 – Mar 6, 2025',
    Certificate_ID: 'Certificate_ID : ARDENT/148682',
    image: django
  },
];

const Achievement = () => {
  return (
    <section className="achievement-section">
      <h1>Achievements & Certifications 🏆</h1>
      <div className="achievement-boxes">
        {achievements.map((item, index) => (
          <div className="achievement-card" key={index}>
            <img src={item.image} alt={item.title} />
            <div className="achievement-info">
              <h2>{item.title}</h2>
              <p className="year">{item.year}</p>
              <p>{item.description}</p>
              <p>{item.Certificate_ID}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Achievement;
