"use client"
import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactForm from "@/components/Contact";
import Footer from "@/components/Footer";
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
