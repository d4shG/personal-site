
import Link from "next/link";
import { LuBotMessageSquare } from "react-icons/lu";
import { useLanguage } from "@/context/LanguageProvider";
import { headerText } from "@/scripts/headerData";
import LanguageSwitcher from '../languageSwitcher/LanguageSwitcher';


const Header = () => {
    const { language } = useLanguage();
    const text = headerText(language)

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-container">
                    <div className="header-logo">
                        <Link href="#home">
                            <h1>-G</h1>
                        </Link>
                    </div>
                    <div className="header-buttons">
                        <div className="main-button">
                            <Link href="#contact">
                                <span>{text}</span>
                                <LuBotMessageSquare />
                            </Link>
                        </div>
                        <LanguageSwitcher />
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
