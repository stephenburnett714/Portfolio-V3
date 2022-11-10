import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin, faGithub } from '@fortawesome/free-brands-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'

export default function Footer() {
  return (
    <div className="bg-black text-white py-16 flex flex-col">
      <div className="grid grid-cols-7">
        <div className="col-span-1 lg:col-span-2"></div>
        <div className="col-span-5 lg:col-span-3">
          <div className="grid-span-5 flex flex-col text-center">
            <div className="text-4xl lg:text-5xl pb-4">Want to work together?</div>
            <div className="pb-4">
              Contact me! Currently looking for new work opportunites. 
            </div>
          </div>
          <div className="flex flex-col text-center">
            <div className="flex justify-around content-center py-4 md:px-16">
            <a href="https://www.linkedin.com/in/stephen-burnett/" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faLinkedin} style={{ color: 'white' }} size="3x"/></a>
            <a href="mailto: Stephenburnett714@gmail.com.com"><FontAwesomeIcon icon={faEnvelope} style={{ color: 'white' }} size="3x"/></a>
            <a href="https://github.com/stephenburnett714" target="_blank" rel="noopener noreferrer"><FontAwesomeIcon icon={faGithub} style={{ color: 'white' }} size="3x"/></a>
            </div>
            <div>Software Engineer & Independent Consultant</div>
          </div>
        </div>
        <div className="col-span-1 lg:col-span-2"></div>
      </div>
    </div>
  )
}
