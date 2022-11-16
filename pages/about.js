import Image from "next/image"

export default function About() {
  return (
    <div id="about" className="py-16">
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
          passion for problem solving and learning. Consulting has taught
          me to live in a growth mindset where I strive to be better
          everyday. Working as a business analyst at Navitas Billing
          ignited my enthusiasm for coding and ultimately led me to pursue
          a career change.
        </div>
      </div>
    </div>
  </div>
  )
}
