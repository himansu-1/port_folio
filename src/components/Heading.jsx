import React from 'react'

function Heading(props) {
  return (
    <>
    <div className="my">
    <h1 className="text-center text-3xl font-bold my-3 box-border ">{props.heading}</h1>
      <hr className="h-0.5 mx-10 bg-slate-400 " />
      </div>
    </>
  )
}

export default Heading