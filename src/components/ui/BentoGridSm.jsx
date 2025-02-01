import h1 from "../../assets/highlights/h1.webp";
import h2 from "../../assets/highlights/h2.webp";
import h4 from "../../assets/highlights/h4.webp";
import h7 from "../../assets/highlights/h7.webp";
import h8 from "../../assets/highlights/h8.webp";
import h9 from "../../assets/highlights/h9.webp";
import h10 from "../../assets/highlights/h10.webp";
import h11 from "../../assets/highlights/h11.webp";
import h12 from "../../assets/highlights/h12.webp";
import h13 from "../../assets/highlights/h13.webp";
import h14 from "../../assets/highlights/h14.webp";
const BentoGridSm = () => {
  return (
    <div className=" h-[30%] grid grid-cols-4 grid-rows-10 gap-3 mt-[100px]">
      <div className="relative group col-span-4 row-span-12 rounded-xl overflow-hidden flex items-center justify-center">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity absolute z-20 text-white text-4xl tracking-wider font-semibold">
          {" "}
          Outings and Trips
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300 drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h8}
          alt="Monastir Trip"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden   rounded-xl col-span-4 row-span-3 ">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 transition-opacity absolute z-20 text-white pointer-events-none text-[22px] tracking-wider font-semibold">
          Summer Peak openning cermony
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h4}
          alt="IPS"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden col-span-2 row-span-4  rounded-xl">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 transition-opacity absolute z-20 text-white pointer-events-none text-[23px] tracking-wider font-semibold">
          {" "}
          Departure Support
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h13}
          alt="Departure support"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center  relative group overflow-hidden  col-span-2 row-span-4 rounded-xl ">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[21px] tracking-wider font-semibold">
          First Day At Work
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h9}
          alt="First day at work"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden  col-span-4 row-span-1 rounded-xl">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[30px] tracking-wider font-semibold">
          Trips To Our <br /> Magical Beaches
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h7}
          alt="RafRaf beach"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden  rounded-xl row-span-4 col-span-2">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[26px] tracking-wider font-semibold">
          Arrival Pick Up
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h12}
          alt="Arrival pickup"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden  rounded-xl col-span-2 row-span-4 ">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[25px] tracking-wider font-semibold">
          Last Day At <br /> Work
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h11}
          alt="last day at work"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden  rounded-xl col-span-2 row-span-3 ">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[25px] tracking-wider font-semibold">
          Access To <br /> Glovbal Village
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h10}
          alt="Global village"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center rounded-xl justify-center relative group overflow-hidden  row-span-3 col-span-2 ">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[25px] tracking-wider font-semibold">
          A Once In <br /> A lifetime Experience
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110  transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h14}
          alt="First day at work"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center relative group overflow-hidden  rounded-xl row-span-10 col-span-4">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[27px] tracking-wider font-semibold">
          Incoming Preparation Seminar
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h1}
          alt="Opening ceremony"
          style={{ imageRendering: "auto" }}
        />
      </div>

      <div className=" flex items-center justify-center  relative group overflow-hidden rounded-xl row-span-10 col-span-4 ">
        {/** Overlay */}
        <div className="absolute inset-0 w-full h-full opacity-0 group-hover:opacity-60 z-20 rounded-xl cursor-pointer bg-[#011e44] transition-opacity duration-300"></div>
        {/** Overlay descirption */}
        <h1 className=" opacity-0 group-hover:opacity-100 text-center transition-opacity absolute z-20 text-white pointer-events-none text-[28px] tracking-wider font-semibold">
          A Caring Ep Buddy
        </h1>
        {/** Image */}
        <img
          className=" group-hover:scale-110 transition-transform duration-300  drop-shadow-lg cursor-pointer w-full h-full rounded-xl"
          src={h2}
          alt="First day at work"
          style={{ imageRendering: "auto" }}
        />
      </div>
    </div>
  );
};

export default BentoGridSm;
