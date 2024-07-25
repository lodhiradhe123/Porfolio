import React from "react";

function LandingPages() {
    const landingPageUrl = [
        "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingoage-10.png?updatedAt=1721557728623",
        // "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-9.png?updatedAt=1721556080960",
        // "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-3.png?updatedAt=1721556081239",
        // "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-5.png?updatedAt=1721556080690",
        // "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingoage-7.png?updatedAt=1721556080029",
        // "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-4.png?updatedAt=1721556078161",
        "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-1.png?updatedAt=1721556076333",
        // "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-2.png?updatedAt=1721556075965",
        "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingPage-6.png?updatedAt=1721556075533",
        "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-8.png?updatedAt=1721556074328",
        "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingoage-10.png?updatedAt=1721557728623"
      ];
  return (
    <div>
      {" "}
      <h1 className="text-5xl py-6 font-[Kanit]">Landing pages</h1>
      <section className=" h-96 bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center">
        {landingPageUrl.map((img,i)=>(
            <div className="pages w-1/2 h-full shrink-0 object-center object-center overflow-hidden flex items-center rounded-lg ">
            <section className="  rounded-lg overflow-hidden">
              <img
                src={img}
                alt=""
                className="w-auto object-cover rounded-lg"
              />
            </section>
          </div>
        ))}
       
      </section>
    </div>
  );
}

export default LandingPages;
