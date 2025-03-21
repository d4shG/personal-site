import React from 'react'
import Image from "next/image"
import heroPic from '@/imgs/heroPic.png'

const About = () => {
    return (
        <section className="about" id="about">
            <div className="wrapper">
                <div className="about-title">
                    <h3>About me</h3>
                    <p>What I do</p>
                </div>
                <div className="about-content">
                    <Image
                        id="hero-pic"
                        src={heroPic}
                        alt="heroPic"
                        height={750}
                        width={750}
                    />
                    <div className="about-details">
                        <div className="about-details-text">
                            <h4>Lorem Ipsum</h4>
                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Enim neque doloremque odio accusantium labore aut officia similique incidunt ducimus quae atque cupiditate, quas quo culpa saepe nemo inventore soluta libero.</p>
                            <p>Voluptatum eveniet corporis praesentium maxime doloremque facilis omnis veniam, cumque aperiam, blanditiis esse tenetur expedita ea aliquam. Itaque odio nulla aliquam et.</p>
                        </div>
                        <div className="about-cards">
                            <div className="about-card">
                                <span>07</span>
                                <p>Years of experience</p>
                            </div>
                            <div className="about-card">
                                <span>832</span>
                                <p>Completed projects</p>
                            </div>
                            <div className="about-card">
                                <span>123</span>
                                <p>Duckies given</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default About