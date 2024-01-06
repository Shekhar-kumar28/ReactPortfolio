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
                    <p>"Hello! I'm passionate about MERN stack development, merging MongoDB, Express.js, React, and Node.js to create dynamic web applications. With experience in front-end and a pursuit of full-stack expertise, I've contributed to diverse projects. Eager to craft innovative solutions and evolve as a versatile developer."</p>
                    
                    <Link to="https://about.me/shekhar.k">Download CV</Link>
                </div>
            </div>
        </div>
    </section>
    </>
  )
}

export default About
