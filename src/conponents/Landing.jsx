import React from "react";
import Socialsidebar from "./Socialsidebar";
import VoiceAssistant from "./VoiceAssistant";

function Landing() {
  return (
    <div className="  max-sm:w-full max-sm:items-start  w-[100%]     text-white flex flex-col items-center justify-center font-[Kanit] ">
      <div className="max-sm:w-[79%] max-sm:p-2 w-2/3 h-full mt-16 text-white ">
        <section className="">
          <h1 className="text-2xl font-semibold mb-5">Hi, My name is</h1>
          <h1 className="max-sm:text-[2rem] text-[3em] mb-10 ">
            Radheshyam Lodhi
          </h1>
        </section>
        <section className=" max-sm:w-full max-sm:text-sm  w-full text-xl font-semibold ">
          <p>
            Dedicated and results-oriented Full Stack Developer specializing in
            MERN stack development. Proficient in building dynamic and
            responsive web applications with a strong emphasis on backend
            development using React.Js Node.js and Express. Experienced in
            handling image uploads with Multer and ImageKit and creating
            engaging user interfaces with animations. Passionate about
            leveraging modern technologies to solve real-world problems and
            deliver high-quality solutions.
          </p>
        </section>
      </div>
      <VoiceAssistant />
    </div>
  );
}

export default Landing;
