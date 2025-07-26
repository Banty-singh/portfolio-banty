import React from 'react';
import './Education.css';
import gnit from '../../assets/GNIT.png';
import ssps from '../../assets/ssps.jpeg';
ssps
const Education = () => {
  return (
    <>
      <div id='Education'>

        <section className="education-section">
          <h1>Education</h1>

         
          <div className="edu-block">
            <h2 className="edu-title">School</h2>
            <div className="edu-entry">
              <img src={ssps} alt="School Logo" />
              
              <div className="edu-details">
                <h3>S S Public School</h3>
                <p>Dighwa Dubauli ,Gopalganj,Bihar</p>
                <p>Member of SpotsClub</p>
                <p className="note">Secured distinction with a focus on science & mathematics.</p>
              </div>
            </div>
          </div>

          
          <div className="edu-block">
            <h2 className="edu-title">College</h2>
            <div className="edu-entry">
              <img src={gnit} alt="College Logo" />
              <div className="edu-details">
                <h3>Guru Nanak Institute of Technology</h3>
                <p>Bachelor of Technology in Information Technology</p>
                <p>2023 - 2027</p>
                <p className="note">Worked on major projects in AI & web development.</p>
              </div>
            </div>
          </div>
        </section>
      </div>

    </>
  );
};

export default Education;

