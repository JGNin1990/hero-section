import rithImg from "../images/men-right.jpg";

const Hero = () => {
  return (
    <>
      <div className="flex flex-row h-[100vh] flex-wrap items-center bg-[#eee]">
        <div className="xl:w-[35%] md:w-[70%] mx-auto text-center">
          <h1 className="md:text-[55px] sm:text-[35px] text-[25px] font-bold md:leading-[65px] sm:leading-[40px] leading-[30px] lg:mt-0 mt-20">
            Data to enrich your <br></br>
            <span className="text-[#0e81ba] m-0">online business</span>
          </h1>
          <p className="md:text-[20px] sm:text-[17px] text-[14px] md:px-0 sm:px-24 px-3 text-gray-500 font-normal py-8">
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Soluta,
            consequatur illum doloribus modi commodi reprehenderit tempore hic
            odit exercitationem fuga!
          </p>
          <div className="">
            <button className="bg-[#0e81ba] sm:py-4 py-3 sm:px-9 px-5 sm:text-lg text-sm font-semibold shadow-md text-white m-1 rounded-md">
              Get start
            </button>
            <button className="bg-slate-100 sm:py-4 py-3 sm:px-9 px-5 sm:text-lg text-sm font-semibold text-[#0e81ba] shadow-md m-1 rounded-md">
              Live demo
            </button>
          </div>
        </div>
        <div className="xl:w-[50%] w-[100%]">
          <img
            src={rithImg}
            alt="aa"
            className=" w-[666px] mx-auto ml-auto object-contain"
          />
        </div>
      </div>
    </>
  );
};

export default Hero;
