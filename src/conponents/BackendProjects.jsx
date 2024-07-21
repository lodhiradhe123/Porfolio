import React from "react";
import { MdDescription } from "react-icons/md";
import { Link } from "react-router-dom";

function BackendProjects() {
  const FrontendData = [
    {
        img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend444.jpg?updatedAt=1721571602711",
        name: "The Bag-Showroom",
        description:
          " I created an e-commerce website using Node.js, Express, Passport, Session, MongoDB Atlas, Nodemailer, and Razorpay for payment processing. Node.js and Express provide a powerful backend framework, ensuring efficient handling of routing and middleware. User authentication is managed using Passport, with sessions maintained for a seamless shopping experience.",
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
        "This website allows users to create, read, update, and delete blog posts seamlessly. With MongoDB, we ensure efficient data storage and retrieval, while EJS provides a powerful templating engine for rendering HTML dynamically. Express serves as the robust framework that handles routing and middleware. To enhance user interaction, Nodemailer is integrated for sending automated email notifications.",
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
      name: "new web",
      description:
        " To enhance user experience, Nodemailer is integrated to handle email notifications for account verification and password resets. This project demonstrates a comprehensive full-stack application with essential user authentication and account management features, ensuring both functionality and security.",
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
      name: "online task",
      description:
        " MongoDB Atlas ensures robust and scalable data storage. Nodemailer handles email notifications for order confirmations and account-related updates. For secure and efficient payment processing, Razorpay is integrated, enabling users to complete transactions effortlessly. This project showcases a full-featured e-commerce platform with robust security, seamless user experience, and reliable payment solutions.",
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
      github:"https://github.com/lodhiradhe123/new-web.git",
    },
    {
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/Backend5.png?updatedAt=1721572448472",
      name: "Social media",
      description:
        "I developed a social media platform using Node.js, Express, Passport, Session, MongoDB Atlas, and Nodemailer. This application allows users to create, delete, update, and like or dislike posts. Node.js and Express serve as the backend framework, efficiently handling routing and middleware. User authentication and session management are powered by Passport, ensuring secure and seamless access.",
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
      name: "Social media",
      description:
        "I developed a social media platform using Node.js, Express, Passport, Session, MongoDB Atlas, and Nodemailer. This application allows users to create, delete, update, and like or dislike posts. Node.js and Express serve as the backend framework, efficiently handling routing and middleware. .",
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
      img: "https://ik.imagekit.io/vtd0qp9vb/PortfolioData/backend777.jpg?updatedAt=1721573408223",
      name: "Book-Store",
      description:
        "Book store application ",
      skills: [
        "Node.js",
        "Tailwind",
        "ejs",
        "express",
        "mongodb",
      ],
      live: "",
    },
  ];
  return (
    <div>
      {" "}
      <h1 className="text-5xl pt-6 font-[Kanit]">Backend Projects</h1>
      <section className=" h-[100%] bg-transparent flex overflow-auto p-5 gap-4 hide-scrollbar items-center">
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
                {img.skills.map((skill) => (
                  <button className="px-3 py-0  text-sm text-white font-bold bg-zinc-500 rounded-lg">
                    {skill}
                  </button>
                ))}
              </div>
              <p className="leading-none font-semibold ">{img.description}</p>
              <div className="livebtn w-full flex justify-between">
                <Link target="_blank" to={img.live}>
                  <button className="text-xl font-[Kanit] border rounded px-3 py-[2px] mt-3">
                    <h1>Live</h1>
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

export default BackendProjects;
