import React from 'react';
import { FaFolder } from 'react-icons/fa'; 


const Services = () => {
  return (
    <section className="services background-svg">
      <div className="services-title">
        <h2>My Services</h2>
      </div>
      <div className="services-categories">
        <div className="services-category">
          <h3>IT Consulting</h3>
          <div className="folder">
            <FaFolder size={20} />
            <p>Strategic IT Planning</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>IT Infrastructure Setup</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Cloud Solutions & Migration</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Database Optimization</p>
          </div>
        </div>

        <div className="services-category">
          <h3>Developer Services</h3>
          <div className="folder">
            <FaFolder size={20} />
            <p>Web Development</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Mobile App Development</p>
          </div>
          <div className="folder">
            <FaFolder size={20} />
            <p>Custom Software Solutions</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Services;
