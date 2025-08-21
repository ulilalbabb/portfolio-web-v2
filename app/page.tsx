import Image from "next/image";
import Counter from "./components/fragments/Counter/Counter";
import Navbar from "./components/elements/Navbar/Navbar";
import HeroSection from "./components/elements/Hero/Hero";
import About from "./components/elements/About/About";

export default function Home() { 
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      {/* <Counter></Counter> */}
    </>
  );
}
