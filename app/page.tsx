import Navbar from "./components/Layouts/Navbar/Navbar";
import HeroSection from "./components/Layouts/Hero/Hero";
import About from "./components/Layouts/About/About";
import MySkills from "./components/Layouts/Expertise/Expertise";
import Projects from "./components/Layouts/Projects/Projects";
import ContactPage from "./components/Layouts/Contact/Contact";
import Footer from "./components/Layouts/Footer/Footer";
import WhatsappButton from "./components/elements/Whatsapp/Whatsapp";

export default function Home() { 
  return (
    <>
      <Navbar />
      <HeroSection />
      <About />
      <MySkills />
      <Projects />
      <ContactPage />
      <WhatsappButton/>
      <Footer />
    </>
  );
}
