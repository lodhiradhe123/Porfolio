import React from "react";
import Landing from "./conponents/Landing";
import Nav from "./conponents/Nav";
import Routing from "./utils/Routing";
import Socialsidebar from "./conponents/Socialsidebar";
import "./App.css"
import Pointer from "./conponents/Pointer";
// import Footer from "./conponents/Footer";
function App() {
  return (
    <>
    <Pointer/>
      <div className="w-full h-screen bg-black hide-scrollbar">
        <Nav />
        <Routing />
        <Socialsidebar />
      </div>
    </>
  );
}

export default App;
