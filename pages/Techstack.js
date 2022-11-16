import Image from "next/image"
import Logos from "./api/logos";

export default function Techstack() {
  return(
    <div id="stack" className="py-16">
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
  )
}
