import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className=" max-sm:w-full max-sm:px-5 max-w-screen-lg py-2 m-auto h-16 bg-transparent flex justify-between px-10 text-white  border-b border-zinc-500">
        <img
          src="https://ik.imagekit.io/vtd0qp9vb/PortfolioData/android-chrome-192x192.png?updatedAt=1721584888819"
          alt="image"
          className="max-sm:hidden"
        />
        <section className="max-sm:gap-3 flex gap-10  font-semibold items-center">
          <NavLink
            className={(e) =>
              e.isActive && "text-blue-500 scale-110 max-sm:text-sm"
            }
            to={"/"}
          >
            Home
          </NavLink>
          {["About", "Projects"].map((ele, i) => (
            <NavLink
              key={i}
              className={(e) =>
                e.isActive && "text-blue-500 scale-110 max-sm:text-sm"
              }
              to={`/${ele}`}
            >
              {ele}
            </NavLink>
          ))}
        </section>
        <section className=" flex text-xl  font-semibold items-center">
          <a
            className={
              "max-sm:p-2 text-center p-3 bg-zinc-300 rounded-lg text-sm text-black font-bold"
            }
            target="_blank"
            href="https://ik.imagekit.io/vtd0qp9vb/PortfolioData/RADHESHYAM%20LODHI%20-RESUME.pdf?updatedAt=1721589812729"
            download="resume.pdf"
          >
            Resume
          </a>
        </section>
      </nav>
    </>
  );
}

export default Nav;
