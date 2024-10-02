import React from "react";
import { MdOutlineLocalGroceryStore } from "react-icons/md";
import { Link } from "react-router-dom";
import { CiSquarePlus } from "react-icons/ci";
import { MdLightMode } from "react-icons/md";
import {useColorMode} from '@chakra-ui/react'
import { MdOutlineLightMode } from "react-icons/md";

function Navbar() {
  const {colorMode, toggleColorMode} = useColorMode()
  return (
    <>
      <nav className={`{w-full p-8 flex justify-between text-lg `} >

        <Link className="flex gap-3 items-center text-2xl" to='/' ><h1>Product Store </h1><MdOutlineLocalGroceryStore /></Link>
        <div className="flex gap-5 items-center ">
          <Link to='/create'><CiSquarePlus className="text-3xl cursor-pointer hover:scale-105" /></Link>
          <button onClick={toggleColorMode} className="text-2xl cursor-pointer hover:scale-110">{colorMode === 'light' ?  <MdLightMode /> : <MdOutlineLightMode />}</button>
        </div>

      </nav>
    </>
  );
}

export default Navbar;
