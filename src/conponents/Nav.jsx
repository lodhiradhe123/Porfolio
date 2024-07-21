import React from "react";
import { Link, NavLink } from "react-router-dom";

function Nav() {
  return (
    <>
      <nav className="max-sm:w-full max-sm:px-5 max-w-screen-lg py-2 m-auto h-16 bg-transparent  flex justify-between px-10 text-white  border-b border-zinc-500">
        <img src="./src/assets/logo.png" alt="" className="max-sm:hidden" />
        <section className="max-sm:gap-3 flex gap-10  font-semibold items-center">
        <NavLink
              className={(e) =>
                e.isActive && "text-blue-500 scale-110 max-sm:text-sm"
              }
              to={"/"}
            >
             Home
            </NavLink>
          {[ "About", "Projects"].map((ele, i) => (
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
          <NavLink
            className={
              "max-sm:p-2 text-center p-3 bg-zinc-300 rounded-lg text-sm text-black font-bold"
            }
            to="/resume"
          >
            Resume
          </NavLink>
        </section>
      </nav>
    </>
  );
}

export default Nav;
