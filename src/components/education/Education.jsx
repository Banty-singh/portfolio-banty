// import React from 'react'
// import './Education.css'
// import python from '../../assets/python.png'


// const Education = () => {
//     return (
//         <>
//             <div className="education">
//                 <h1>Education</h1>
//                 <div className="place">
//                     <img src={python} alt="" />
//                     <div className="detail">
//                         <h2>Harvard University</h2>
//                         <h3>Master of Science in Computer Science</h3>
//                         <h3>September 2017 - April 2019</h3>
//                         <h4>Participated in the research of XXX and published 3 papers.</h4>
//                     </div>


//                 </div>
//                 <div className="place">
//                     <img src={python} alt="" />
//                     <div className="detail">
//                         <h2>Harvard University</h2>
//                         <h3>Master of Science in Computer Science</h3>
//                         <h3>September 2017 - April 2019</h3>
//                         <h4>Participated in the research of XXX and published 3 papers.</h4>
//                     </div>


//                 </div>
//             </div>
//         </>

//     )
// }

// export default Education





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

          {/* School Section */}
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

          {/* College Section */}
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

