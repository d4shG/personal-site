import React from 'react';
import { servicesData } from '@/scripts/data';
import Service from './Service';

const Services = () => {
  return (
    <section className="services background-svg" data-aos="fade-up">
      <div className="services-title">
        <h2>My Services</h2>
      </div>
      <div className="services-categories">
        {servicesData.map((category, index) => (
          <div className="services-category" key={index}>
            <h3>{category.category}</h3>
            {category.services.map((service, idx) => (
              <Service key={idx} serviceName={service} />
            ))}
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
