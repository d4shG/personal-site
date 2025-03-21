import React from 'react'
import { IoTerminal } from "react-icons/io5";
import { RiRobot3Fill } from "react-icons/ri";
import { FaGears, FaLaptopCode } from "react-icons/fa6";
import { LuBotMessageSquare } from "react-icons/lu";
import Link from 'next/link';

const Navbar = () => {
    return (
        <nav className="navbar">
            <div className="navbar-container">
                <ul className="navbar-menu">
                    <li>
                        <Link href="#home" className="current">
                            <h4>Home</h4>
                            <IoTerminal />
                        </Link>
                    </li>
                    <li>
                        <Link href="#about">
                            <h4>About</h4>
                            <RiRobot3Fill />
                        </Link>
                    </li>
                    <li>
                        <Link href="#services">
                            <h4>Services</h4>
                            <FaGears />
                        </Link>
                    </li>
                    <li>
                        <Link href="#portfolio">
                            <h4>Portfolio</h4>
                            <FaLaptopCode />
                        </Link>
                    </li>
                    <li>
                        <Link href="#contact">
                            <h4>Contact</h4>
                            <LuBotMessageSquare />
                        </Link>
                    </li>
                </ul>
            </div>
        </nav>
    )
}

export default Navbar