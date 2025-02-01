import { useEffect } from "react";
import aiesec from "../../assets/AIESEC-Black-Logo.png";
import world from "../../assets/travel.png";

const Hero = () => {
  useEffect(() => {
    // Check if the URL has a hash for scrolling
    if (window.location.hash === "#home") {
      const element = document.getElementById("home");
      if (element) {
        element.scrollIntoView({
          behavior: "smooth", // Smooth scroll
          block: "center", // Center the element vertically
          inline: "center", // Center the element horizontally (if applicable)
        });
      }
    }
  }, []);
  return (
    <div id="home" className=" w-full flex">
      <div className=" mt-[130px] lg:mt-[180px] w-[85%] xl:w-[77%] mx-auto">
        <div className=" w-full h-full">
          {/** blue gradient */}
          <div className="  w-[500px] h-[390px] bg-blue/60 rounded-full hidden lg:flex absolute z-0 top-[52%] left-[60%] translate-x-[-50%] translate-y-[-50%] blur-[160px] ">
            {/** blue gradient- bottom  */}
            <div className="  w-[500px] h-[300px] bg-blue/70 rounded-full absolute z-0 top-[450px]  translate-x-[-1150px] translate-y-[-50%] blur-[60px]"></div>
          </div>

          <div className="z-20 flex  justify-between  ">
            <div className="">
              <p className=" font-extrabold text-7xl lg:text-8xl tracking-wider text-blue drop-shadow-xl ">
                HEY AIESEC !!
              </p>
              <br />
              <p className="  font-semibold drop-shadow-xl text-5xl   mt-2 lg:text-6xl ">
                Welcome, <br />
              </p>
              <p className=" mt-2 lg:mt-5 font-semibold drop-shadow-xl text-5xl   lg:text-6xl ">
                To Hadrumet&apos;s IGV Website.
              </p> 
              <div className="w-[98%] lg:w-[900px]">
              <p className=" mt-5 lg:mt-8 leading-relaxed text-[23px] lg:text-[24px] drop-shadow-xl">
                We&apos;re here to create life-changing experiences, bridge cultures,
                and shape a brighter future. For 16 years,  our Local Committee
                has been dedicated to empowering young leaders and making
                history. Every step we&apos;ve taken has been a journey of growth,
                impact, and transformation. Welcome to our Incoming Global
                Volunteer website! Explore our vision, discover exciting
                opportunities, and immerse yourself in inspiring stories. Don&apos;t
                forget to experience the beauty of our country along the way.
                
              </p>
              </div>
              
              <img src={aiesec} className=" w-[240px] z-20 mt-6" alt="aiesec_logo" />
            </div>
            <img
              src={world}
              className=" hidden md:flex mt-2  w-[27%] h-[40%] "
              alt="travel"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
