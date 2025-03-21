import React from 'react';
// Correct imports from react-icons
import { FaReact, FaNodeJs, FaDocker, FaGitAlt } from 'react-icons/fa';
import { SiExpress, SiFirebase, SiPostgresql, SiPostman, SiNextdotjs } from 'react-icons/si';
import { FaGithub } from "react-icons/fa6";
import { PiFileSql } from 'react-icons/pi';
import { IoLogoSass } from 'react-icons/io';
import { IoLogoVercel } from "react-icons/io5";

const TechStack = () => {
  return (
    <section className="tech-stack">
      <div className="tech-stack-title">
        <h3>My Tech Stack</h3>
      </div>
      <div className="tech-stack-icons">
        <div className="tech-stack-icon">
          <FaReact size={50} />
          <h5>React</h5>
        </div>
        <div className="tech-stack-icon">
          <SiNextdotjs size={50} />
          <h5>Next.js</h5>
        </div>
        <div className="tech-stack-icon">
          <FaNodeJs size={50} />
          <h5>Node.js</h5>
        </div>
        <div className="tech-stack-icon">
          <SiExpress size={50} />
          <h5>Express.js</h5>
        </div>
        <div className="tech-stack-icon">
          <IoLogoSass size={50} />
          <h5>SASS</h5>
        </div>
        <div className="tech-stack-icon">
          <SiFirebase size={50} />
          <h5>Firebase</h5>
        </div>
        <div className="tech-stack-icon">
          <PiFileSql size={50} />
          <h5>MSSQL</h5>
        </div>
        <div className="tech-stack-icon">
          <SiPostgresql size={50} />
          <h5>Postgres</h5>
        </div>
        <div className="tech-stack-icon">
          <FaGithub size={50}/>
          <h5>GitHub</h5>
        </div>
        <div className="tech-stack-icon">
          <FaDocker size={50} />
          <h5>Docker</h5>
        </div>
        <div className="tech-stack-icon">
          <IoLogoVercel size={50} />
          <h5>Vercel</h5>
        </div>
        <div className="tech-stack-icon">
          <FaGitAlt size={50} />
          <h5>Git</h5>
        </div>
        <div className="tech-stack-icon">
          <SiPostman size={50} />
          <h5>Postman</h5>
        </div>
      </div>
    </section>
  );
};

export default TechStack;
