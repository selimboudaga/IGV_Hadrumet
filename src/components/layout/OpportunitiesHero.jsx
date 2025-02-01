import { useEffect } from "react";
import gv from "../../assets/GV.png";
import { Link } from "react-scroll";
const OpportunitiesHero = () => {
  useEffect(() => {
          // Check if the URL has a hash for scrolling
          if (window.location.hash === '#oppsHero') {
            const element = document.getElementById('oppsHero');
            if (element) {
              element.scrollIntoView({
                behavior: 'smooth',  // Smooth scroll
                block: 'center',     // Center the element vertically
                inline: 'center',    // Center the element horizontally (if applicable)
              });
            }
          }
        }, []);
  return (
    <div id="oppsHero" className=" w-full flex">
      {/**gradient decoration */}
      <div className="  w-[500px] h-[350px] bg-blue/60 rounded-full absolute z-0 top-[20%] left-4 translate-x-[-50%] translate-y-[-50%] blur-[160px] flex "></div>

      {/**main content */}
      <div className="w-[90%] mt-[140px] flex flex-col mx-auto ">
        {/** Gv logo */}
        <div className=" ">
          <img
            src={gv}
            className=" cursor-pointer  w-[160px]  md:w-[230px] lg:h-[60px]  mb-[10px] md:mb-[20px] "
            alt=""
          />
        </div>

        <div className=" ">
          <h1 className="  text-left uppercase leading-tight  drop-shadow-xl   text-blue text-[46px] md:text-7xl lg:text-8xl font-extrabold  tracking-wider md:leading-[80px] lg:leading-[100px]">
            <span className=" md:flex hidden">Discover</span> Our Global
            Opportunities
          </h1>
        </div>
        <div className=" w-[98%] lg:w-[800px] mt-3 md:mt-6 ">
          <h2 className=" text-black text-left leading-relaxed text-[22px] md:text-2xl">
            Welcome to our opportunities hub! <br /> Whether you&apos;re student
            dreaming big, a graduate seeking meaningful experiences through our
            outstanding opportunities, or a business looking to partner with
            young talents and make a worldwide impact <br />
            <span className=" font-semibold">
              You&apos;re in the right place.
            </span>
          </h2>
        </div>
        <div className=" w-[88%] md:w-[420px] justify-between items-cente flex mt-8">
          <Link to="collaborations" smooth={true} duration={500}>
            <button className=" cursor-pointer border-4 border-transparent text-white font-bold flex  bg-[#037EF3]  items-center  py-2 md:py-3  rounded-[12px] px-5 hover:bg-white duration-300 hover:text-blue hover:border-blue  tracking-wide text-[17px] md:text-xl group">
              Collaborations
            </button>
          </Link>

          <Link to="opportunities" smooth={true} duration={500}>
            <button className="  cursor-pointer border-4 border-blue text-blue font-bold flex  bg-white  items-center  py-2 md:py-3  rounded-[12px] px-5 hover:bg-blue duration-300 hover:text-white   tracking-wide text-[17px] md:text-xl group">
              Opportunities
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default OpportunitiesHero;
