import { useEffect, useRef } from "react";
import cardImg from "../assets/Profile_1-removebg-preview.png";
import bannerBackground from "../assets/banner_1.png";
import { FaFacebook } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import Typed from "typed.js";


const CardWide = ({refer}) => {
  const el = useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Full Stack Developer", "Web Developer", "Backend Developer"], // Strings to display
      // Speed settings, try diffrent values untill you get good results
      startDelay: 300,
      typeSpeed: 30,
      backSpeed: 30,
      backDelay: 300,
      smartBackspace: true,
      loop: true,
      showCursor: true,
      cursorChar: "!"
    });

    // Destropying
    return () => {
      typed.destroy();
    };
  }, []);
  return (

<div className="flex justify-center mb-5 mx-4 md:mx-24">
  <div 
    className="container flex flex-col md:flex-row items-center rounded p-0 mx-2 shadow-md bg-cover bg-no-repeat"
    style={{
      backgroundImage: `url(${bannerBackground})`,
    }}
  >
    <div className="w-full md:w-10/12 flex justify-center items-center mx-3 p-0">
      <div className="w-full md:w-3/4 space-y-3 py-3 text-center md:text-left">
        <h3 className="text-lg md:text-1xl font-semibold">Hi, I am </h3>
        <h1 className="text-xl md:text-2xl font-bold">Himansu Sekhar Sahu</h1>
        <p className="text-md md:text-xl font-serif">I am a dedicated and passionate <span className="font-bold" ref={el}></span></p>
        <p className="text-sm md:text-base">with a specialization in MERN Stack. Explore my work, skills, and journey through this portfolio.</p>
        <div className="ico-container space-x-3 md:space-x-5 h-8">
          <a className="text-sm p-1 text-lime-100 rounded-lg px-2 cursor-pointer bg-slate-800 hover:text-gray-50 hover:bg-slate-400"
          href="https://docs.google.com/document/d/1JFY1yo5zkCT0pKwHFru4RmAEFE24FrvrdTNFmwrZvi4/edit?usp=sharing"
          target="_blank"
          >Resume</a>
          {/* <span className="text-sm p-1 text-lime-100 rounded-lg px-2 cursor-pointer bg-slate-800 hover:text-gray-50 hover:bg-slate-400">Projects</span> */}
        </div>
      </div> 
    </div>
    <div className="w-full md:w-3/12 m-3 flex justify-center items-center">
      <img src={cardImg} className="w- h-48 md:h-60 px-4 rounded-md shadow-lg" />
    </div>
  </div>
</div>



    // <>
    //   <div className="flex justify-center mb-5 mx-24 " style={{ position: "" }}>
    //     <div
    //       className="container flex items-center rounded p-0 mx-2 shadow-md"
    //       style={{
    //         backgroundImage: `url(${bannerBackground})`,
    //         backgroundSize: "cover",
    //         backgroundRepeat: "no-repeat",
    //       }}
    //     >
    //       <div className=" w-full flex justify-center items-center mx-3 p-0">
    //         <div className="w-3/4 space-y-3 py-3">
    //           <h3 className="text-1xl font-semibold">Hi, I am </h3>
    //           <h1 className="text-2xl font-bold">Himansu Sekhar Sahu</h1>
    //           <p className="text-xl font-mono text-justify">
    //             I am a dedicated and passionate{" "}
    //             <span className="font-bold">Full Stack Developer</span>
    //           </p>
    //           <p>
    //             with a specialization in MERN Stack. Explore my work, skills,
    //             and journey through this portfolio.
    //           </p>
    //           <div className="ico-container space-x-5 h-8">
    //             <span className="text-sm p-1 text-lime-100 rounded-lg px-2 cursor-pointer bg-slate-800 hover:text-gray-50 hover:bg-slate-400 ">
    //               Resume
    //             </span>
    //             <span className="text-sm p-1 text-lime-100 rounded-lg px-2 cursor-pointer bg-slate-800 hover:text-gray-50 hover:bg-slate-400 ">
    //               Projects
    //             </span>
    //           </div>
    //         </div>
    //       </div>

    //       <div className=" w-ful m-3 flex justify-center items-center">
    //         <img
    //           src={cardImg}
    //           className=" w-fit h-60 pl-11 px-4 rounded-md shadow-lg"
    //         />
    //       </div>
    //     </div>
    //   </div>
    // </>
  );
};

export default CardWide;
