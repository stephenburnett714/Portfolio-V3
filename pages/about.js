import Footer from "./footer";
import React, { useEffect } from "react";
import Navbar from "./NavbarInverse";
import profile from "../Images/Profile.jpeg";
import Image from "next/image"

export default function about() {
  return (
    <div>
    <Navbar />
    {/* _______________ */}
    {/* Stephen Burnett */}
    {/* _______________ */}
    <div className="pt-24 pb-12 lg:pb-20 lg:grid lg:grid-cols-2 lg:py-32">
      <div className="flex content-center flex-col justify-center px-16 lg:px-24 py-0">
        <div className="text-4xl pb-4">About Me</div>
        <div className="pb-5 lg:pb-0">
          I am an inquisitive and diligent software engineer who has over six
          years of consulting experience. I have a passion for problem solving
          and learning. Consulting has taught me to live in a growth mindset
          where I strive to be better everyday. Working as a business analyst
          at Navitas Billing ignited my enthusiasm for coding and ultimately
          led me to pursue a career change.
          <br />
          <br />
          Graduate of General Assembly a Software Engineering Immerse program
          that included over 400 hours of professional training over 12 weeks.
          Utilized a hands-on approach to design and build full-stack web
          applications with full CRUD functionality through Javascript, React,
          Express, SQL, PostgreSQL, HTML, CSS, Ruby, Rails and Sequelize.
        </div>
      </div>
      <div className="px-16 lg:px-32 flex justify-center items-center lg:flex-none">
        <div>
          <Image className="rounded self-center" src={profile} alt="" />
        </div>
      </div>
    </div>
    
    <div className="flex justify-center">
      <div className="mb-16 call-color p-2 rounded text-white">Download Resume</div>
    </div>
    <Footer />
  </div>
  )
}
