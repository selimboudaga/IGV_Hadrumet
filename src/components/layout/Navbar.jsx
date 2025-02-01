import { FiHome } from "react-icons/fi";
import { TbReportSearch } from "react-icons/tb";
import { FaRegCirclePlay } from "react-icons/fa6";
import tunisia from "../../assets/tunisia.png";
import { Link } from "react-router-dom";
import paths from "@/routes/paths";

const Navbar = () => {
  return (
    <div>
      {/** large devices navbar */}
      <div className="fixed top-0 left-0 z-50   w-full md:flex hidden  backdrop-blur-lg border-b-[0.1px] border-black">
        <ul className=" flex flex-row   justify-between items-center mx-auto w-[500px] h-[70px] text-[19px] text-black font-semibold">
          <Link to={`${paths.Home}#home`}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              Home
            </li>
          </Link>

          <Link to={`${paths.Opportunities}#oppsHero`}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              Opportunities
            </li>
          </Link>
          <Link to={`${paths.Testimonials}#testimonialsHero`}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              Testimonials
            </li>
          </Link>
          <Link to={paths.Country}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              Our country
            </li>
          </Link>
        </ul>
      </div>

      {/** small devices navbar */}
      <div className="fixed top-0 left-0 z-50 flex md:hidden backdrop-blur-lg w-full border-b-[0.1px] border-black">
        <ul className=" flex flex-row px-12 justify-between items-center mx-auto w-[500px] h-[70px] text-black">
          <Link to={`${paths.Home}#home`}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              <FiHome size={25} />
            </li>
          </Link>

          <Link to={`${paths.Opportunities}#oppsHero`}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              <TbReportSearch size={26} />
            </li>
          </Link>

          <Link to={`${paths.Testimonials}#testimonialsHero`}>
            <li className=" hover:text-blue transition-all duration-300 cursor-pointer">
              <FaRegCirclePlay size={25} />
            </li>
          </Link>

          <Link to={paths.Country}>
            <li className="  cursor-pointer">
              <div className=" border-2 border-transparent hover:border-black rounded-full transition-all duration-300 ">
                <img className="w-[30px] h-[30px] " src={tunisia} alt="" />
              </div>
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
