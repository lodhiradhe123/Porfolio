import React from "react";
import { MdDescription } from "react-icons/md";

function FrontendProjects() {
  const FrontendData = [
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/FrontendProjects.png?updatedAt=1721562077481",
      name: "Portfolio",
      description:"I've crafted my portfolio to exhibit diverse projects and skills, offering insight into my capabilities. Learn more about me through this platform, complete with links to my socials. Explore my journey and discover how I bring creativity and expertise to each.",
      skills:["React","Tailwind","css"],
      live:"Live",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/FrontendProjects2.png?updatedAt=1721565905476",
      name: "Portfolio",
      description:"My project, developed using React, is a dynamic and interactive web application that leverages the power of React-Motion for smooth and engaging animations. This project showcases a modern UI with fluid transitions and animated components, enhancing the user experience.",
      skills:["React","Tailwind","css"],
      live:"Live",
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="text-5xl pt-6 font-[foldit]">Frontend Projects</h1>
      <section className=" h-[95%] bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center">
        {FrontendData.map((img, i) => (
          <div className="max-sm:h-[100%] max-sm:w-full h-96 pages p-3 w-1/2  shrink-0 object-center object-center overflow-hidden flex flex-col justif-center items-center rounded-lg border border-zinc-600 ">
            <section className="  rounded-lg overflow-hidden">
              <img
                src={img.img}
                alt=""
                className="w-auto object-cover rounded-lg"
              />
            </section>
            <section className="w-full  ">
                
              <div className="btn max-sm:h-22 w-full h-22   flex flex-wrap gap-1 p-2 ">
              {img.skills.map((skill) =>(
                <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                {skill}
              </button>
                    
                ) )}
                
                
              </div>
              <p className="leading-none font-semibold ">
               {img.description}
              </p>
              <div className="livebtn w-full flex justify-between">
                <button className="text-xl font-[foldit] border rounded px-3 py-[2px] mt-3">
                 {img.live}
                </button>
               
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FrontendProjects;
