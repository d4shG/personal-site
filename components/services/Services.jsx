import React from 'react';
import Service from './Service';
import { useLanguage } from '@/context/LanguageProvider';
import { servicesText } from '@/scripts/servicesData';

const Services = () => {
  const { language } = useLanguage();
  const data = servicesText(language)
  return (
    <section className="services background-svg" data-aos="fade-up">
      <div className="services-title">
        <h2>{data.title}</h2>
      </div>
      <div className="services-categories">
        {data.services.map((category, index) => (
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
