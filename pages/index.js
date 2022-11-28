import Head from "next/head";
import Contact from './Contact'
import Engineer from './Engineer'
import Projects from './Projects'
import About from "./About";
import Techstack from "./Techstack";
import Footer from "./Footer";

export default function Home() {
  return (
    <div>
      <Head>
        <title>Stephen Burnett</title>
        <meta name="description" content="Stephen Burnett Portfolio website." />
      </Head>
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
