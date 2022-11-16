import Image from "next/image";

export default function Engineer() {
  return (
    <div id="home" className="flex flex-col-reverse lg:flex-row pt-24 pb-10">
      <div className="lg:w-3/5 flex flex-col justify-center">
        <div className="text-5xl lg:text-6xl ">Software Engineer</div>
        <div className="text-xl lg:text-2xl py-6">
          <div>
            My name is Stephen and I am a New York based software engineer with
            a background in management and consulting. I enjoy the process of
            bringing ideas to reality.
          </div>
        </div>
        <a href="mailto: Stephenburnett714@gmail.com.com">
          <div>
            <Image src="/ContactButton.svg" height="48px" width="145px" />
          </div>
        </a>
      </div>
      <div className="lg:w-2/5 flex justify-center lg:px-4 lg:py-6">
        <Image src="/Wave.svg" width={250} height={300} />
      </div>
    </div>
  );
}
