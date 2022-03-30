import React from "react";

const HomePage = () => {
  return (
    <div className="flex flex-col items-center justify-center h-[80vh]">
      <h1 className="font-mono text-xl md:text-5xl mb-5">
        Welcome to CRYPTO CAFE
      </h1>
      <button className="bg-blue-600  py-2 px-3 rounded-full text-white">
        Explore Coins
      </button>
    </div>
  );
};

export default HomePage;
