import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto px-4 flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0">
          <h2 className="text-2xl font-bold">Radheshyam Lodhi</h2>
          <p>Full Stack Developer</p>
        </div>
        <div className="flex flex-col md:flex-row items-center">
          <div className="flex space-x-4 mb-4 md:mb-0 gap-6">
            <Link
              target="_blank"
              to="https://www.linkedin.com/in/radheshyam-lodhi-227171199/"
              className="flex justify-center items-center gap-2"
            >
              <FaLinkedin className="text-3xl hover:scale-150 transition-all" />{" "}
            </Link>
            <Link
              target="_blank"
              to="https://github.com/lodhiradhe123"
              className="flex justify-center items-center gap-2"
            >
              <FaGithub className="text-3xl hover:scale-150 transition-all" />{" "}
            </Link>

            <Link
              target="_blank"
              to="mailto:radheshyamlodhi48@gmail.com"
              className="flex justify-center items-center gap-2"
            >
              <IoMdMail className="text-3xl hover:scale-150 transition-all" />{" "}
            </Link>

            <Link
              target="_blank"
              to="https://x.com/RadheLodhi17"
              className="flex justify-center items-center gap-2"
            >
              <FaTwitterSquare className="text-3xl hover:scale-150 transition-all" />{" "}
            </Link>

          </div>
          <div className="flex space-x-4">
           
          </div>
        </div>
      </div>
      <div className="text-center mt-4 text-gray-500">
        © 2024 Radheshyam Lodhi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
