import React from 'react'
import { Link } from 'react-router-dom'
import "./Skills.css";

function Skills() {
  return (
    <>
      <section className="skills" id="skills">
        <div className="max-width">
            <h2 className="title">My skills</h2>
            <div className="skills-content">
                <div className="column left">
                    <div className="text">My creative skills & experiences.</div>
                    <p>
                        My Skill Set: MERN Stack, HTML5, CSS3, JavaScript, Bootstrap, Tailwind CSS, Python . It's been 2 years, I’m working as a MERN Stack developer. I have developed many websites and also provided my services as a freelancer .
                    </p>
                     
                    <Link to="">Read more</Link>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>MERN Stack</span>
                            <span>65%</span>
                        </div>
                        <div className="line mern"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>HTML5</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS3</span>
                            <span>85%</span>
                        </div>
                        <div className="line css"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>JavaScript</span>
                            <span>80%</span>
                        </div>
                        <div className="line js"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Bootstrap</span>
                            <span>85%</span>
                        </div>
                        <div className="line Boot"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Tailwind CSS</span>
                            <span>80%</span>
                        </div>
                        <div className="line Tail"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>Python</span>
                            <span>70%</span>
                        </div>
                        <div className="line Python"></div>
                    </div>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default Skills
