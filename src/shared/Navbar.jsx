import React from "react";

const Navbar = () => {
  return (
    <div>
      <nav className="bg-green-600 flex justify-between items-center p-5">
        <div className="text-3xl capitalize hover:text-shadow-amber-50">
          <a href="/">green earth</a>
        </div>

        <div className="">
          <ul className="flex gap-4 capitalize text-xl">
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
    </div>
  );
};

export default Navbar;
