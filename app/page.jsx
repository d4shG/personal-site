import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import About from "@/components/About";
import TechStack from "@/components/TechStack";
import Services from "@/components/Services";
export default function Home() {
  return (
    <>
      <Header />
      <Navbar />
      <Hero />
      <About />
      <TechStack />
      <Services />
    </>
  );
}
