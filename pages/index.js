import Head from "next/head";
import Link from "next/link";
import Image from "next/image";
import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLinkedin, faGithub } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import Logos from "./api/logos";
import PortfolioData from "./api/PortfolioData";

export default function Home() {
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  return (
    <div>
      <div className="background-color p-16 page-font text-white" id="home">
        {/* ________________ */}
        {/* Software Engineer */}
        {/* ________________ */}
        <div className="flex flex-col-reverse lg:flex-row pt-24 pb-10">
          <div className="lg:w-3/5 flex flex-col justify-center">
            <div className="text-5xl lg:text-6xl ">Software Engineer</div>
            <div className="text-xl lg:text-2xl py-6">
              <div>
                My name is Stephen and I am a New York based software engineer
                with a background in management and consulting. I enjoy the
                process of bringing ideas to reality.
              </div>
            </div>
            <button class="bg-blue-500 hover:bg-blue-700 font-bold py-2 px-4 rounded w-28 flex flex-row justify-between">
              <div>
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "white" }}
                  size="md"
                />
              </div>
              <div className="text-sm">Contact</div>
            </button>
          </div>
          <div className="lg:w-2/5 flex justify-center px-4 py-6">
            <Image src="/Wave.svg" width={250} height={300} />
          </div>
        </div>

        {/* ________________ */}
        {/* Projects */}
        {/* ________________ */}
        <div className="text-4xl">Projects</div>
        <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded overflow-hidden ">
          {PortfolioData.map((project, index) => (
            <div className="flex flex-col p-4 self-center">
              <img
                className="rounded-t-xl"
                src={project.image}
                layout="fill"
                objectFit="contain"
                alt={project.title}
              />
              <div class="p-6 bg-white rounded-b-xl">
                <div class="font-bold text-xl mb-2 justify-center">
                  {project.title}
                </div>
                <p class="text-gray-700 text-base">{project.description}</p>
                <div className="flex flex-row justify-between">
                  <button className="bg-black rounded-xl p-2">
                    Live Website
                  </button>
                  <button className="bg-black rounded-xl p-2">Github</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/*Tech Stack */}

        <div className="py-16">
          <div className="text-4xl py-4">Tech Stack</div>
          <div className="grid gap-4 grid-cols-3 md:flex md:flex-row justify-center">
            {Logos.map((logo, index) => (
              <div className="p-2">
                <Image
                  src={logo.image}
                  objectFit="cover"
                  height="60px"
                  width="60px"
                />
              </div>
            ))}
          </div>
        </div>

        {/*About Me */}

        <div className="py-16">
          <div className="text-4xl py-4">About Me</div>
          <div className="flex flex-col lg:flex-row justify-center">
            <div className="lg:w-2/5 flex justify-center py-8 lg:py-0">
              <Image src="/Wink.svg" height="250px" width="300px" />
            </div>
            <div className="lg:w-3/5 self-center p-2">
              <div className="text-3xl">A passionate coder</div>
              <div className="text-xl py-3">
              I am an inquisitive and diligent software engineer who has over
              six years of management and consulting experience. I have a
              passion for problem solving and learning. Consulting has taught me
              to live in a growth mindset where I strive to be better everyday.
              Working as a business analyst at Navitas Billing ignited my
              enthusiasm for coding and ultimately led me to pursue a career
              change.
              </div>
            </div>
          </div>
        </div>

        {/*Lets Chat */}

        <div className="py-8 px-6 flex flex-col lg:flex-row rounded bg-slate-600 m-4">
          <div className="lg:w-3/5 py-6">
          <div className="text-4xl py-4">Let's Chat!</div>
          <div className="text-xl">I am currently open to joining a new team as a ‘full-stack’ or ‘front-end’ engineer.</div>
          </div>
          <div className="flex justify-center lg:w-2/5">
            <button className="p-2 bg-blue-600 rounded self-center">Contact</button>
          </div>
        
        </div>

        {/*Footer */}

        <div className="py-16">
          <div className="flex flex-col md:flex-row justify-center md:justify-between">
            <div className="flex flex-row">
              {/*Linkedin */}
            <a
              href="https://www.linkedin.com/in/stephen-burnett/"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "light-blue" }}
            >
              <span className="pr-4 self-center">
                <FontAwesomeIcon
                  icon={faLinkedin}
                  style={{ color: "white" }}
                  size="2x"
                />
                </span>
                </a>
                {/*Mail */}
                <a
              href="mailto: Stephenburnett714@gmail.com.com"
              className="flex items-center"
              style={{ textDecoration: "none", color: "light-blue" }}
            >
              <span className="pr-4 self-center">
                <FontAwesomeIcon
                  icon={faEnvelope}
                  style={{ color: "white" }}
                  size="2x"
                />
              </span>
            </a>

            {/*Github */}

            <a
              href="https://github.com/stephenburnett714"
              className="flex items-center"
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: "none", color: "light-blue" }}
            >
              <span className="pr-4 self-center">
                <FontAwesomeIcon
                  icon={faGithub}
                  style={{ color: "white" }}
                  size="2x"
                />
              </span>
            </a>


            </div>
            <div>Stephen Burnett - Software Engineer</div>
          </div>
        </div>

        {/*Arrow Up */}

        <div>

        </div>

        {/* ___________________ */}
        {/* Work */}
        {/* ___________________ 
        <div className="px-12 lg:px-32 pt-24">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div className="text-4xl pb-4">Tech Stack</div>
              <div className="text-xl pb-4">
                My current Tech Stack includes Javascript, React, Express, SQL,
                PostgreSQL, HTML, CSS, Ruby, Rails and Sequelize. I enjoy
                front-end engineering. I am currently freelancing while looking
                for work.
              </div>

              <Link href="/work">
                <a className="text-blue-500">View Work</a>
              </Link>
            </div>
            <div className="flex justify-center md:justify-end pt-2">
              <div>
                <Image src={Development} alt="" />
              </div>
            </div>
          </div>
        </div>


        <div className="px-12 lg:px-32 pt-16 pb-32">
          <div className="md:grid md:grid-cols-2">
            <div className="flex flex-col justify-center content-center md:w-4/5">
              <div>
                <div className="text-4xl pb-4">The Coder</div>
                <div className="text-xl pb-4">
                  I am an inquisitive and diligent software engineer who has
                  over six years of consulting experience. I have a passion for
                  problem solving and learning. Consulting has taught me to live
                  in a growth mindset where I strive to be better everyday.
                  Working as a business analyst at Navitas Billing ignited my
                  enthusiasm for coding and ultimately led me to pursue a career
                  change.
                </div>
                <Link href="/about">
                  <a className="text-blue-500">More About Stephen</a>
                </Link>
              </div>
            </div>
            <div className="flex justify-center md:justify-end pt-2 ">
              <Image src={Research} alt="" />
            </div>
          </div>
        </div>
      */}
      </div>
    </div>
  );
}
