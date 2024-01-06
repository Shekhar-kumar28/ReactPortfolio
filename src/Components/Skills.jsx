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
                        My Skill Set: HTML5, CSS3, JavaScript, Bootstrap, C, Python. It's been 2 years, I’m working as a web developer. I have developed many websites and also provided my services as a freelancer .
                    </p>
                     
                    <Link to="">Read more</Link>
                </div>
                <div className="column right">
                    <div className="bars">
                        <div className="info">
                            <span>HTML</span>
                            <span>90%</span>
                        </div>
                        <div className="line html"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>CSS</span>
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
                            <span>C</span>
                            <span>85%</span>
                        </div>
                        <div className="line C"></div>
                    </div>
                    <div className="bars">
                        <div className="info">
                            <span>React</span>
                            <span>80%</span>
                        </div>
                        <div className="line React"></div>
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
