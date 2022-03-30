import React from "react";
import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="md:px-16 py-6 bg-slate-200">
      <div className="flex flex-col items-center justify-center h-[80vh]">
        <h1 className="font-mono text-xl md:text-5xl mb-5">
          Welcome to CRYPTO CAFE
        </h1>
        <Link
          to="/coins"
          className="bg-blue-600  py-2 px-3 rounded-full text-white"
        >
          Explore Coins
        </Link>
      </div>
    </div>
  );
};

export default HomePage;
