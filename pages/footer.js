import React from 'react'
import {Link} from "react-scroll"
import Image from "next/image"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope, faCircleChevronUp } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div>
        <div className="pt-16 pb-8">
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
            <div className="text-xl">Stephen Burnett - Software Engineer</div>
          </div>
        </div>

        {/*Arrow Up */}

        <div className="flex justify-end">
        <Link to="home" spy={true} smooth={true} offset={-150} duration={500}>
          <Image src="/upButton.svg" height="75px" width="75px"></Image>
            {/* <FontAwesomeIcon
              icon={faCircleChevronUp}
              size="2x"
              style={{ color: "#4b4efc" }}
            /> */}
          </Link>
        </div>
    </div>
  )
}
