import React from 'react'
import img from '../assets/4-removebg.png'
import Heading from './Heading'
import SkillContent from './subcomponents/SkillContent.jsx'

function Skill({refer}) {
  const arr={
    language:['C', 'Core Java', 'Python', 'JavaScript', 'C++' ],
    frontend:['React.js', 'Next.js', 'Angular', 'ReactNative' ],
    backend:['Express.js', 'Node.js', 'Mongoose', 'Django'],
    styling:['Bootstrap', 'TailwindCSS', 'MaterialUI', 'CodePen' ],
    data:['MongoDB', 'mySQL', 'AWS',],
  }
  return (
    <>
    <div className="h-2" ref={refer}></div>
    <Heading heading={"My Expertis/Skills"}/>
    <div className="m-4 py-4 flex flex-col md:flex-row justify-items-center gap-4 rounded-lg mx-4 md:mx-8 hover:shadow-inner transition duration-500 hover:scale-105 hover:bg-gray-100 mb-7">
        <div className="grid w-full m-5 md:mr-0">
          {[
            { label: "Programming Languages", data: arr.language },
            { label: "Frontend Frameworks", data: arr.frontend },
            { label: "Backend Frameworks", data: arr.backend },
            { label: "Styling Libraries", data: arr.styling },
            { label: "Data Operations", data: arr.data },
          ].map((section) => (
            <div className="flex flex-col md:flex-row h-fit w-full gap-2 mb-2" key={section.label}>
              <div className="flex w-fit text-xl font-semibold ml-2 font-mono">{section.label}:</div>
              <div className="flex-1 flex flex-wrap">
                {section.data.map((item) => (
                  <p
                    className="hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 px-2 text-sm"
                    key={item}
                  >
                    {item}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>
        <div className="flex w-full md:w-5/12 mx-2 md:mx-0">
          <img src={img} className="h-full w-full object-cover rounded-lg" alt="Profile" />
        </div>
      </div>
    {/* <div className=" m-4 py-4 flex justify-items-center gap-1 rounded-lg mx-8 hover:shadow-inner   transition duration-500 hover:scale-105 hover:bg-gray-100 mb-7">
      <div className="grid w-full m-5 mr-0">
        <div className="flex h-fit w-full  gap-2">
          <div className="flex w-fit text-xl font-semibold ml-2 font-mono">Programming Languages:</div>
          <div className="flex-1">{arr.language.map((data)=>(<p className=' hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 mx-2 px-2 text-sm'>{data}</p>))}</div>
        </div>
        <div className="flex h-fit w-full  gap-2">
          <div className="flex w-fit text-xl font-semibold ml-2 font-mono">Frontend Frameworks:</div>
          <div className="flex-1">{arr.frontend.map((data)=>(<p className=' hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 mx-2 px-2 text-sm'>{data}</p>))}</div>
        </div>
        <div className="flex h-fit w-full  gap-2">
          <div className="flex w-fit text-xl font-semibold ml-2 font-mono">Backend Frameworks:</div>
          <div className="flex-1">{arr.backend.map((data)=>(<p className=' hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 mx-2 px-2 text-sm'>{data}</p>))}</div>
        </div>
        <div className="flex h-fit w-full  gap-2">
          <div className="flex w-fit text-xl font-semibold ml-2 font-mono">Styling Libraries:</div>
          <div className="flex-1">{arr.styling.map((data)=>(<p className=' hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 mx-2 px-2 text-sm'>{data}</p>))}</div>
        </div>
        <div className="flex h-fit w-full  gap-2">
          <div className="flex w-fit text-xl font-semibold ml-2 font-mono">Data Operations:</div>
          <div className="flex-1">{arr.data.map((data)=>(<p className=' hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 mx-2 px-2 text-sm'>{data}</p>))}</div>
        </div>

      </div>
      <div className="flex w-5/12 mr-2 ">
        <img src={img} className='h-full w-full' alt="" />
      </div>
    </div> */}
    </>
  )
}

export default Skill