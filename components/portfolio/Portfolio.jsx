"use client";
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import MarkdownRenderer from './MarkdownRenderer';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { projects } from '@/scripts/data';
import Image from 'next/image';
import duckie from "@/imgs/duckie.png"

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const goToNext = () => {
    setChanging(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrev = () => {
    setChanging(true);
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  useEffect(() => {
    if (changing) {
      setTimeout(() => setChanging(false), 300);
    }
  }, [changing]);

  return (
    <>
      <section className="portfolio" id="portfolio" data-aos="fade-up">
        <div className="portfolio-title">
          <h2>My Projects</h2>
        </div>

        <div className="portfolio-carousel">
          <div className="portfolio-item-container">
            <div className={`prev-item`}>
              <div className="portfolio-item not-selected">
                <h3>{projects[(currentIndex - 1 + projects.length) % projects.length].title}</h3>
              </div>
            </div>

            <div
              className={`portfolio-item ${changing ? 'changing' : ''}`}
              onClick={() => openProject(projects[currentIndex])}
            >
              <h3>{projects[currentIndex].title}</h3>
              {projects[currentIndex].img ?
                <img
                  src={projects[currentIndex].img}
                  alt="Showcase GIF"
                  width={500}
                  height={500}
                /> :
                <>
                  <Image
                    src={duckie}
                    alt="Duckie"
                    width={500}
                    height={500}
                    className='missing-duckie'
                  />
                  <p>Sorry, no picture😞</p>
                </>
              }

              <p>Click to view details</p>
            </div>

            <div className={`next-item`}>
              <div className="portfolio-item not-selected">
                <h3>{projects[(currentIndex + 1) % projects.length].title}</h3>
              </div>
            </div>
          </div>

          <button className="carousel-button prev-button" onClick={goToPrev}>
            <TbPlayerTrackPrevFilled />
          </button>
          <button className="carousel-button next-button" onClick={goToNext}>
            <TbPlayerTrackNextFilled />
          </button>
        </div>

      </section>
      {selectedProject && (
        <Modal onClose={() => setSelectedProject(null)}>
          <MarkdownRenderer markdownFile={selectedProject.markdownFile} />
        </Modal>
      )}
    </>
  );
};

export default Portfolio;
