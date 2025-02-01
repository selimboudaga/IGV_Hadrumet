import LClogo from "../../assets/hadrumetLogo.png";
import { FaInstagram } from "react-icons/fa";
import { FaFacebook } from "react-icons/fa";
import { FaWhatsapp } from "react-icons/fa";
import { FaArrowRightLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import paths from "@/routes/paths";

const Footer = () => {
  return (
    <div className=" flex flex-col ">
      
      <div className=" mx-auto flex flex-row w-[85%] lg:w-[75%] justify-between items-center">
        <img
          src={LClogo}
          className=" hidden md:flex w-[110px] h-[110px]"
          alt="HadrumetLogo"
        />

        <ul className=" mx-auto flex  w-[90%] flex-col md:flex-row justify-between text-center  lg:w-[700px] items-center">
          <Link to={`${paths.Opportunities}#oppsHero`}>
            <li className=" py-1 md:py-0 font-semibold text-[22px] hover:text-blue transition-all duration-300 cursor-pointer">
              Opportunities
            </li>
          </Link>
          <Link to={`${paths.Testimonials}#testimonialsHero`}>
            <li className=" py-1 md:py-0 font-semibold text-[22px] hover:text-blue transition-all duration-300 cursor-pointer">
              Testimonials
            </li>
          </Link>
          <Link to={paths.Country}>
            <li className=" py-1 md:py-0 font-semibold text-[22px] hover:text-blue transition-all duration-300 cursor-pointer">
              Our Country
            </li>
          </Link>

          <Link to={`${paths.Opportunities}#collaborations`}>
            <li className=" py-1 md:py-0 font-semibold text-[22px] hover:text-blue transition-all duration-300 cursor-pointer">
              For Buisness
            </li>
          </Link>
        </ul>
        {/**large screen social media icons */}
        <div className=" hidden lg:flex flex-row w-[20%] justify-evenly items-center ">
          <a
            target="_blank"
            href="https://www.instagram.com/igv.hadrumet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
          >
            <FaInstagram
              className=" transition-all hover:text-blue duration-300 cursor-pointer"
              size={38}
            />
          </a>

          <FaFacebook
            className=" transition-all hover:text-blue duration-300 cursor-pointer"
            size={38}
          />

          <a target="_blank" href="https://wa.me/21628778562">
            <FaWhatsapp
              className=" transition-all hover:text-blue duration-300 cursor-pointer"
              size={38}
            />
          </a>
        </div>
      </div>
      {/**small screen social media icons */}
      <div className=" my-4 mx-auto lg:hidden flex flex-row w-[160px] justify-evenly items-center ">
        <a
          target="_blank"
          href="https://www.instagram.com/igv.hadrumet?utm_source=ig_web_button_share_sheet&igsh=ZDNlZDc0MzIxNw=="
        >
          <FaInstagram
            className=" transition-all hover:text-blue duration-300 cursor-pointer"
            size={38}
          />
        </a>

        <FaFacebook
          className=" transition-all hover:text-blue duration-300 cursor-pointer"
          size={32}
        />
        <a target="_blank" href="https://wa.me/21628778562">
          <FaWhatsapp
            className=" transition-all hover:text-blue duration-300 cursor-pointer"
            size={32}
          />
        </a>
      </div>
      <div className="flex py-4 w-full md:w-[75%]  mx-auto mt-2 justify-between items-center px-5  border-t-[1px] border-black mb-0">
        <p className="text-[15px] tracking-wide   ">2025© IGV Hadrumet.</p>
        <a
          href="https://wa.me/21693390222"
          target="_blank"
          rel="noopener noreferrer"
        >
          <button className=" text-[17px] md:text-[18px] px-3 group tracking-wide flex items-center text-blue font-semibold   ">
            Contact the developper{" "}
            <span className=" group-hover:translate-x-2 transition-all duration-300 ml-2">
              <FaArrowRightLong />{" "}
            </span>
          </button>
        </a>
      </div>
    </div>
  );
};

export default Footer;
