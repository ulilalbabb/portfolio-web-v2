import Navbar from "./components/Layouts/Navbar/Navbar";
import HeroSection from "./components/Layouts/Hero/Hero";
import About from "./components/Layouts/About/About";
import MySkills from "./components/Layouts/Expertise/Expertise";
import Projects from "./components/Layouts/Projects/Projects";
import ContactPage from "./components/Layouts/Contact/Contact";

export default function Home() { 
  return (
    <>
      <Navbar></Navbar>
      <HeroSection></HeroSection>
      <About></About>
      <MySkills></MySkills>
      <Projects></Projects>
      <ContactPage></ContactPage>
    </>
  );
}
