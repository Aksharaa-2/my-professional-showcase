import Hero from "@/components/Hero";
import About from "@/components/About";
import Education from "@/components/Education";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import Certifications from "@/components/Certifications";
import Hackathons from "@/components/Hackathons";
import Internships from "@/components/Internships";
import Hobbies from "@/components/Hobbies";
import Footer from "@/components/Footer";
import Navigation from "@/components/Navigation";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <About />
      <Education />
      <Skills />
      <Projects />
      <Certifications />
      <Hackathons />
      <Internships />
      <Hobbies />
      <Footer />
    </div>
  );
};

export default Index;
