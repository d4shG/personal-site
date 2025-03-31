import React from 'react';
import Image from 'next/image';
import footerIcon from "@/imgs/footerIcon.png"
import { useLanguage } from '@/context/LanguageProvider';
import { footerText } from '@/scripts/footerData';

const Footer = () => {
    const { language } = useLanguage();
    const paragraph = footerText(language)

    return (
        <footer className="footer">
            <div className="footer-container wrapper">
                <p>{paragraph}</p>
                <div className="footer-icon">
                    <Image
                        src={footerIcon}
                        alt="footerIcon"
                        height={250}
                        width={250}
                    />
                </div>
            </div>
        </footer>
    );
};

export default Footer;
