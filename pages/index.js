import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";


import PortfolioData from "./api/PortfolioData";

import Contact from './Contact'
import Engineer from './Engineer'
import Projects from './Projects'
import About from "./About";
import Techstack from "./Techstack";
import Footer from "./Footer";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="background-color p-16 page-font text-white">
        <Engineer />
        <Projects/>
        <Techstack />
        <About />
        <Contact />
        <Footer/>


      </div>
    </div>
  );
}
