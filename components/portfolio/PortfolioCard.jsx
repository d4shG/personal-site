import React, { useState } from "react";

export default function PortfolioItem({ project }) {
  const { title, description, images, githubLink, techStack } = project;
  const [isDescriptionExpanded, setDescriptionExpanded] = useState(false);

  const toggleDescription = () => {
    setDescriptionExpanded(!isDescriptionExpanded);
  };

  return (
    <div className="portfolio-item">
      <div className="portfolio-item-header">
        <h3>{title}</h3>
        {githubLink && (
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="github-link"
          >
            <img
              src="/path/to/github-icon.svg"
              alt="GitHub"
              className="github-icon"
            />
          </a>
        )}
      </div>

      <div className="portfolio-item-carousel">
        {images.map((image, index) => (
          <img
            key={index}
            src={image}
            alt={`${title} screenshot ${index + 1}`}
            className="portfolio-item-image"
          />
        ))}
      </div>

      <div className="portfolio-item-description">
        <p>
          {isDescriptionExpanded
            ? description
            : `${description.substring(0, 100)}...`}
        </p>
        {description.length > 100 && (
          <button
            className="description-toggle"
            onClick={toggleDescription}
          >
            {isDescriptionExpanded ? "Show less" : "Read more"}
          </button>
        )}
      </div>

      <div className="portfolio-item-tech-stack">
        {techStack.map((tech, index) => (
          <span key={index} className="tech-icon">
            {tech}
          </span>
        ))}
      </div>
    </div>
  );
}
