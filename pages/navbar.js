import React from 'react'
import Burger from "./Burger";
import logo from "../Images/LogoWhite.jpg";
import Link from "next/link";
import Image from "next/image"


export default function Navbar() {
  return (
    <div
    className="flex flex-row align-items-center bg-black p-6 justify-between fixed w-screen z-10"
    >
      
      <div className="lg:pl-32">
        <Link href={"/"}>
          <div className='flex self-center h-10 w-16 '>
            <Image src={logo} alt="logo" />
          </div>  
        </Link>
      </div>

      <div className="flex align-items-center xl:flex xl:flex-row lg:flex lg:flex-row lg:pr-32">
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
