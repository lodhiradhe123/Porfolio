import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { IoLogoCss3 } from "react-icons/io";
import { TbBrandJavascript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { TbBrandRedux } from "react-icons/tb";
import { FaNodeJs } from "react-icons/fa";
import { SiExpress } from "react-icons/si";
import { FaBootstrap } from "react-icons/fa";
import { SiPostman } from "react-icons/si";
import { DiMongodb } from "react-icons/di";
import { VscVscode } from "react-icons/vsc";
import { FaGitAlt } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
function About() {
  return (
    <div  className="hide-scrollbar min-h-screen bg-black text-white overflow-hidden ">
      <section className="max-sm:w-[90%] max-sm:m-3 w-1/2 ml-20 mt-32">
        <p className= "max-sm:text-sm max-sm:pt-10 para text-2xl font-semibold text-zinc-400">
          I'm <span className="max-sm:text-[16px] text-zinc-100">Radheshyam Lodhi</span>, comleted my b.tech (computer science) and
          student of MERN Stack developer passionate about creating visually
          compelling digital solutions. With problem-solving skills and a love
          for art and functionality, I weave intricate code structures for
          seamless user experiences. Excited for new opportunities, I'm ready to
          collaborate on innovative projects.
        </p>
      </section>
      <section className="max-sm:w-full max-sm:ml-2 max-sm:mt-10 mt-20 ml-20">
        <h1 className="max-sm:text-4xl text-6xl font-semibold tracking-tight   ">
          Development Skills :
        </h1>
        <div className="max-sm:mt-2 max-sm:flex-wrap max-sm:mt-6 max-sm:gap-0 flex gap-5 flex-wrap justify-start mt-12">
          <button className="max-sm:w-28 max-sm:m-5 max-sm:shrink-0 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <FaHtml5 /> <h1>html</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <IoLogoCss3 /> <h1>css</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <TbBrandJavascript /> <h1>js</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <FaReact /> <h1>react</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <TbBrandRedux /> <h1>redux</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 min-w-48">
            <FaNodeJs /> <h1>nodejs</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 min-w-48">
            <SiExpress /> <h1>express</h1>
          </button>
          <button className="max-sm:w-28 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 min-w-48">
            <FaBootstrap /> <h1>Bootstrap</h1>
          </button>
        </div>
      </section>
      <section className="max-sm:w-full max-sm:ml-2 max-sm:mt-10 mt-20 ml-20">
        <h1 className="max-sm:text-3xl text-6xl font-semibold tracking-tight   ">
          Tools and Technologies :
        </h1>
        <div className="max-sm:mt-2 max-sm:flex-wrap max-sm:mt-6 max-sm:gap-0 flex gap-3 flex-wrap justify-start mt-12">
          <button className="max-sm:w-38 max-sm:m-5 text-4xl text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <SiPostman /> <h1>postman</h1>
          </button>
          <button className="max-sm:w-38 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <DiMongodb /> <h1>Mongodb</h1>
          </button>
          <button className="max-sm:w-38 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <VscVscode /> <h1>vscode</h1>
          </button>
          <button className="max-sm:w-38 max-sm:m-5 text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <FaGitAlt /> <h1>git</h1>
          </button>
        </div>
      </section>
      <section className="max-sm:w-full max-sm:ml-2 max-sm:mt-10  mt-20 ml-20">
        <h1 className="max-sm:text-3xl  text-6xl font-semibold tracking-tight   ">
          Languages and Other skills :
        </h1>
        <div className="max-sm:mt-2 flex gap-5 flex-wrap justify-start mt-12">
          <button className="text-4xl capitalize border-2 border-zinc-500 p-4 flex flex-col justify-center items-center mt-5 w-48">
            <IoLogoJavascript /> <h1>Javascript</h1>
          </button>
        </div>
      </section>
      <section className="max-sm:w-full max-sm:ml-0 max-sm:mt-10 mt-20 ml-20">
        <h1 className="max-sm:text-3xl text-6xl font-semibold tracking-tight   ">
          Git Status :
        </h1>
        <div className=" max-sm:mt-2 w-full mt-10 p-5 overflow-hidden ">
          <img
            src="https://ik.imagekit.io/vtd0qp9vb/Screenshot%202024-07-17%20232846.png?updatedAt=1721239256108"
            alt=""
            className="rounded-lg "
          />
        </div>
      </section>
    </div>
  );
}

export default About;
