import React, { useState } from 'react';
import './Navbar.css';
// import logo from '../../assets/logo.png';
import profile from '../../assets/profile.jpeg'
import { Link } from 'react-scroll';

const Navbar = () => {
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    return (
        <>
            <nav className="nav">
                <div className="nav-logo">
                    <img src={profile} alt="Logo" />
                </div>

                <ul className={`nav-links ${isMobileMenuOpen ? 'active' : ''}`}>
                    <li>
                        <Link
                            to="skills"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Skills
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Education"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Education
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Experience"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="Projects"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Projects
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="achievements"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Achievements
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="work"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Work Experience
                        </Link>
                    </li>
                    <li>
                        <Link
                            to="contact"
                            smooth={true}
                            duration={500}
                            offset={-70}
                        >
                            Contact Me
                        </Link>
                    </li>
                    <li>
                        {/* <button className="nav-btn">Click Me</button> */}
                    </li>
                </ul>

                <div
                    className="nav-toggle"
                    onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                >
                    <span className="bar"></span>
                    <span className="bar"></span>
                    <span className="bar"></span>
                </div>
            </nav>
        </>
    );
};

export default Navbar;
