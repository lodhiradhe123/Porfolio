import LandingPages from "./LandingPages";
import AnimatedProjects from "./AnimatedProjects";
import FrontendProjects from "./FrontendProjects";
import BackendProjects from "./BackendProjects";
import Fullstack from "./Fullstack";

function Projects() {
  return (
    <main className="bg-black ">
      <div className="max-w-screen-lg m-auto  font-[Kanit] text-white">
        <Fullstack/>
        <BackendProjects />
        <FrontendProjects />
        <AnimatedProjects />
        <LandingPages />
      </div>
    </main>
  );
}

export default Projects;
