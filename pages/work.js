import React, {useEffect} from 'react'
import Image from "next/image"
import PortfolioData from "./api/Portfoliodata"

export default function work() {
    useEffect(() => {
        window.scrollTo(0, 0);
      });  
  return (

    <div className="md:pt-32 lg:px-24 pt-24 px-3 pb-5 ">
      <div className="text-4xl px-4">Applications</div>
      <div className="px-4">Examples of recent projects that I've worked on.</div>
      <div className="grid grid-cols-1 p-4">
        {PortfolioData.map((project, index) => (
          <div>
            <div className="flex flex-col-reverse lg:flex-row-reverse shadow-lg p-4 my-4 rounded-lg">
              <div className="self-center px-4">
                <div className="text-3xl lg:text-4xl pb-2">{project.title}</div>
                <div className="pb-3 text-sm lg:text-base">{project.description}</div>
                <div className="flex justify-around pt-2">
                  <button className="larger-text rounded-full bg-black px-3 text-lg font-bold">
                    <a
                      href={project.liveSite}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white larger-text"
                    >
                      Live Site
                    </a>
                  </button>
                  <button className="larger-text rounded-full bg-black px-3 text-lg font-bold">
                    <a
                      href={project.gitHub}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-white larger-text"
                    >
                      Github
                    </a>
                  </button>
                </div>
              </div>
              <div className="flex justify-center lg:self-center lg:flex-none pb-4 lg:pb-0">
                <div className="image-height">
                  <Image
                    className="w-auto rounded-lg lg:object-fill"
                    src={project.image}
                    width="500px"
                    height="300px"
                    alt=""
                  />
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}
