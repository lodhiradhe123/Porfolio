import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

function BackendProjects() {
  const scrollRef = useRef();
  const [hovering, setHovering] = useState(false);

  const FrontendData = [
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend444.jpg?updatedAt=1721571602711",
      name: "The Bag-Showroom",
      description:
        "I created an e-commerce website using Node.js, Express, Passport, Session, MongoDB Atlas, Nodemailer, and Razorpay for payment processing...",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "Multer",
        "Passport",
        "nodemailer",
        "express",
        "mongodb",
      ],
      live: "https://the-bag-showroom.onrender.com/",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend11.jpg?updatedAt=1721569869593",
      name: "Blog website",
      description:
        "This website allows users to create, read, update, and delete blog posts seamlessly. MongoDB ensures efficient data storage and retrieval...",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "imagekit",
        "passport",
        "nodemailer",
        "express",
        "mongodb",
      ],
      live: "https://blog-application-pere.onrender.com",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend222.jpg?updatedAt=1721570808449",
      name: "New Web",
      description:
        "This project demonstrates a comprehensive full-stack application with essential user authentication and account management features...",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "multer",
        "JWT",
        "nodemailer",
        "express",
        "mongodb",
      ],
      live: "https://new-web-hvef.onrender.com/",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend333.jpg?updatedAt=1721571468495",
      name: "Online Task",
      description:
        "This project showcases a full-featured e-commerce platform with robust security, seamless user experience, and reliable payment solutions...",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "Multer",
        "Passport",
        "nodemailer",
        "express",
        "mongodb",
      ],
      live: "https://the-bag-showroom.onrender.com/",
      github: "https://github.com/lodhiradhe123/new-web.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/Backend5.png?updatedAt=1721572448472",
      name: "Social Media",
      description:
        "I developed a social media platform using Node.js, Express, Passport, Session, MongoDB Atlas, and Nodemailer...",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "Multer",
        "Passport",
        "nodemailer",
        "express",
        "mongodb",
      ],
      live: "",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend666.jpg?updatedAt=1721572918002",
      name: "Social Media MERN",
      description:
        "This application allows users to create, delete, update, and like or dislike posts. Node.js and Express serve as the backend framework...",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "Multer",
        "Passport",
        "nodemailer",
        "express",
        "mongodb",
      ],
      live: "https://github.com/lodhiradhe123/socialmedia-mern09.git",
      github: "https://github.com/lodhiradhe123/socialmedia-mern09.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend777.jpg?updatedAt=1721573408223",
      name: "Book-Store",
      description: "Book store application",
      skills: ["Node.js", "Tailwind", "ejs", "express", "mongodb"],
      live: "",
      github: "https://github.com/lodhiradhe123/Social-Media-0.2.git",
    },
  ];

  const duplicatedList = [...FrontendData, ...FrontendData];

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
      <h1 className="text-5xl pt-6 font-[Kanit]">Backend Projects</h1>
      <section
        ref={scrollRef}
        onMouseEnter={() => setHovering(true)}
        onMouseLeave={() => setHovering(false)}
        className="h-[100%] bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center"
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
                {img.skills.map((skill, j) => (
                  <button
                    key={j}
                    className="px-3 py-0 text-sm text-white font-bold bg-zinc-500 rounded-lg"
                  >
                    {skill}
                  </button>
                ))}
              </div>
              <p className="leading-none font-regular">{img.description}</p>
              <div className="livebtn w-full flex justify-between mt-2">
                {img.live && (
                  <Link target="_blank" to={img.live}>
                    <button className="text-xl font-[Kanit] border rounded px-3 py-[2px] mt-3">
                      Live
                    </button>
                  </Link>
                )}
                {img.github && (
                  <Link target="_blank" to={img.github}>
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

export default BackendProjects;
