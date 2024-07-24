"use client";

import React from "react";
import { ModeToggle } from "./ModeToggle";
import Image from "next/image";
import logo from "../assets/logo.png";

const Navbar = () => {
  return (
    <nav className="flex justify-between items-center p-2 my-3">
      <div className="logo flex items-center my-3">
        <Image
          src={logo}
          className="my-1 p-2 bg-white rounded-xl"
          alt="Logo" height={50} width={50}
         
        />
        <h1 className="text-xl font-bold p-1 ml-2">Peak Voyage</h1>
      </div>
      <div className="flex-grow flex justify-center">
        <ul className="flex  items-center justify-between gap-2 space-x-3 p-2 font-semibold">
          <li>Home</li>
          <li>About</li>
          <li>Services</li>
        </ul>
      </div>
      <div className="mr-7 sm:mr-5">
        <ModeToggle />
      </div>
    </nav>
  );
};

export default Navbar;
