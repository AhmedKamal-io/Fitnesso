import React from "react";

const NavBar = () => {
  return (
    <nav className="fixed w-full flex justify-between items-center top-6 px-10">
      <h1 className="text-2xl text-blue-500 font-extrabold">
        FITN<span className="text-Blacky">ESSO</span>
      </h1>
      <div className="flex justify-center items-center gap-4 text-[15px]">
        <a href="#" className="font-bold text">
          Home
        </a>
        <a href="#" className="">
          Community
        </a>
        <a href="#" className="">
          Classes
        </a>
        <a href="#" className="">
          Pricing
        </a>
        <a href="#" className="">
          Blog
        </a>
      </div>
      <form action="">
        <input
          type="search"
          placeholder="Search"
          className="bg-gray-200 p-2 rounded-xl text-Blacky border-1 border-AssendFade"
        />
      </form>
      <a
        href="%"
        className="p-2 bg-AssendFade text-Blacky rounded-xl border-2 border-Blacky"
      >
        Contact us
      </a>
    </nav>
  );
};

export default NavBar;
