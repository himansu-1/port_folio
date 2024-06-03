import React from 'react'
import Heading from './Heading'
import img_1 from '../assets/1-removebg.png'
import img_2 from '../assets/2-removebg.png'
import img_3 from '../assets/3-removebg.png'
import SkillContent from './subcomponents/SkillContent'
// import { data } from 'autoprefixer'

function Projects({refer}) {
    const array=[
      {
        title:'BUMCA',
        sub_title:'Alumni Gathering Web Application',
        img: img_1,
        link: 'https://github.com/himansu-1/mca-final.git',
        skill: ['React.js','Node.js','Express.js','Django','HTML','CSS','Bootstrap'],
      },
      {
        title:'OTP Verifier',
        sub_title:'OTP verification of Mobile Number',
        img: img_2,
        link: 'https://github.com/himansu-1/otp-verify.git',
        skill: ['React.js','Node.js','Express.js','Django','','MaterialUI','Firebase'],
      },
      {
        title:'Employee Management',
        sub_title:'Each Admin can manage their Employee List with CURD Operations',
        img: img_3,
        link: 'https://github.com/himansu-1/mern-machine-test.git',
        skill: ['React.js','HTML','CSS','Bootstrap','TailwindCSS'],
      },
    ]
  return (
    <>
    <div className="h-2" ref={refer}></div>
    <Heading heading={"My Projects"}/>
    <div className="m-2 mx-3 my-7 p-2 gap-2 flex flex-col md:flex-row flex-wrap justify-center">
        {
            array.map((data,index)=>(

                <SkillContent key={index} item={data}/>
            ))
        }
    </div>
  
    {/* {
        array.map((data)=>(
            <SkillContent doc={data}/>
        ))
    } */}

    </>
  )
}

export default Projects