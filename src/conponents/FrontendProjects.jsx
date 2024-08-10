import React from "react";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";

function FrontendProjects() {
  const FrontendData = [
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/inventoryms.png?updatedAt=1723308729172",
      name: "Recipe App",
      description:
        "This project was a great opportunity to dive deep into creating a robust and secure backend while ensuring a smooth and user-friendly frontend experience. The QR code functionality enhances efficiency, making inventory management more streamlined than ever",
      skills: ["React", "node", "css", "Contex  API"],
      live: "https://github.com/lodhiradhe123/inventory-management-system.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/frontendProject3.png?updatedAt=1721566782903",
      name: "Recipe App",
      description:
        "The Recipe React Application is a user-friendly and interactive platform designed to help users discover, share, and manage their favorite recipes. Built with React, the application offers a seamless user experience with dynamic components and state management. Users can search for recipes, view detailed instructions, and save their favorites for easy access.",
      skills: ["React", "Tailwind", "css", "Contex  API"],
      live: "https://github.com/lodhiradhe123/Recipe-React-app.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/FrontendProjects.png?updatedAt=1721562077481",
      name: "Portfolio",
      description:
        "I've crafted my portfolio to exhibit diverse projects and skills, offering insight into my capabilities. Learn more about me through this platform, complete with links to my socials. Explore my journey and discover how I bring creativity and expertise to each.",
      skills: ["React", "Tailwind", "css"],
      live: "https://github.com/lodhiradhe123/Porfolio.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/FrontendProjects2.png?updatedAt=1721565905476",
      name: "Work",
      description:
        "My project, developed using React, is a dynamic and interactive web application that leverages the power of React-Motion for smooth and engaging animations. This project showcases a modern UI with fluid transitions and animated components, enhancing the user experience.",
      skills: ["React", "Tailwind", "css", "react-motion"],
      live: "https://github.com/lodhiradhe123/reactfirst.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/frontend055.jpg?updatedAt=1722413159134",
      name: "my-selling-website",
      description:
        "My project, developed using React, is a dynamic and interactive web application that leverages the power of React-Motion for smooth and engaging animations. This project showcases a modern UI with fluid transitions and animated components, enhancing the user experience.",
      skills: ["React", "Tailwind", "css", "react-motion"],
      live: "https://github.com/lodhiradhe123/reactfirst.git",
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="text-5xl pt-6 font-[Kanit]">Frontend Projects</h1>
      <section className=" h-[95%] bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center">
        {FrontendData.map((img, i) => (
          <div key={i} className="max-sm:h-[100%] max-sm:w-full h-96 pages p-3 w-1/2  shrink-0 object-center object-center overflow-hidden flex flex-col justif-center items-center rounded-lg border border-zinc-600 ">
            <section className="  rounded-lg overflow-hidden">
              <img
                src={img.img}
                alt=""
                className="w-auto object-cover rounded-lg"
              />
            </section>
            <section className="w-full  ">
              <div className="btn max-sm:h-22 w-full h-22   flex flex-wrap gap-1 p-2 ">
                {img.skills.map((skill,i) => (
                  <button key={i} className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                    {skill}
                  </button>
                ))}
              </div>
              <p className="leading-none font-regular ">{img.description}</p>
              <div className="livebtn w-full flex justify-between">
                <Link target="_blank" to={img.live}>
                  <button className="text-xl font-[Kanit] border rounded px-3 py-[2px] mt-3">
                    Github
                  </button>
                </Link>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default FrontendProjects;
