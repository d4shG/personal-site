"use client"
import Header from "@/components/header/Header";
import Navbar from "@/components/navbar/Navbar";
import Hero from "@/components/hero/Hero";
import About from "@/components/about/About";
import TechStack from "@/components/services/TechStack";
import Services from "@/components/services/Services";
import Portfolio from "@/components/portfolio/Portfolio";
import ContactForm from "@/components/contact/Contact";
import Footer from "@/components/footer/Footer";
import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function Home() {
  useEffect(() => {
    AOS.init({
      duration: 1000
    });

    AOS.refresh();
  }, []);
  return (
    <>
      <Header />
      <Navbar />
      <Hero/>
      <About/>
      <TechStack/>
      <Services />
      <Portfolio />
      <ContactForm />
      <Footer />
    </>
  );
}
