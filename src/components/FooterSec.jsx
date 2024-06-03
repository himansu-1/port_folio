import React from "react";
import FooterBtn from './subcomponents/FooterBtn.jsx'
import { FaFacebook  } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

import { FaTwitter } from "react-icons/fa";


import { IoLogoGithub } from "react-icons/io";


import { FaYoutube } from "react-icons/fa";



function FooterSec() {
  const icon = [
    {
      icon: 'facebook',
      color: 'bg-white text-blue flex-col mx-2 rounded-full px-2 py-1-700',
      link: 'https://www.facebook.com/himansusekharsahu.suman/',
      i:(<FaFacebook  color="blue" size={25}/>
    )
    },
    {
      icon: 'instagram',
      color: 'bg-white text-rose flex-col mx-2 rounded-full px-2 py-1-600',
      link: 'https://www.instagram.com/himansusekhar_official/',
      style: 'text-xl fa-brands fa-instagram',
      i:(<FaInstagram color="red" size={25} />)
    },
    {
      icon: 'twitter',
      color: 'bg-white text-black flex-col mx-2 rounded-full px-2 py-1',
      link: 'https://x.com/Himansu123Sahu',
      style: 'text-xl fa-brands fa-x-twitter',
      i:(<FaTwitter color="black" size={25} />)
    },
    {
      icon: 'linkedin',
      color: 'bg-white text-blue flex-col mx-2 rounded-full px-2 py-1-700',
      link: 'https://www.linkedin.com/in/it-is-himansu/',
      style: 'text-xl fa-brands fa-linkedin-in',
      i:(<FaLinkedin color="blue" size={25} />)
    },
    {
      icon: 'github',
      color: 'bg-white text-black flex-col mx-2 rounded-full px-2 py-1',
      link: 'https://github.com/himansu-1',
      style: 'text-xl fa-brands fa-github',
      i:(<IoLogoGithub color="black" size={25} />)
    },
    {
      icon: 'youtube',
      color: 'bg-white text-red flex-col mx-2 rounded-full px-2 py-1-600',
      link: 'https://www.facebook.com/himansusekharsahu.suman/',
      style: 'text-xl fa-brands fa-youtube',
      i:(<FaYoutube color="red" size={25} />)
    },
  ]
  return (
    <>
      <footer className="relative bg-cyan-950 backdrop-blur-md pt-1 opacity-85 text-lime-50">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-2 gap-1">
            <div className="w-full  px-4 ">
              <h4 className="text-2xl font-bold ">Let's keep in touch!</h4>
              <h5 className="text-md mt-0 mb-2 font-thin ">
                Find me on any of these platforms, 24 X 7
              </h5>
            </div>
            <div className=" justify-end flex">
              <div className="content-center">
                {
                  icon.map((item, index)=>(
                    <FooterBtn key={item.icon} link={item.link} i={item.i}/>
                  ))
                }
              </div>
            </div>
          </div>

          <hr className="my-2 border-gray-400" />

          <div className="flex flex-wrap items-center md:justify-between justify-center">
            <div className="w-full md:w-5/12 px-4 mx-auto text-center">
              <div className="text-sm  font-semibold pb-1">
                Copyright © 2024
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}

export default FooterSec;
