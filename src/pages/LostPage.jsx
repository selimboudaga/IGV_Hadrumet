import { Link } from "react-router-dom";
import blueman from "../assets/blueman.png";
import blueman2 from "../assets/blueman2.png";
const LostPage = () => {
  return (
    <div className=" relative">
      {/**gradient decoration */}
      <div className="  w-[500px]  h-[350px] bg-blue/65 rounded-full absolute z-0 top-[25%] left-28 translate-x-[-50%] translate-y-[-50%] blur-[160px] flex "></div>

      {/**gradient decoration */}
      <div className="  w-[500px] h-[350px] bg-blue/60 rounded-full absolute z-0 top-[50%] left-[65%] translate-y-[-50%] blur-[150px] xl:flex hidden  "></div>

      {/**page not found content  */}

      <div className="flex flex-col items-center justify-center h-screen text-center">
        <h1 className="text-5xl md:text-7xl font-bold text-blue"> <span className=" text-6xl md:text-7xl">404</span> <br className=" md:hidden" /> <span className=" hidden md:inline">-</span> Page Not Found</h1>
        <p className="text-[22px] font-semibold text-gray-400 mt-4">
          Oops! I think you lost your way dear visitor.
          <br /> dont worry blueman will take you back home 💙
        </p>
        {/**link to home page */}
        <Link to="/">
          <div className="group flex relative">
            {/* First image (hidden by default, shown on hover) */}
            <div className="absolute inset-0 flex flex-col items-center opacity-0 scale-90 group-hover:opacity-100 group-hover:scale-100 transition-all duration-300">
              <img
                className="w-[100px] h-[100px] rounded-full mt-6"
                src={blueman2}
                alt=""
              />
              <h1 className="mt-2 text-xl text-center font-semibold text-blue">
                Go back home
              </h1>
            </div>

            {/* Second image (visible by default, hidden on hover) */}
            <div className="flex flex-col items-center opacity-100 scale-100 group-hover:opacity-0 group-hover:scale-90 transition-all duration-300">
              <img
                className="w-[100px] h-[100px] rounded-full mt-6"
                src={blueman}
                alt=""
              />
              <h1 className="mt-2 text-xl  opacity-0 text-center font-semibold text-blue">
                Go back home
              </h1>
            </div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default LostPage;
