import React from "react";
import Socialsidebar from "./Socialsidebar";

function Landing() {
  return (
    <div className="  max-sm:w-full max-sm:items-start w-[100%]   text-white flex flex-col items-center justify-center font-[Kanit] ">
      <div className="max-sm:w-[79%] max-sm:p-2 w-2/3 h-full mt-32 ">
        <section className="">
        <h1 className="text-2xl font-semibold mb-5">Hi, My name is</h1>
        <h1 className="max-sm:text-[2rem] text-[3em] mb-10 ">Radheshyam Lodhi</h1>
        </section>
        <section className=" max-sm:w-full  w-1/2 text-xl font-semibold ">
          <p>
            Dedicated MERN Stack developer focused on creating visually
            captivating and user-centered digital solutions with precision
            coding and design excellence.
          </p>
        </section>
      </div>

    </div>
  );
}

export default Landing;
