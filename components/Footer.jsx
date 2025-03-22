import React from 'react';
import { FaGithub } from 'react-icons/fa';
import Image from 'next/image';
import footerIcon from "@/imgs/footerIcon.png"

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-container wrapper">
                <p>© 2025 Your Website Name. All rights reserved.</p>
                <div className="footer-icon">
                    <Image
                        id="hero-pic"
                        src={footerIcon}
                        alt="heroPic"
                        height={250}
                        width={250}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
