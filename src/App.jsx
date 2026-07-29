import Testimonials from "./sections/Testimonials";
import Footer from "./sections/Footer";
import Contact from "./sections/Contact";
import TechStack from "./sections/TechStack";
import Experience from "./sections/Experience";
import Hero from "./sections/Hero";
import AboutMe from "./sections/AboutMe";
// import ShowcaseSection from "./sections/ShowcaseSection";
import Projects from "./sections/Projects";
import LogoShowcase from "./sections/LogoShowcase";
import Certifications from "./sections/Certifications";
import FeatureCards from "./sections/FeatureCards";
import Services from "./sections/Services";
import Navbar from "./components/NavBar";

const App = () => (
  <>
    <Navbar />
    <Hero />
    <AboutMe />
    {/* <ShowcaseSection /> */}
    <Projects />
    <LogoShowcase />
    <Certifications />
    <FeatureCards />
    <Experience />
    <TechStack />
    <Services />
    <Testimonials />
    <Contact />
    <Footer />
  </>
);

export default App;
