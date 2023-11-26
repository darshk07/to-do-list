import React from 'react'

type Props = {}

function Navbar({ }: Props) {
  return (
    <div className="navbar flex items-center bg-slate-200 
    row-start-8 row-span-1 h-full
    justify-center
    lg:row-start-1 lg:row-span-full lg:h-full">
      <h1>To-do</h1>
    </div>
  )
}

export default Navbar