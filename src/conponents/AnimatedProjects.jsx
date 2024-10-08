
function AnimatedProjects() {
  const landingPageUrl = [
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/frontend06.jpg?updatedAt=1722413159165",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/animation2.png?updatedAt=1721559437638",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/animation1.png?updatedAt=1721559417213",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/Frontend055.jpg.png?updatedAt=1722111622358",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/Frontend055.jpg.png?updatedAt=1722111622358",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/animatedproject0.jpg?updatedAt=1721572175566",
  ];
  return (
    <div>
      {" "}
      <h1 className="text-5xl py-6 font-[Kanit]">Animated Projects</h1>
      <section className=" h-[85%] bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center">
        {landingPageUrl.map((img, i) => (
          <div key={i} className="max-sm:h-[100%] max-sm:w-full h-96 pages p-3 w-1/2  shrink-0 object-center object-center overflow-hidden flex flex-col justif-center items-center rounded-lg border border-zinc-600 ">
            <section className="  rounded-lg overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-auto object-cover rounded-lg"
              />
            </section>
            <section className="w-full  ">
              <div className="btn max-sm:h-22 w-full h-22   flex flex-wrap gap-1 p-2 ">
                <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                  html
                </button>
                <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                  css
                </button>
                <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                  Gsap
                </button>
                <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                  Locomotivejs
                </button>
                <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                  Javascript
                </button>
              </div>
              <p className="leading-none font-regular ">
                Developed with a focus on creating captivating animations and a
                visually appealing user interface. Utilized skills in animation
                design, UI/UX design, and front-end development to craft an
                engaging user experienc
              </p>
              <div className="livebtn w-full flex justify-between">
                <button className="text-xl font-[foldit] border rounded px-3 py-[2px] mt-3">
                  Live
                </button>
                <button className="text-xl font-[foldit]  rounded px-3 py-[2px] mt-3">
                  Github
                </button>
              </div>
            </section>
          </div>
        ))}
      </section>
    </div>
  );
}

export default AnimatedProjects;
