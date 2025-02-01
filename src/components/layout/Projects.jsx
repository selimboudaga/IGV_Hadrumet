import global_classroom from "../../assets/projects/global_classroom.png";
import otm from "../../assets/projects/otm.png";
import skup from "../../assets/projects/skup.png";
import fp from "../../assets/projects/fp.png";
import y4i from "../../assets/projects/y4i.png";
import ec from "../../assets/projects/ec.png";
import e4c from "../../assets/projects/e4c.png";
import scup from "../../assets/projects/scup.png";
import mamw from "../../assets/projects/mamw.png";
import rooted from "../../assets/projects/root.png";
import gl from "../../assets/projects/gl.png";

const Projects = () => {
  const projects = [
    {"name":"Skill Up", "image":skup ,"color":"#A21A42"} ,
    {"name":"On The Map" , "image":otm ,"color":"#A21A42"},
    {"name":"Youth for Impact" , "image": y4i, "color":"#C51A2D"},
    {"name":"Finger Print", "image": fp , "color":"#C51A2D"},
    {"name":"Global Classroom", "image":global_classroom, "color":"#C51A2D"},
    {"name":"Scale Up", "image":scup ,"color":"#1A486A"},
    {"name": "MySelf and My World", "image": mamw,"color":"#1A486A"},
    {"name":"Green Leaders", "image":gl ,"color":"#3F7E45"},
    {"name":"Rooted", "image":rooted, "color" :"#56C02A"},
    {"name":"Eco City", "image":ec, "color":"#B8911A"},
    {"name" :"Eat for Change", "image":e4c,"color":"#B8911A"},
  ];
  return (
    <div className=" flex flex-col relative mt-[150px] lg:mt-[250px] w-[85%] xl:w-[77%] mx-auto ">
      {/**gradient decoration */}
      <div className="  w-[400px] h-[350px] bg-blue/60 rounded-full absolute z-0 hidden 2xl:flex -top-[52%] left-[80%]   translate-y-[-50%] blur-[160px] "></div>
      <h1 className=" font-semibold drop-shadow-xl    text-6xl">
        Our Focus projects
      </h1>
      <p className="text-grey text-[26px] mt-[30px]">
        We are aiming to open all the 17 projects of the GV portfolio! <br />{" "}
        But last term we worked on:{" "}
      </p>
      {/**projects */}
      <div className="flex flex-col mt-[30px] md:mt-[60px]">
        <div className=" grid grid-cols-4 gap-4 md:grid-cols-4  lg:grid-cols-6 xl:grid-cols-8 2xl:grid-cols-11 ">
        {projects.map((project, index) => (
            <div className=" group xl:w-[100px]  mx-auto" key={index}>
                <img   src={project.image} className=" md:group-hover:-translate-y-9 md:group-hover:scale-110 duration-300 mx-auto transition-all w-[65px] h-[65px] md:w-[85px] md:h-[85px] xl:w-[100px] xl:h-[100px]   cursor-pointer " alt={project.name} />
                <p className={`text-center hidden md:flex md:opacity-0 group-hover:opacity-100 transition-all group-hover:duration-300 group-hover:-translate-y-6 text-wrap mt-2 font-semibold text-[17px]`} style={{ color: project.color }} >{project.name}</p>
            </div>
            
        ))}
        </div>
        
        
      </div>
    </div>
  );
};

export default Projects;
