import { projects } from "@/constants/Opportunities";
import { BsSortUp } from "react-icons/bs";
import { FaExternalLinkAlt } from "react-icons/fa";
import { DatePickerWithRange } from "../ui/DatePickerWithRange";
import FilterLogic from "../../constants/FilterLogic";
import { useState } from "react";
import InfoModal from "../ui/InfloModal";


export const ListOfOpportunities = () => {
  
  const {
    sortDate,
    sortPrice,
    date,
    setDate,
    sortOpps,
    projectFilter,
    handleClickProject,
    handleClickSortDate,
    handleClickSortPrice,
  } = FilterLogic();

  const [selectedOpportunity, setSelectedOpportunity] = useState(null);
  const [openModal, setOpenModal] = useState(false);
  const handleOpenModal = (opportunity) => {
    if (window.innerWidth <= 1280) {
      setOpenModal(true);
      setSelectedOpportunity(opportunity);
    }
  };

  const handleCloseModal = () => {
    setOpenModal(false);
    setSelectedOpportunity(null);
  };

  return (
    <div  className=" w-full flex">
      {/**gradient blur decoration */}
       <div className=" xl:flex hidden  w-[500px] h-[350px] bg-blue/50 rounded-full absolute z-0 top-[90%] left-[80%] translate-x-[-50%] translate-y-[-50%] blur-[160px]  "></div>
       
      <div className="w-[100%] mt-[120px] lg:mt-[180px] flex flex-col mx-auto">
        <div className=" w-[90%] mx-auto">
          <h1 className=" font-semibold drop-shadow-xl text-5xl  lg:text-6xl">
             Our Opportunities
          </h1>
          <div  className=" mt-[30px] w-[95%] lg:w-[850px] ">
            <p  className="text-grey text-[22px]">
              Hello AIESEC community! Discover our incredible range of
              opportunities that you simply can&apos;t afford to miss. We currently
              offer <span className=" font-semibold text-blue"> 12 opportunities</span> across <span className=" font-semibold text-blue">8 exciting projects</span>, and we&apos;re
              aiming to expand even further! Our opportunities come with
              attractive benefits, including some that provide high-quality
              accommodation in <span id="opportunities" className=" font-semibold text-blue">4-star hotels.</span> You can explore each opportunity
              and its details in the table below. You&apos;re just a few clicks away
              from embarking on a life-changing experience. <span   className=" font-semibold text-blue">your
              journey starts here!</span> 
            </p>
          </div>
          <h1  className=" text-gray-900 font-bold text-[32px] mt-10 tracking-wide ">Take a  look at our Searchtool</h1>
        </div>
        {/**list of projects */}
        <div  className=" w-[90%] mx-auto grid lg:grid-cols-8 gap-2 lg:gap-7 grid-cols-2 sm:grid-cols-4 mt-[35px] ">
          {/**projects filter buttons */}
          {projects.map((project, index) => (
            <button
              onClick={() => handleClickProject(index)}
              style={{
                color:
                  projectFilter[index].clicked === true
                    ? "#ffffff"
                    : project.color,
                border: `2px solid ${project.color}`,
                backgroundColor:
                  projectFilter[index].clicked === true
                    ? project.color
                    : project.bgColor,
              }}
              className="border-[2px] text-lg  rounded-lg transition-colors duration-300 font-semibold py-1 px-3"
              onMouseEnter={(e) => {
                if (!projectFilter[index].clicked) {
                  e.currentTarget.style.backgroundColor = project.hoverColor;
                }
              }}
              onMouseLeave={(e) => {
                if (!projectFilter[index].clicked) {
                  e.currentTarget.style.backgroundColor = project.bgColor;
                }
              }}
              key={index}
            >
              {project.name}
            </button>
          ))}
        </div>
        {/**table head */}
        <div className="w-[90%] mx-auto mt-2 bg-gray-100 border-gray-500 border-2 rounded-lg text-gray-500 mb-2  grid grid-cols-4 sm:grid-cols-6 md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12">
          <p className="px-3 py-4 text-left text-lg font-semibold text-gray-900">
            Project
          </p>
          <p className="px-3 py-4 md:flex hidden text-left text-lg font-semibold text-gray-900">
            Provider
          </p>
          <p className="px-3 py-4 md:flex hidden text-left text-lg font-semibold text-gray-900">
            Available Slots
          </p>
          <p className="px-3 py-4 text-left text-lg font-semibold text-gray-900">
            Start date
          </p>
          <p className="px-3 py-4 text-left text-lg font-semibold text-gray-900">
            Finish date
          </p>
          <p className="px-3 py-4 lg:flex hidden text-left text-lg font-semibold text-gray-900">
            Flexibility
          </p>
          <p className="px-3 py-4 sm:flex hidden text-left text-lg font-semibold text-gray-900">
            Lodging
          </p>
          <p className="px-3 hidden sm:flex py-4 text-left text-lg font-semibold text-gray-900">
            Fees
          </p>
          <p className="px-3 lg:flex hidden py-4 text-left text-lg font-semibold text-gray-900">
            Food
          </p>
          <p className="px-3 py-4 xl:flex hidden text-left text-lg font-semibold text-gray-900">
            Benefits
          </p>
          <p className="px-3 py-4 xl:flex hidden text-left text-lg font-semibold text-gray-900">
            Required
          </p>
          <p className="px-3 py-4 text-left text-lg font-semibold text-gray-900">
            Link
          </p>
        </div>
        {/**filters and date range */}
        <div className=" justify-start w-[90%]  mb-1 mx-auto sm:flex-row  flex-col flex">
          <DatePickerWithRange date={date} setDate={setDate} />
          <div className=" flex  flex-col sm:flex-row w-full">
            <button
              onClick={() => handleClickSortDate()}
              className={` border-gray-500  border-2 rounded-lg py-1 w-full sm:w-[150px] transition-colors duration-300 my-2 sm:my-0 sm:mx-2  font-semibold justify-center text-[16px] items-center flex ${
                sortDate
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200 "
              } `}
            >
              Sort by Date{" "}
              <span className="  ml-2">
                <BsSortUp size={19} />
              </span>
            </button>

            <button
              onClick={() => handleClickSortPrice()}
              className={` border-gray-500 border-2 rounded-lg w-full py-1 sm:w-[150px] transition-colors duration-300   font-semibold justify-center text-[16px] items-center flex ${
                sortPrice
                  ? "bg-gray-900 border-gray-900 text-white"
                  : "bg-gray-100 text-gray-900 hover:bg-gray-200 "
              } `}
            >
              Sort by Price{" "}
              <span className="  ml-2">
                <BsSortUp size={19} />
              </span>
            </button>
            <div className=" w-3 h-3 bg-[#a21a430e]"></div>
          </div>
        </div>
        {/**table data */}
        {sortOpps.map((opportunity, index) => (
          <div
            style={{
              border: `2px solid ${opportunity.color}`,
            }}
            onClick={() => handleOpenModal(opportunity)}
            className={`grid  items-center cursor-pointer hover:bg-${opportunity.hoverColor} border-[1px] grid-cols-4 sm:grid-cols-6  md:grid-cols-8 lg:grid-cols-10 xl:grid-cols-12 w-[90%] my-1 rounded-lg drop-shadow-md mx-auto`}
            onMouseEnter={(e) =>
              (e.currentTarget.style.backgroundColor = opportunity.bgColor)
            }
            onMouseLeave={(e) =>
              (e.currentTarget.style.backgroundColor = "transparent")
            }
            key={index}
          >
            <p
              style={{ color: opportunity.color }}
              className="px-3 py-4 text-[15px] md:text-[17px]  font-semibold  "
            >
              {opportunity.project}
            </p>
            <p className="px-3 py-4 text-[15px] md:text-[17px]  md:flex hidden text-gray-800  ">
              {opportunity.provider}
            </p>
            <p className=" text-gray-800 md:flex hidden px-3 py-4 text-[15px] md:text-[17px]   whitespace-nowrap">
              {opportunity.slotsAvailable}/{opportunity.totalSlots}
            </p>
            <p className=" text-gray-800 px-3 py-4 text-[15px] md:text-[17px]   whitespace-nowrap">
              {opportunity.startDate}
            </p>
            <p className=" text-gray-800 px-3 py-4 text-[15px] md:text-[17px]   whitespace-nowrap">
              {opportunity.endDate}
            </p>
            <p className=" text-gray-800 lg:flex hidden px-3 py-4 text-[15px] md:text-[17px]   whitespace-nowrap">
              <span className={` font-semibold text-[17px] `}>
                {opportunity.flexibility}
              </span>
            </p>
            <p className="px-3 py-4 sm:flex hidden text-[17px] ">
              {opportunity.accommodation}
            </p>
            <p className=" text-gray-800 hidden sm:flex px-3 py-4 text-[15px] md:text-[17px]   whitespace-nowrap">
              ${opportunity.exchangeFee}
            </p>
            <p className=" text-gray-800 lg:flex hidden px-3 py-4 text-[15px] md:text-[17px]   whitespace-nowrap">
              {opportunity.food}
            </p>
            <p className="px-3 py-4 xl:flex hidden text-[17px] ">
              {opportunity.otherBenefits}
            </p>
            <p className="px-3 py-4 text-[15px] md:text-[17px]  xl:flex hidden ">
              {opportunity.required}
            </p>
            <p className=" ml-3 sm:ml-0  px-6 py-4 text-[17px] whitespace-nowrap group">
              <a
                href="#"
                className="group-hover:scale-110 transition-transform duration-300 text-gray-600 hover:text-gray-900"
              >
                <FaExternalLinkAlt size={16} />
              </a>
            </p>
          </div>
        ))}
        {/** Modal */}
        {selectedOpportunity && (
          <InfoModal
            openModal={openModal}
            handleCloseModal={handleCloseModal}
            opportunity={selectedOpportunity}
          />
        )}
      </div>
    </div>
  );
};
export default ListOfOpportunities;
