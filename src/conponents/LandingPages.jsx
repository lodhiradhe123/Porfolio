import React, { useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";

function LandingPages() {
  const scrollRef = useRef();
  const [hovering, setHovering] = useState(false);

  const landingPageUrl = [
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingoage-10.png?updatedAt=1721557728623",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-9.png?updatedAt=1721556080960",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-3.png?updatedAt=1721556081239",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-5.png?updatedAt=1721556080690",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingoage-7.png?updatedAt=1721556080029",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-4.png?updatedAt=1721556078161",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-1.png?updatedAt=1721556076333",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-2.png?updatedAt=1721556075965",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingPage-6.png?updatedAt=1721556075533",
    "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/landingpage-8.png?updatedAt=1721556074328",
  ];

  const imageList = [...landingPageUrl, ...landingPageUrl]; // duplicate for infinite loop

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) return;

    let interval;

    if (hovering) {
      interval = setInterval(() => {
        container.scrollLeft += 1;
        if (container.scrollLeft >= container.scrollWidth / 2) {
          container.scrollLeft = 0;
        }
      }, 20);
    }

    return () => clearInterval(interval);
  }, [hovering]);

  return (
    <div>
      <h1 className="text-5xl py-6 font-[Kanit]">Landing pages</h1>
      <section
        ref={scrollRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="h-96 bg-transparent flex overflow-x-auto p-5 gap-4 hide-scrollbar items-center scroll-smooth"
      >
        {imageList.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % landingPageUrl.length) * 0.05 }}
            className="w-1/2 h-full shrink-0 flex items-center rounded-lg overflow-hidden"
          >
            <section className="rounded-lg overflow-hidden">
              <img
                src={img}
                alt={`Landing Page ${i + 1}`}
                className="w-auto h-full object-cover rounded-lg"
              />
            </section>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default LandingPages;
