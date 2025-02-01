/* eslint-disable react/prop-types */
import ReactPlayer from "react-player/lazy";


const TestimonialVideo = ({ video, description }) => {
  return (
    <div className="flex h-full">
      <div className="flex-1 rounded-[20px] flex flex-col hover:bg-white transition-colors duration-300 ease-in-out cursor-pointer bg-blue/15 overflow-hidden border-4 mx-3 border-blue/80">
        <div className="flex-1 relative w-full" >
          <ReactPlayer
            width="100%"
            height="100%"
            controls={true}
            url={video}
            config={{
              file: {
                attributes: {
                  style: {
                    width: '100%',
                    height: '100%',
                    objectFit: 'cover'
                  }
                }
              }
            }}
          />
        </div>
        <div>
          <p className="text-blue text-center font-semibold text-xl py-4 px-8">
            {description}
          </p>
        </div>
      </div>
    </div>
  );
};
export default TestimonialVideo;