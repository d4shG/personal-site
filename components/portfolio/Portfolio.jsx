"use client";
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import MarkdownRenderer from './MarkdownRenderer';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";
import { projects } from '@/scripts/data';
import { FaReadme, FaGithubSquare } from "react-icons/fa";
import Link from 'next/link';
import Image from 'next/image';
import { missingImage } from '@/scripts/data';

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const openProject = (project) => {
    setSelectedProject(project);
  };

  const goToNext = () => {
    setChanging("next");
    setCurrentIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const goToPrev = () => {
    setChanging("prev");
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
                <h3>
                  {projects[(currentIndex - 1 + projects.length) % projects.length].title}
                </h3>
                <p>
                  {projects[(currentIndex - 1 + projects.length) % projects.length].description}
                </p>
                {
                  projects[(currentIndex - 1 + projects.length) % projects.length].image ?
                    <img
                      src={projects[(currentIndex - 1 + projects.length) % projects.length].image}
                      alt={projects[(currentIndex - 1 + projects.length) % projects.length].title}
                    /> :
                    <img
                      src={missingImage}
                      alt={projects[(currentIndex - 1 + projects.length) % projects.length].title}
                    />
                }
              </div>
            </div>

            <div
              className={`portfolio-item ${changing == "next" ? 'changing-next' : changing == "prev" ? 'changing-prev' : ''}`}
            >
              <h3>{projects[currentIndex].title}</h3>
              <p>{projects[currentIndex].description}</p>
              {
                projects[currentIndex].image ?
                  <img
                    src={projects[currentIndex].image}
                    alt={projects[currentIndex].title}
                  /> :
                  <img
                    src={missingImage}
                    alt={projects[currentIndex].title}
                  />
              }
              <div className="portfolio-item-info-wrapper">
                <div className="portfolio-item-info" onClick={() => openProject(projects[currentIndex])}>
                  <p>Readme</p>
                  <FaReadme />
                </div>
                <Link className="portfolio-item-info" href={projects[currentIndex].githubLink}>
                  <p>Repo</p>
                  <FaGithubSquare />
                </Link>
              </div>
            </div>

            <div className={`next-item`}>
              <div className="portfolio-item not-selected">
                <h3>
                  {projects[(currentIndex + 1) % projects.length].title}
                </h3>
                <p>
                  {projects[(currentIndex + 1) % projects.length].description}
                </p>
                {
                  projects[(currentIndex + 1) % projects.length].image ?
                    <img
                      src={projects[(currentIndex + 1) % projects.length].image}
                      alt={projects[(currentIndex + 1) % projects.length].title}
                    /> :
                    <img
                      src={missingImage}
                      alt={projects[(currentIndex + 1) % projects.length].title}
                    />
                }
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
