import Navbar from "./components/Navbar/Navbar";
import HeroSection from "./components/Hero/Hero";
import About from "./components/About/About";
import MySkills from "./components/Skills/Skills";

export default function Home() { 
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <MySkills></MySkills>
    </>
  );
}
