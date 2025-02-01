import Description from "../components/layout/Description";
import EpExperience from "../components/layout/EpExperience";
import Footer from "../components/layout/Footer";
import Hadrumet from "../components/layout/Hadrumet";
import Hero from "../components/layout/Hero";
import Projects from "../components/layout/Projects";
import Strategies from "../components/layout/Strategies";
import Navbar from "../components/layout/Navbar";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <Description />
      <Strategies />
      <Projects />
      
      <EpExperience />
      <Hadrumet />
      <Footer />
    </div>
  );
};

export default Home;
