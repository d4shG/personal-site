"use client";
import React, { useState, useEffect, useRef, useCallback } from "react";
import duckie from "@/imgs/duckie.png";
import Image from "next/image";
import { fetchDuckiesData, updateDuckiesData } from "@/scripts/redisData";
import { debounce } from "@/scripts/utils";

const DuckieCard = ({ text }) => {
  const [duckies, setDuckies] = useState(0);
  const initialDuckies = useRef(0);
  const [isAnimating, setIsAnimating] = useState(false);

  const GetDuckiesData = useCallback(async () => {
    const data = await fetchDuckiesData();
    setDuckies(data);
    initialDuckies.current = data;
  }, []);

  const updateDuckies = useCallback(
    debounce(async (duckies) => {
      await updateDuckiesData(duckies)
    }
      , 2000),
    []
  );

  const handleClick = () => {
    if (isAnimating)
      return;

    setDuckies((prev) => prev + 1);
    setIsAnimating(true);

    setTimeout(() => setIsAnimating(false), 2000);
  };

  useEffect(() => {
    GetDuckiesData();
  }, [GetDuckiesData]);


  useEffect(() => {
    if (duckies > initialDuckies.current) 
      updateDuckies(duckies);
    
  }, [duckies, updateDuckies]);

  return (
    <div
      className="about-card"
      onClick={handleClick}
      aria-label={`Duckies: ${duckies}`}
    >
      <span>{duckies}</span>
      <h3>{text}</h3>
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
