import React from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaTwitterSquare } from "react-icons/fa";
import { IoMdMail } from "react-icons/io";

function Socialsidebar() {
  return (
    <div class="fixed   text-white max-sm:w-12  w-32 h-96 flex flex-col top-40 right-0 gap-8  justify-center ">
      <Link
        target="_blank"
        to="https://github.com/lodhiradhe123"
        className="flex justify-center items-center gap-2"
      >
        <FaGithub className="text-3xl hover:scale-150 transition-all" />{" "}
        <div className="w-12 h-[5%] bg-white"></div>
      </Link>
      <Link
        target="_blank"
        to="https://www.linkedin.com/in/radheshyam-lodhi-227171199/"
        className="flex justify-center items-center gap-2"
      >
        <FaLinkedin className="text-3xl hover:scale-150 transition-all" />{" "}
        <div className="w-12 h-[5%] bg-white"></div>
      </Link>
      <Link
        target="_blank"
        to="https://x.com/RadheLodhi17"
        className="flex justify-center items-center gap-2"
      >
        <FaTwitterSquare className="text-3xl hover:scale-150 transition-all" />{" "}
        <div className="w-12 h-[5%] bg-white"></div>
      </Link>
      <Link
        target="_blank"
        to="mailto:radheshyamlodhi48@gmail.com"
        className="flex justify-center items-center gap-2"
      >
        <IoMdMail className="text-3xl hover:scale-150 transition-all" />{" "}
        <div className="w-12 h-[5%] bg-white"></div>
      </Link>
    </div>
  );
}

export default Socialsidebar;
