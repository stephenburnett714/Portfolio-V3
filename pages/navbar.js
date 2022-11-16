import React from 'react'
import Burger from "./Burger";
import Image from "next/image"
import {Link} from "react-scroll"


export default function Navbar() {
  return (
    <div
    className="flex flex-row align-items-center background-color p-6 justify-between fixed w-screen z-10 " id="navbar"
    >
      
      <div className="lg:pl-32">
        <Link to="home" spy={true} smooth={true} offset={50} duration={500}>
          <div className='flex self-center h-10 w-16 '>
            <Image src="/Logo.svg" height="50px" width="50px" alt="logo" />
          </div>  
        </Link>
      </div>

      <div className="flex align-items-center hidden xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">
        <div>
        <Link  href={"/"}>
            <div className="text-gray-400 pr-20 white-hover cursor-pointer">Home</div>
          </Link>
        </div>

        <div>
          <Link href={"/about"}>
          <div className="text-gray-400 pr-20 white-hover cursor-pointer">About</div>
          </Link>
        </div>

        <div>
          <Link href={"/work"}>
          <div className="text-gray-400 pr-20 white-hover cursor-pointer">Work</div>
          </Link>
        </div>

        <div>
          <Link href={"/contact"}>
          <div className="text-gray-400 pr-20 white-hover cursor-pointer">Contact</div>
          </Link>
        </div>
      </div>
      <div className="lg:hidden flex align-items-center">
      <Burger />
      </div>
    </div>
  )
}
