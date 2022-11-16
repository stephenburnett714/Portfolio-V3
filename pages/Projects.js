import Image from "next/image"
import PortfolioData from "./api/Portfoliodata"

export default function projects() {

  return (
    <div>
        <div id="projects" className="text-4xl">Projects</div>
        <div class="flex flex-col md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 rounded overflow-hidden ">
          {PortfolioData.map((project, index) => (
            <div className="flex flex-col py-4 md:p-4 ">
              <img
                className="rounded-t-xl"
                src={project.image}
                layout="fill"
                objectFit="contain"
                alt={project.title}
              />
              <div class="p-6 bg-white rounded-b-xl">
                <div class="font-bold text-xl mb-2 justify-center text-black">
                  {project.title}
                </div>
                <p className="text-gray-700 text-sm h-72">
                  {project.description}
                </p>
                <div className="flex flex-row justify-between">
                  <a  href={project.liveSite}
                target="_blank"
                rel="noopener noreferrer">
                <Image src='/LiveSiteButton.svg' height="48" width="185" />
                </a>
                <a  href={project.gitHub}
                target="_blank"
                rel="noopener noreferrer">
                <Image src='/GithubButton.svg' height="48" width="185"/>
                </a>
                </div>
              </div>
            </div>
          ))}
        </div>
        </div>
  )
}
