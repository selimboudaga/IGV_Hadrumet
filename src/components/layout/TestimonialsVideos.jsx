import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import TestimonialVideo from "../ui/TestimonialVideo";
import { testimonials } from "@/constants/testimonials";
import { useEffect, useState } from "react";
const TestimonialsVideos = () => {
  const [orientation, setOrientation] = useState("horizontal");

  useEffect(() => {
    const handleResize = () => {
      setOrientation(window.innerWidth < 768 ? "vertical" : "horizontal");
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  return (
    <div className=" w-full flex  relative">
      {/**gradient decoration */}
      <div className="  w-[700px] h-[450px] md:flex hidden bg-blue/35 rounded-full absolute z-0 top-[55%] left-[50%] translate-x-[-50%] translate-y-[-50%] blur-[160px]  "></div>

      <div className=" w-[340px] h-screen   sm:w-[400px] md:w-[85%] lg:w-[85%] mt-[100px] z-20 flex flex-col mx-auto ">
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          orientation={orientation}
        >
          {/**carousel height */}
          <CarouselContent className=" h-[750px] sm:h-[825px]  w-full ">
            {/*  */}
            {testimonials.map((testimonial, index) => (
              <CarouselItem
                key={index}
                className=" basis-full   sm:basis-1/2  lg:basis-1/3 2xl:basis-1/4 "
              >
                <TestimonialVideo
                  video={testimonial.video}
                  description={testimonial.description}
                />{" "}
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="   border-2 border-gray-800 hover:border-blue hover:bg-blue/10 transition-all duration-300 cursor-pointer hover:text-blue" />
          <CarouselNext className="   border-2 border-gray-800  hover:border-blue hover:bg-blue/10 transition-all duration-300 cursor-pointer hover:text-blue" />
        </Carousel>
      </div>
    </div>
  );
};

export default TestimonialsVideos;
