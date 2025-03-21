"use client"
import React, { useState, useEffect } from "react";
import Link from "next/link";
import { LuBotMessageSquare } from "react-icons/lu";
import { IoMdMoon, IoMdSunny } from "react-icons/io";

const Header = () => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    useEffect(() => {
        const savedTheme = localStorage.getItem("theme");
        if (savedTheme === "light") {
            setIsDarkMode(false);
            document.body.classList.add("light-theme");
        } else {
            setIsDarkMode(true);
            document.body.classList.remove("light-theme");
        }
    }, []);

    const handleThemeToggle = () => {
        setIsDarkMode(!isDarkMode);

        if (isDarkMode) {
            localStorage.setItem("theme", "light");
            document.body.classList.remove("light-theme");
        } else {
            localStorage.setItem("theme", "dark");
            document.body.classList.add("light-theme");
        }
    };

    return (
        <header className="header">
            <div className="wrapper">
                <div className="header-container">
                    <div className="header-logo">
                        <h1>-G</h1>
                    </div>
                    <div className="header-buttons">
                        <div className="main-button">
                            <Link href="#contact">
                                <span>Contact me</span>
                                <LuBotMessageSquare />
                            </Link>
                        </div>
                        <div className="theme-button"
                            onClick={handleThemeToggle}>
                            {isDarkMode ?
                                <IoMdMoon /> :
                                <IoMdSunny />}
                        </div>
                    </div>
                </div>
            </div>
        </header>
    );
};

export default Header;
