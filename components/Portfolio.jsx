"use client";
import React, { useState, useEffect } from 'react';
import Modal from './Modal';
import MarkdownRenderer from './MarkdownRenderer';
import { TbPlayerTrackNextFilled, TbPlayerTrackPrevFilled } from "react-icons/tb";

const Portfolio = () => {
  const [selectedProject, setSelectedProject] = useState(null);
  const [previews, setPreviews] = useState({});
  const [currentIndex, setCurrentIndex] = useState(0);
  const [changing, setChanging] = useState(false);

  const projects = [
    {
      title: "This site💟",
      markdownFile: "https://raw.githubusercontent.com/gb4rt0s/personal-site/refs/heads/main/README.md",
    },
    {
      title: "Aurum",
      markdownFile: "https://raw.githubusercontent.com/Aurum-ElProyecteGrande/aurum/refs/heads/main/README.md",
    },
     {
      title: "SolarWatch",
      markdownFile: "https://raw.githubusercontent.com/gb4rt0s/solarwatch-ci/refs/heads/main/README.md",
    },
  ];

  useEffect(() => {
    const fetchPreview = async () => {
      const previewData = {};

      for (const project of projects) {
        const response = await fetch(project.markdownFile);
        const markdownContent = await response.text();
        previewData[project.title] = markdownContent.slice(0, 200);
      }

      setPreviews(previewData);
    };

    fetchPreview();
  }, []);

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
              <p>{previews[projects[(currentIndex - 1 + projects.length) % projects.length].title] || "Loading preview..."}</p>
            </div>
          </div>

          <div
            className={`portfolio-item ${changing ? 'changing' : ''}`}
            onClick={() => openProject(projects[currentIndex])}
          >
            <h3>{projects[currentIndex].title}</h3>
            <p>{previews[projects[currentIndex].title] || "Loading preview..."}</p>
            <p>Click to view details</p>
          </div>

          <div className={`next-item`}>
            <div className="portfolio-item not-selected">
              <h3>{projects[(currentIndex + 1) % projects.length].title}</h3>
              <p>{previews[projects[(currentIndex + 1) % projects.length].title] || "Loading preview..."}</p>
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
