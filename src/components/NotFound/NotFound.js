import React from "react";
import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="bg-slate-200 h-[100vh]">
      <div className="flex flex-col  items-center pt-12 md:pt-24">
        <h3 className="text-gray-600 font-bold">404!</h3>
        <p className="mb-7 text-xl md:text-2xl text-gray-500">
          Here is nothing to show...
        </p>
        <div>
          <Link
            to="/"
            className="py-2 px-6 bg-blue-400 rounded-full text-white "
          >
            Go to home
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NotFound;
