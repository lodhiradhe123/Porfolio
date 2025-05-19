import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function Fullstack() {
  const scrollRef = useRef();
  const [hovering, setHovering] = useState(false);

  const FrontendData = [
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/inventoryms.png?updatedAt=1723308729172",
      name: "Recipe App",
      description:
        "This project was a great opportunity to dive deep into creating a robust and secure backend while ensuring a smooth and user-friendly frontend experience. The QR code functionality enhances efficiency, making inventory management more streamlined than ever",
      skills: ["React", "node", "css", "Contex  API"],
      live: "https://github.com/lodhiradhe123/inventory-management-system.git",
    },
  ];

  const duplicatedList = [...FrontendData];

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
      <h1 className="text-5xl pt-6 font-[Kanit]">Full stack Projects</h1>
      <section
        ref={scrollRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="h-[95%] bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center"
      >
        {duplicatedList.map((img, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: (i % FrontendData.length) * 0.05 }}
            className="max-sm:h-[100%] max-sm:w-full h-96 pages p-3 w-1/2 shrink-0 object-center object-center overflow-hidden flex flex-col justif-center items-center rounded-lg border border-zinc-600"
          >
            <section className="rounded-lg overflow-hidden">
              <img
                src={img.img}
                alt={img.name}
                className="w-auto object-cover rounded-lg"
              />
            </section>
            <section className="w-full">
              <div className="btn max-sm:h-22 w-full h-22 flex flex-wrap gap-1 p-2">
                {img.skills.map((skill, i) => (
                  <button
                    key={i}
                    className="px-3 py-0 text-sm text-white font-bold bg-zinc-500 rounded-lg"
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <p className="leading-none font-regular">{img.description}</p>
              <div className="livebtn w-full flex justify-between">
                {img.live && (
                  <Link target="_blank" to={img.live}>
                    <button className="text-xl font-[Kanit] border rounded px-3 py-[2px] mt-3">
                      Github
                    </button>
                  </Link>
                )}
              </div>
            </section>
          </motion.div>
        ))}
      </section>
    </div>
  );
}

export default Fullstack;
