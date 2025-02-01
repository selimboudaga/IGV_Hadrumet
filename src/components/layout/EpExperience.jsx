import { useState, useEffect } from "react";
import BentoGridLg from "../ui/BentoGridLg";
import BentoGridMd from "../ui/BentoGridMd";
import BentoGridSm from "../ui/BentoGridSm";

const EpExperience = () => {
  const [currentGrid, setCurrentGrid] = useState(<BentoGridSm />);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width >= 1280) {
        setCurrentGrid(<BentoGridLg />);
      } else if (width >= 768) {
        setCurrentGrid(<BentoGridMd />);
      } else {
        setCurrentGrid(<BentoGridSm />);
      }
    };

    // Set the grid initially based on screen size
    handleResize();

    // Add resize event listener
    window.addEventListener("resize", handleResize);

    // Cleanup the event listener
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex flex-col mt-[80px] w-[85%] xl:w-[77%] mx-auto">
      <h1 className="font-semibold drop-shadow-xl text-6xl">
        EP Experience
      </h1>
      {currentGrid}
    </div>
  );
};

export default EpExperience;
