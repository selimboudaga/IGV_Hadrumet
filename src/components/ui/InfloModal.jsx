/* eslint-disable react/prop-types */
"use client";
import { IoArrowForward } from "react-icons/io5";

import {
  Dialog,
  DialogBackdrop,
  DialogPanel,
  DialogTitle,
} from "@headlessui/react";

export default function Example({ openModal, handleCloseModal, opportunity }) {
  return (
    <Dialog
      open={openModal}
      onClose={handleCloseModal}
      className="relative z-10"
    >
      <DialogBackdrop
        transition
        className="fixed inset-0 bg-black/50 transition-opacity data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in"
      />

      <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
        <div className="flex min-h-full items-end justify-center p-4 text-center sm:items-center sm:p-0">
          <DialogPanel
            transition
            style={{ border: `3px solid ${opportunity.color}` }}
            className="relative transform overflow-hidden rounded-lg bg-white text-left  transition-all data-closed:translate-y-4 data-closed:opacity-0 data-enter:duration-300 data-enter:ease-out data-leave:duration-200 data-leave:ease-in sm:my-8 w-[500px] sm:w-[520px] md:w-[540px]  data-closed:sm:translate-y-0 data-closed:sm:scale-95"
          >
            <div style={{backgroundColor: opportunity.modalBgColor}} className=" px-3 pt-1 pb-3">
              <div className="sm:flex sm:items-start">
                <div className="mt-3  w-full flex flex-col  text-left">
                  <DialogTitle
                    style={{ color: opportunity.color }}
                    className={` text-[22px]  font-bold `}
                  >
                    {opportunity.project}
                  </DialogTitle>

                  <div className=" flex w-full mt-3 mx-auto">
                    {/**first column */}
                    <div  className="w-[55%] text-left">

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Provider:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {opportunity.provider}{" "}
                      </p>
                    </div>
                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Start Date:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {" "}
                        {opportunity.startDate}{" "}
                      </p>
                    </div>

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Finish Date:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {opportunity.endDate}{" "}
                      </p>
                    </div>

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Lodging:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {opportunity.accommodation}{" "}
                      </p>
                    </div>

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Fees:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        ${opportunity.exchangeFee}{" "}
                      </p>
                    </div>

                    </div>
                        {/**second column */}
                    <div className=" w-[50%] text-left">
                        <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md text-left font-semibold text-gray-900">
                        Available Slots:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {" "}
                        {opportunity.slotsAvailable}/{opportunity.totalSlots}
                      </p>
                    </div>

                    
                    <div className="  my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Benefits:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {" "}
                        {opportunity.otherBenefits}
                      </p>
                    </div>

                    

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Requirements:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                      {opportunity.required === "" ? "None" : opportunity.required}
                      </p>
                    </div>

                    

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Food:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                        {opportunity.food}{" "}
                      </p>
                    </div>

                    

                    <div className=" my-1 flex flex-wrap">
                      <p className=" mr-2 text-md font-semibold text-gray-900">
                        Flexibility:
                      </p>
                      <p className="  text-md font-semibold text-gray-700">
                      {opportunity.flexibility}{" "}
                      </p>
                    </div>
                    </div>
                        
                  </div>
                  <button className=" group mt-4 py-[7px] flex justify-center rounded-lg text-white font-bold tracking-wider" style={{backgroundColor: opportunity.color}}>
                    <a  className=" items-center flex " target="_blank" href={opportunity.link}></a>
                    Opportunity Link <span className=" mt-[2px] group-hover:translate-x-2 duration-300 ml-1"><IoArrowForward  size={18} />                    </span>
                  </button>
                  
                </div>
              </div>
            </div>
          </DialogPanel>
        </div>
      </div>
    </Dialog>
  );
}
