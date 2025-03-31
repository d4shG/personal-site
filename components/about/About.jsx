"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import profil from '@/imgs/profil.jpeg'
import DuckieCard from './DuckieCard';
import { useLanguage } from '@/context/LanguageProvider';
import { aboutText } from '@/scripts/aboutData';

const About = () => {
    const [yearsOfExperience, setYearsOfExperience] = useState(null);
    const [completedProjects, setCompletedProjects] = useState(null);
    const { language } = useLanguage();
    const data = aboutText(language)


    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch(`https://api.github.com/users/${process.env.NEXT_PUBLIC_USERNAME}`);
                const data = await response.json();

                const createdAt = new Date(data.created_at);
                const currentYear = new Date().getFullYear();
                const experience = currentYear - createdAt.getFullYear();
                setYearsOfExperience(experience);

                const reposResponse = await fetch(data.repos_url);
                const reposData = await reposResponse.json();
                setCompletedProjects(reposData.length);

            } catch (error) {
                const fallbackYear = 2024;
                const fallbackMultiplier = 5;

                const currentYear = new Date().getFullYear();
                const defaultExperience = currentYear - fallbackYear;
                setYearsOfExperience(defaultExperience);

                const defaultProjects = defaultExperience * fallbackMultiplier;
                setCompletedProjects(defaultProjects);
            }
        };

        fetchGitHubData();
    }, []);

    return (
        <section className="about" id="about" data-aos="fade-up">
            <div className="wrapper">
                <div className="about-title">
                    <h3>{data.title}</h3>
                    <p>{data.subtitle}</p>
                </div>
                <div className="about-content">
                    <div className="about-img">
                        <Image
                            id="hero-pic"
                            src={profil}
                            alt="heroPic"
                            height={750}
                            width={750}
                        />
                    </div>
                    <div className="about-details">
                        <div className="about-details-text">
                            <h4>{data.details.title}</h4>
                            <p>{data.details.paragraph1}</p>
                            <p>{data.details.paragraph2}</p>
                            <p>{data.details.paragraph3}</p>
                        </div>
                        <div className="about-cards">
                            <div className="about-card">
                                <span>{yearsOfExperience}</span>
                                <h3>{data.cards.experience}</h3>
                            </div>
                            <div className="about-card">
                                <span>{completedProjects}</span>
                                <h3>{data.cards.projects}</h3>
                            </div>
                            <DuckieCard text={data.cards.duckies}/>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About