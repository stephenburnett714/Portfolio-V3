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
        <Link to="home" spy={true} smooth={true} offset={-150} duration={500}>
          <div className='flex self-center h-10 w-16 '>
            <Image src="/Logo.svg" height="50px" width="50px" alt="logo" />
          </div>  
        </Link>
      </div>

      <div className="flex align-items-center hidden xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">


        <div>
          <Link to="projects" spy={true} smooth={true} offset={-150} duration={500}>
          <div className="text-gray-400 pr-20 white-hover cursor-pointer">Projects</div>
          </Link>
        </div>

        <div>
          <Link to="stack" spy={true} smooth={true} offset={-150} duration={500}>
          <div className="text-gray-400 pr-20 white-hover cursor-pointer">Tech Sack</div>
          </Link>
        </div>

        <div>
          <Link to="about" spy={true} smooth={true} offset={-150} duration={500}>
          <div className="text-gray-400 pr-20 white-hover cursor-pointer">About</div>
          </Link>
        </div>

        <div>
          <Link to="contact" spy={true} smooth={true} offset={-150} duration={500}>
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
