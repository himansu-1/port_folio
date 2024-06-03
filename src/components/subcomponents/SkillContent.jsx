import React from 'react'

function SkillContent({item}) {
  return (
    <>
    <a target='_blank' href={item.link}>
    <article 
    className="group w-full md:w-[25vw] transition-all hover:translate-y-[-40px] bg-white rounded-lg cursor-pointer -z-0 "
    >
    <div className="w-full  overflow-hidden rounded-t-lg">
    {/* <div className="w-full h-[15vw] overflow-hidden rounded-t-lg"> */}
      <img className="object-cover w-full md:w-[26vw] max-h-[140px] h-full rounded-t-lg group-hover:scale-[1.2] group-hover:saturate-[4] bg-slate-200" src={item.img} alt="title image"/>

    </div>
    <div className="flex flex-col gap-1 p-4 drop-shadow-xl border-x-2 bg-slate-100 rounded-b-xl"
    style={{height:"38vh"}}>
      <p className="text-2xl font-bold text-center">{item.title}</p>

      <div className="flex items-center">
        <p className="text-md font-semibold text-center">{item.sub_title}</p>
      </div>
      <hr className='border'/>
      {/* <div className="flex-row items-end content-end end-1 justify-end align-text-bottom"> */}
      <p className='space-x-2 w-full'>Technology Stack:
      </p>
      <p className='mx-0 px-0'>
      {
        item.skill.map((data, index)=>(
          <span key={index} className=' hover:scale-125 hover:bg-orange-400 cursor-pointer inline-block bg-orange-300 text-slate-800 rounded-full m-1 mx- px-2 text-sm' alt={index}>{data}</span>
        ))
      }</p>
    </div>
  </article>
  </a>
    </>
  )
}
// transition duration-500 hover:scale-125
export default SkillContent