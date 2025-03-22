"use client"
import React, { useState, useEffect } from 'react';
import { IoTerminal } from 'react-icons/io5';
import { RiRobot3Fill } from 'react-icons/ri';
import { FaGears, FaLaptopCode } from 'react-icons/fa6';
import { LuBotMessageSquare } from 'react-icons/lu';
import Link from 'next/link';

const Navbar = () => {
  const [activeLink, setActiveLink] = useState('#home');

  const handleScroll = () => {
    const sections = ['home', 'about', 'services', 'portfolio', 'contact'];
    const offsets = sections.map((id) => {
      const section = document.getElementById(id);
      return section ? section.offsetTop : 0;
    });

    const scrollPosition = window.scrollY + window.innerHeight / 2; 

    sections.forEach((id, index) => {
      if (scrollPosition >= offsets[index] && scrollPosition < (offsets[index + 1] || Infinity)) {
        setActiveLink(`#${id}`);
      }
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <ul className="navbar-menu">
          <li>
            <Link href="#home" className={activeLink === '#home' ? 'current' : ''}>
              <h4>Home</h4>
              <IoTerminal />
            </Link>
          </li>
          <li>
            <Link href="#about" className={activeLink === '#about' ? 'current' : ''}>
              <h4>About</h4>
              <RiRobot3Fill />
            </Link>
          </li>
          <li>
            <Link href="#services" className={activeLink === '#services' ? 'current' : ''}>
              <h4>Services</h4>
              <FaGears />
            </Link>
          </li>
          <li>
            <Link href="#portfolio" className={activeLink === '#portfolio' ? 'current' : ''}>
              <h4>Portfolio</h4>
              <FaLaptopCode />
            </Link>
          </li>
          <li>
            <Link href="#contact" className={activeLink === '#contact' ? 'current' : ''}>
              <h4>Contact</h4>
              <LuBotMessageSquare />
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
