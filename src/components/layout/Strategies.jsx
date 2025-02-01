import { FaGlobeAfrica } from "react-icons/fa";
import travel from "../../assets/traveler.png";
import { LuHeartHandshake } from "react-icons/lu";
import { FaUsers } from "react-icons/fa";
import Circles from "../ui/Circles";

const Strategies = () => {
  return (
    <div className=" flex">
      <div className=" flex flex-col w-full  mt-[150px]  lg:mt-[250px] ">
        <div className=" w-[85%] xl:w-[77%] mx-auto">
          <h1 className=" font-semibold drop-shadow-xl    text-6xl">
            Our Strategies
          </h1>
        </div>

        <div className=" flex w-[85%] xl:w-[95%] mx-auto   mt-[80px] flex-row  items-center">
          <Circles />
          <div className=" hidden  xl:flex h-[2px] w-[5%] bg-blue "></div>
          {/**CARDS */}
          <div className=" items-stretch flex flex-col xl:flex-row w-full ">
            {/**card 1 & 2 */}
            <div className=" w-full h-full mx-auto items-stretch  flex flex-col md:flex-row ">
              {/**card1 */}
              <div className=" border-[3px]   w-full flex flex-col  rounded-[27px] border-blue  ">
                <div className=" mx-auto -mt-8 bg-white ">
                  <FaGlobeAfrica className=" mx-3 text-blue" size={60} />
                </div>
                <div className=" py-3 px-5">
                  <h1 className=" font-bold text-blue  text-[27px]">
                    International Relations
                  </h1>

                  <ul className="  mt-4 text-[21px]">
                    <li className=" py-1">
                      Establish diverse long-lasting IR partnerships
                    </li>
                    <li className=" py-1 ">
                      Strengthen diverse long-lasting IR partnerships
                    </li>
                    <li className=" py-1 ">
                      Maintain diverse long-lasting IR partnerships
                    </li>
                  </ul>
                </div>
              </div>
              {/**separator */}
              <div className=" h-[3px] hidden md:flex  self-center w-[65px] bg-blue "></div>

              {/**card2 */}
              <div className=" mt-12 md:mt-0  border-[3px]  w-full  flex flex-col  rounded-[27px] border-blue  ">
                <div className=" mx-auto -mt-10 bg-white ">
                  <img src={travel} className=" w-[70px] mr-4" alt="" />
                </div>
                <div className=" py-3 px-4">
                  <h1 className=" font-bold text-blue  text-[27px]">
                    Exchange Participants
                  </h1>

                  <ul className="  mt-4  text-[21px]">
                    <li className=" py-1">Multiply numbers</li>
                    <li className=" py-1 ">quality and enhance experience</li>
                  </ul>
                </div>
              </div>
            </div>

            <div className=" h-[3px] hidden xl:flex self-center  w-[65px] bg-blue "></div>
            {/**card 3 & 4 */}
            <div className=" w-full mt-12 xl:mt-0  flex flex-col md:flex-row items-stretch">
              {/**card 3 */}
              <div className=" border-[3px]  w-full  flex flex-col  rounded-[27px] border-blue  ">
                <div className=" mx-auto -mt-8 bg-white ">
                  <LuHeartHandshake className=" mx-3 text-blue" size={60} s />
                </div>
                <div className=" py-3 px-4">
                  <h1 className=" font-bold text-blue  text-[27px]">
                    NGOs & Partners
                  </h1>
                  <ul className="  mt-4 text-[21px]">
                    <li className=" py-1">
                      Enhance engagement and collaboration
                    </li>
                    <li className=" py-1 ">seek feedback and adapt</li>
                  </ul>
                </div>
              </div>

              <div className=" h-[3px] hidden md:flex  self-center w-[65px] bg-blue "></div>

              {/**card 4 */}
              <div className=" border-[3px] mt-12 md:mt-0  w-full xl:h-full   flex flex-col  rounded-[27px] border-blue  ">
                <div className=" mx-auto -mt-8 bg-white ">
                  <FaUsers className=" mx-3 text-blue" size={60} s />
                </div>
                <div className=" py-3 px-4">
                  <h1 className=" font-bold text-blue  text-[27px]">Members</h1>
                  <ul className="  mt-4 text-[21px]">
                    <li className=" py-1">Amplify members’ engagement </li>
                    <li className=" py-1 ">Amplify members’ developement</li>
                    <li>Seek an amplified outcome</li>
                  </ul>
                </div>
              </div>
            </div>
          </div>

          <div className=" hidden xl:flex h-[2px] w-[5%] bg-blue "></div>
          <Circles />
        </div>
      </div>
    </div>
  );
};

export default Strategies;
