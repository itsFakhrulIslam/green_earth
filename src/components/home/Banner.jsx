import React from "react";

const Banner = () => {
  return (
    <>
      <div className="bg-[url(./banner1.jpg)] w-full h-screen bg-fixed bg-cover bg-no-repeat flex flex-col justify-center items-center text-white space-y-4">
        <h1 className="text-8xl font-bold">Plant a Tree, Grow a Future</h1>

        <p className="text-3xl">
          Join our mission to plant 1 million trees and make the Earth greener
          for future generations.
        </p>

        <button className="bg-amber-500 px-8 py-4 text-2xl text-black capitalize rounded-2xl hover:bg-green-600 hover:text-white cursor-pointer">get involved</button>
      </div>
    </>
  );
};

export default Banner;
