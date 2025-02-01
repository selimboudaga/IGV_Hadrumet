import gv from "../../assets/GV.png";
import turkey from "../../assets/Nationalities/turkey.png";
import romania from "../../assets/Nationalities/romania.png";
import spain from "../../assets/Nationalities/spain.png";
import japan from "../../assets/Nationalities/japan.png";
import egypt from "../../assets/Nationalities/egypt.png";
import france from "../../assets/Nationalities/france.png";
import pakistan from "../../assets/Nationalities/pakistan.png";
import netherlands from "../../assets/Nationalities/netherlands.png";
import morocco from "../../assets/Nationalities/morocco.png";
import { useEffect } from "react";
const TestimonialsHero = () => {
  const countries = [
    { country: "turkey", image: turkey },
    { country: "romania", image: romania },
    { country: "spain", image: spain },
    { country: "japan", image: japan },
    { country: "egypt", image: egypt },
    { country: "france", image: france },
    { country: "pakistan", image: pakistan },
    { country: "netherlands", image: netherlands },
    { country: "morocco", image: morocco },
  ];

  useEffect(() => {
    // Check if the URL has a hash for scrolling
    if (window.location.hash === "#testimonialsHero") {
      const element = document.getElementById("testimonialsHero");
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
    <div id="testimonialsHero" className=" w-full flex">
      {/**gradient decoration */}
      <div className="  w-[500px]  h-[350px] bg-blue/60 rounded-full absolute z-0 top-[20%] left-4 translate-x-[-50%] translate-y-[-50%] blur-[160px] flex "></div>

      {/**gradient decoration */}
      <div className="  w-[500px] h-[350px] bg-blue/60 rounded-full absolute z-0 top-[70%] left-[61%] translate-y-[-50%] blur-[150px] xl:flex hidden  "></div>

      {/**main content */}
      <div className="w-[90%] mt-[140px] flex flex-col mx-auto ">
        {/** Gv logo */}
        <div className=" ">
          <img
            src={gv}
            className=" cursor-pointer hover:hidden w-[160px]  md:w-[230px] lg:h-[60px]  mb-[10px] md:mb-[20px] "
            alt=""
          />
        </div>

        <div className=" ">
          <h1 className=" drop-shadow-xl  text-left uppercase leading-tight    text-blue text-[46px] md:text-7xl lg:text-8xl font-extrabold  tracking-wider md:leading-[80px] lg:leading-[100px]">
            <span className=" ">The Exchange Experience </span> —Through Their
            Eyes
          </h1>
        </div>

        <div className=" w-[98%] lg:w-[800px] mt-3 md:mt-6 ">
          <h2 className=" text-black text-left leading-relaxed text-[22px] md:text-2xl">
            Welcome to our{" "}
            <span className=" font-semibold text-blue">Testimonials Hub!</span>{" "}
            <br /> Hear from our exchange participants of the{" "}
            <span className=" font-semibold text-blue">2024-2025 term</span>{" "}
            through their videos as they share their life-changing experiences.{" "}
            <br />
            Watch their stories, feel their journeys, and see how this exchange
            experience has shaped their personal and professional growth. <br />
            Last year we worked with{" "}
            <span className=" font-semibold text-blue">
              13 Nationalities{" "}
            </span>{" "}
            , we completed{" "}
            <span className=" font-semibold text-blue"> 25 experiences </span>{" "}
            <br />
            Enjoy the videos, and for more inspiring stories and more details
            about our activities , check out our{" "}
            <span className=" font-semibold text-blue underline">
              {" "}
              <a
                target="_blank"
                href="https://www.instagram.com/igv.hadrumet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
              >
                Instagram page!
              </a>
            </span>
            <br />
          </h2>
        </div>
        {/** nationalities */}
        <div className=" mt-[50px] grid w-full grid-cols-3 gap-y-4  md:grid-cols-5 xl:grid-cols-9 lg:w-[1000px] ">
          {countries.map((country, index) => (
            <div  className=" flex flex-col group items-center" key={index}>
              <img
                className="  w-[80px] group-hover:scale-110 transition-transform duration-300 cursor-pointer  h-[45px] "
                src={country.image}
                alt={country.country}
              />
              <h1 className=" mt-2 group-hover:opacity-100 transition-opacity duration-300 ease-in-out text-gray-800 opacity-0 text-center text-[18px] font-semibold">
                {country.country}
              </h1>
            </div>
          ))}
        </div>

        <div className=" w-full mx-auto mt-[100px]">
          <h1 className=" font-semibold drop-shadow-xl text-5xl  lg:text-5xl">
            Our Testimonials
          </h1>
          <div className=" mt-[30px] w-[95%] lg:w-[850px] ">
            <p className="text-grey text-[22px]">
              Enjoy watching the stories shared by our exchange participants and
              their life-changing experiences. In these testimonials,
              you&apos;ll discover what they enjoyed most about their journey in
              Tunisia and how they created unforgettable moments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TestimonialsHero;
