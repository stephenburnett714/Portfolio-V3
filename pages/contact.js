import Image from "next/image";


export default function Contact() {
  return (
    <div id="contact" className="py-8 px-6 flex flex-col lg:flex-row rounded bg-gray-800 m-4">
    <div className="lg:w-3/5">
      <div className="text-4xl py-4">Let's Chat!</div>
      <div className="text-xl">
        I am currently open to joining a new team as a ‘full-stack’ or
        ‘front-end’ engineer.
      </div>
    </div>
    <div className="flex self-center justify-end p-6 lg:p-0 lg:w-2/5">
      <a href="mailto: Stephenburnett714@gmail.com.com">
        <div>
          <Image src="/ContactButton.svg" height="48px" width="145px" />
        </div>
      </a>
    </div>
  </div>
  )
}
