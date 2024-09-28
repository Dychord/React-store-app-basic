import React from 'react'
import { MdOutlineLocalGroceryStore } from "react-icons/md";

function Navbar() {
  return (
    <>
    
      <nav className='w-full p-8 flex justify-between text-lg bg-gray-900'>
        <div className='flex gap-3 items-center text-2xl'>
          <h1>Product Store </h1>
          <MdOutlineLocalGroceryStore />
        </div>
       
        <div className='flex gap-5'>
          <button>Create</button>
          <button>Theme</button>
        </div>
      </nav>

    </>
  )
}

export default Navbar