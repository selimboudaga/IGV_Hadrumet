import soCute from "../../assets/partners/soCute.png";
import logo from "../../assets/partners/logo.png";
import ecovillage from "../../assets/partners/ecovillage.png";
import lesLaureats from "../../assets/partners/lesLaureats.png";
import arij from "../../assets/partners/arij.png";
import errahma from "../../assets/partners/errahma.png";
import laperseverance from "../../assets/partners/laPerseverance.png";
import chebbi from "../../assets/partners/chebbi.png";
import sps from "../../assets/partners/sps.png";

import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
const Partners = () => {
  
  return (
    <div className=" w-full flex">
      <div 
        className=" flex flex-col justify-between w-[90%] mx-auto mt-[100px]  ">
        <h1 className=" font-semibold drop-shadow-xl  text-6xl">
          Our Dear Partners
        </h1>

    <div className=" mt-11 w-[80%] md:w-[90%] xl:w-[96%] mx-auto">
          <Carousel>
            <CarouselContent className=" items-center ">
              
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={150} height={150} src={arij} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={160} height={160} src={errahma} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={150} height={150} src={lesLaureats} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={130} height={130} src={laperseverance} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={160} height={160} src={ecovillage} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={160} height={160} src={logo} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={140} height={140} src={sps} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={125} height={125} src={chebbi} alt="" />
                  </div>
                </CarouselItem>
                <CarouselItem className="  basis-1/2 md:basis-1/4 lg:basis-1/6" >
                <div className=" flex justify-center   ">
                    <img width={150} height={140} src={soCute} alt="" />
                  </div>
                </CarouselItem>
              
            </CarouselContent>
            <CarouselPrevious className="   border-2 border-transparent hover:border-blue hover:bg-blue/10 transition-all duration-300 cursor-pointer hover:text-blue" />
            <CarouselNext className="   border-2 border-transparent hover:border-blue hover:bg-blue/10 transition-all duration-300 cursor-pointer hover:text-blue" />
          </Carousel>
        </div>
      </div>
    </div>
  );
};

export default Partners;
