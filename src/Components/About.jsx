import React from 'react'
import "./About.css"
import shekhar from "./images/shekhar.png";
import { Link } from 'react-router-dom';
import { useTypewriter, Cursor } from "react-simple-typewriter";

function About() {
  const [text] = useTypewriter({
    words: [
      "MERN Stack Developer.",
      "Programmer.",
      "Software Engineer.",
      "Freelancer.",
    ],
    loop: true,
    typeSpeed: 50,
    delaySpeed: 1000,
  });
  return (
    <>
      <section className="about" id="about">
        <div className="max-width">
            <h2 className="title">About me</h2>
            <div className="about-content">
                <div className="column left">
                    <img src={shekhar} alt="Error"/>
                </div>
                <div className="column right">
                    <div className="text">I'm Shekhar and I'm a <span className="typing-2">{text}</span>
                    <Cursor
                cursorBlinking="false"
                cursorStyle="|"
                cursorColor="#a600ffcd"
              /></div>
                    <p>I am a Front-End Web Developer. I’m working as a web developer. I have developed many websites and also provided my services as a freelancer I have been part of some very good web design projects. I am doing my graduation Computer Science And Engineering.
                        I'm also learning Back-End Development and looking forward to being a Full Stack Web Developer.
                    </p>
                    
                    <Link to="">Download CV</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
