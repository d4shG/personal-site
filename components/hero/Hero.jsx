import React from 'react'
import { FaLinkedin, FaGithubSquare } from "react-icons/fa";
import { PiMouseScrollFill } from "react-icons/pi";
import { MdOutlineKeyboardDoubleArrowDown } from "react-icons/md";
import Link from 'next/link';
import Image from "next/image"
import heroPic from '@/imgs/heroPic.png'
import { heroText } from '@/scripts/heroData';
import { useLanguage } from '@/context/LanguageProvider';

const Hero = () => {
    const github = process.env.NEXT_PUBLIC_GITHUB_LINK;
    const linkedin = process.env.NEXT_PUBLIC_LINKEDIN_LINK;
    const { language } = useLanguage();
    const data = heroText(language)
    
    return (
        <section className="hero" id="home" data-aos="zoom-in">
            <div className="hero-container">

                <div className="hero-social">
                    <span className="vertical-text">{data.socials}</span>
                    <div className="hero-social-line"></div>
                    <ul className="hero-social-icons">
                        <li>
                            <Link href={github}>
                                <FaGithubSquare />
                            </Link>
                        </li>
                        <li>
                            <Link href={linkedin}>
                                <FaLinkedin />
                            </Link>
                        </li>
                    </ul>
                </div>

                <div className="hero-user">
                    <Image
                        id="hero-pic"
                        src={heroPic}
                        alt="heroPic"

                    />
                    <div className="hero-user-text">
                        <h2>{data.greetings}</h2>
                        <p>{data.typewriter}&nbsp;<span className={`typewriter ${language}`}></span></p>
                        <h1>-G</h1>
                    </div>
                </div>


                <Link href="#about" className="scroll">
                    <PiMouseScrollFill />
                    <span className="vertical-text">{data.scroll}</span>
                    <MdOutlineKeyboardDoubleArrowDown />
                </Link>
            </div>
        </section>
    );
};

export default Hero;