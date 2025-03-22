"use client"
import React, { useState, useEffect } from 'react';
import Image from "next/image"
import profil from '@/imgs/profil.jpeg'

import DuckieCard from './DuckieCard';

const About = () => {
    const [yearsOfExperience, setYearsOfExperience] = useState(null);
    const [completedProjects, setCompletedProjects] = useState(null);


    useEffect(() => {
        const fetchGitHubData = async () => {
            try {
                const response = await fetch('https://api.github.com/users/gb4rt0s');
                const data = await response.json();

                const createdAt = new Date(data.created_at);
                const currentYear = new Date().getFullYear();
                const experience = currentYear - createdAt.getFullYear();
                setYearsOfExperience(experience);

                const reposResponse = await fetch(data.repos_url);
                const reposData = await reposResponse.json();
                setCompletedProjects(reposData.length);

            } catch (error) {
                console.error('Error fetching GitHub data:', error);
            }
        };

        fetchGitHubData();
    }, []);
    return (
        <section className="about" id="about" data-aos="fade-up">
            <div className="wrapper">
                <div className="about-title">
                    <h3>About me</h3>
                    <p>What I do</p>
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
                            <h4>Meet the Dev</h4>
                            <p>I’m a passionate and curious full-stack developer with a focus on building creative and efficient solutions. Currently, I’m expanding my skill set by diving into ASP.NET for full-stack development and exploring scalable database solutions, particularly with PostgreSQL. I love tackling new challenges that push my problem-solving abilities and allow me to grow both personally and professionally.</p>
                            <p>I have a strong foundation in C#, JavaScript, and various web development technologies, including React, Next.js, and SQL. I'm always excited to take on projects that combine creativity, logic, and innovation, and I’m open to collaboration on solutions that make a real impact.</p>
                            <p>
                                Beyond coding, I enjoy balancing my technical work with hobbies like gaming, crocheting, and solving puzzles, all while staying true to my Ravenclaw spirit. If you want to chat about tech, C#, or even how to bake the best brownies, feel free to reach out!
                            </p>
                        </div>
                        <div className="about-cards">
                            <div className="about-card">
                                <span>{yearsOfExperience}</span>
                                <h3>Years of experience</h3>
                            </div>
                            <div className="about-card">
                                <span>{completedProjects}</span>
                                <h3>Completed projects</h3>
                            </div>
                            <DuckieCard />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About