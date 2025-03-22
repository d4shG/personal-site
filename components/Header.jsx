
import Link from "next/link";
import { LuBotMessageSquare } from "react-icons/lu";


const Header = () => {
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
                                <span>Contact me</span>
                                <LuBotMessageSquare />
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
