"use client";
import React, { useState } from "react";
import duckie from "@/imgs/duckie.png";
import Image from "next/image";

const DuckieCard = () => {
  const [duckies, setDuckies] = useState(123);
  const [isAnimating, setIsAnimating] = useState(false);

  const handleClick = () => {
    if (isAnimating) return; 
    setDuckies((prev) => prev + 1);
    setIsAnimating(true);


    setTimeout(() => {
      setIsAnimating(false);
    }, 2000);
  };

  return (
    <div className="about-card" onClick={handleClick}>
      <span>{duckies}</span>
      <h3>Duckies given</h3>
      {isAnimating && (
        <div className="duck-animation-container">
          <Image
            src={duckie}
            alt="Duckie"
            className="duck"
            width={40}
            height={40}
          />
        </div>
      )}
    </div>
  );
};

export default DuckieCard;
