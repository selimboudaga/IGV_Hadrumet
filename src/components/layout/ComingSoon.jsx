import { useEffect, useState } from "react";

const ComingSoon = () => {
  const [clock,setClock] = useState();
  useEffect(()=>{
    const interval = setInterval(() => {
      const date = new Date();
      setClock(date.toLocaleTimeString());
    }, 1000); // Update every second

    return () => clearInterval(interval); // Cleanup interval on unmount
  },[])
  return (
    <div className=" relative">
      {/**gradient decoration */}
      <div className="  w-[500px]  h-[350px] bg-blue/65 rounded-full absolute z-0 top-[25%] left-28 translate-x-[-50%] translate-y-[-50%] blur-[160px] flex "></div>

      {/**gradient decoration */}
      <div className="  w-[500px] h-[350px] bg-blue/60 rounded-full absolute z-0 top-[50%] left-[65%] translate-y-[-50%] blur-[150px] xl:flex hidden  "></div>

      {/**gradient decoration */}
      <div className="  w-[300px] h-[300px] bg-blue/50 rounded-full absolute z-0 top-[80%] left-[30%] translate-y-[-50%] blur-[150px] flex   "></div>

      {/**page not found content  */}

      <div className="flex flex-col z-20 items-center justify-center h-screen text-center">
        <h1 className="text-5xl  drop-shadow-xl md:text-7xl font-bold text-blue">
          {" "}
          This Page is Coming Soon!
        </h1>
        <p className="text-[22px] drop-shadow-sm font-semibold text-gray-400 mt-4">
          Stay tuned for updates. <br className=" md:hidden" /> We&apos;re working on something <br className=" md:hidden" /> amazing for you! 💙
        </p>
       <p className="text-3xl  mt-2 font-semibold text-blue drop-shadow-sm "> {clock} </p> 
      </div>
    </div>
  );
};

export default ComingSoon;
