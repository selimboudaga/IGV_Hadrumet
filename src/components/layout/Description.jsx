/* eslint-disable react/prop-types */
import { useSpring, animated } from "react-spring";
import { useInView } from "react-intersection-observer";
const Description = () => {
  function Number({ n, isVisible }) {
    const { number } = useSpring({
      from: { number: 0 },
      number: isVisible ? n : 0, // Only animate when visible
      delay: 200,
      config: { mass: 1, tension: 20, friction: 10 },
    });
    return <animated.div>{number.to((n) => n.toFixed(0))}</animated.div>;
  }

  const { ref, inView } = useInView({
    triggerOnce: true, // Trigger the animation only once
    threshold: 0.5, // Trigger when 50% of the element is in view
  });
  return (
    <div className=" w-full flex">
      <div className=" flex flex-col justify-between lg:flex-row w-[85%] xl:w-[77%] mx-auto mt-[150px] lg:mt-[280px] ">
        <div className="flex flex-col lg:w-[61%] ">
          <h1 className=" font-semibold drop-shadow-xl  text-6xl">
            IGV Zenith
          </h1>
          <div className=" mt-[50px] ">
            <p className=" text-grey text-[22px]">
              Welcome to IGV Zenith of Hadrumet&apos;s LC —{" "}
              <span className=" font-semibold text-blue">
                Where impact and adventure come together!
              </span>
              <br /> In our departement, we aim to reach the highest level of
              growth and success. With focus, hard work, and a passion for
              progress, we help create young leaders who make a difference
              around the world.
            </p>
            <p className=" text-grey text-[22px]">
              <span className=" font-semibold text-blue">
                {" "}
                Always at our best, always growing, and always making an impact{" "}
              </span>
              — this is what we stand for. Together, let’s embark on a journey
              of leadership, impact, and unforgettable experiences.Welcome to
              the summit of possibility.{" "}
              <span className=" font-semibold text-black">
                {" "}
                Let’s achieve greatness together!
              </span>
            </p>
          </div>
          {/** last year numbers */}
          <div className=" md:w-[90%] mt-3   md:mt-9 flex flex-col sm:flex-row justify-between">
            <div className=" flex w-full">
              {/**Approvals */}
              <div className=" flex  items-center mr-4 sm:mr-0 justify-center ">
                <h1
                  className=" text-[22px] sm:text-[22px]  xl:text-[31px] font-semibold  text-blue "
                  ref={ref}
                >
                  <Number n={51} isVisible={inView} />
                </h1>
                <h1 className=" ml-1 xl:ml-3 text-center text-gray-700 text-[22px] sm:text-[22px]  xl:text-[31px] font-semibold">
                  Approvals
                </h1>
              </div>
                {/**Realisations */}
              <div className=" flex  items-center justify-center  ">
                <h1
                  className=" text-[22px] sm:text-[22px]  xl:text-[31px] font-semibold  text-blue "
                  ref={ref}
                >
                  <Number n={24} isVisible={inView} />
                </h1>
                <h1 className=" ml-1 xl:ml-3 text-center text-gray-700 text-[22px] sm:text-[22px]  xl:text-[31px] font-semibold">
                  Realisations
                </h1>
              </div>
            </div>
            {/**Nationalities */}
            <div className=" flex mt-1 sm:mt-0  items-center  ">
              <h1
                className=" text-[22px] sm:text-[22px]  xl:text-[31px] font-semibold  text-blue "
                ref={ref}
              >
                <Number n={13} isVisible={inView} />
              </h1>
              <h1 className=" ml-1 xl:ml-3 text-center text-gray-700 text-[22px] sm:text-[22px]  xl:text-[31px] font-semibold">
                Nationalities
              </h1>
            </div>
          </div>
        </div>

        <div className=" mx-auto flex w-full mt-[80px] lg:mt-0 lg:w-[30%] ">
          {/** our members */}
          <div className=" w-full flex flex-col tracking-wide  leading-snug">
            <p className=" text-center text-blue text-[32px] lg:text-[27px] font-semibold">
              1 <br />
              Vice President
            </p>
            {/**separator */}
            <div className=" h-[110px] xl:h-[95px] my-1 w-[1.2px] bg-grey mx-auto"></div>
            <p className=" text-center text-blue text-[32px] lg:text-[27px] font-semibold">
              4 <br />
              Team Leaders
            </p>
            {/**separator */}
            <div className=" h-[110px] xl:h-[95px] my-1 w-[1.2px] bg-grey mx-auto"></div>
            <p className=" text-center text-blue text-[32px] lg:text-[27px] font-semibold">
              14 <br />
              Members
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Description;
