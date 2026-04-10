import React from "react";

const Navbar = () => {
  return (
    <>
      <nav className="flex justify-between p-5 bg-green-500">
        <div className="text-3xl font-bold">
          <a href="/">Green Earth</a>
        </div>

        <div className="">
          <ul className="flex gap-4 text-xl">
            <li>
              <a href="/home">home</a>
            </li>
            <li>
              <a href="/about">about</a>
            </li>
            <li>
              <a href="/gallery">gallery</a>
            </li>
            <li>
              <a href="/plant_a_tree">plant a tree</a>
            </li>
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
