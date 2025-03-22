import React from 'react';
import { FaFolder } from 'react-icons/fa'; 


const Services = () => {
  return (
    <section className="services background-svg" data-aos="fade-up">
      <div className="services-title">
        <h2>My Services</h2>
      </div>
      <div className="services-categories">
        <div className="services-category">
          <h3>IT Consulting</h3>
          <div className="folder">
            <FaFolder size={20} />
            <p>IT Planning & Infrastructure Setup</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Database Management & Optimization</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Data Recovery & System Troubleshooting</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Web Administration & System Support</p>
          </div>
        </div>

        <div className="services-category">
          <h3>Developer Services</h3>
          <div className="folder">
            <FaFolder size={20} />
            <p>Custom Web Application Development</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Full Stack Development</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>API Development & Integration</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Database Design & Management</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
