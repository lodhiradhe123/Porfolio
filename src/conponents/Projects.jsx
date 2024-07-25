import React from "react";
import LandingPages from "./LandingPages";
import AnimatedProjects from "./AnimatedProjects";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";

function Projects() {
  return (
    <main className="bg-pink-100 min-screen">
      <div className="max-w-screen-lg m-auto  font-[Kanit] text-black">
        <BackendProjects />
        <FrontendProjects />
        <AnimatedProjects />
        <LandingPages />
      </div>
    </main>
  );
}

export default Projects;
