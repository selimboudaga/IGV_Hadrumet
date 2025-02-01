import LC from '../../assets/hadrumet.png'

const Hadrumet = () => {
  return (
    <div className=" relative flex mb-[50px] md:mb-[80px]  mt-[240px] ">
        <div className="  w-[480px] h-[340px]  bg-blue/70 rounded-full z-0 top-[20%] left-[0%]  -translate-x-[200px] translate-y-[-50%] blur-[150px] absolute"></div>
        
        
        
        <div className=" mx-auto flex items-center ">
            <img src={LC} className=' w-[360px] h-[185px]  md:w-[450px] md:h-[240px]  ' alt="" />
            
        </div>
      
    </div>
  )
}

export default Hadrumet
