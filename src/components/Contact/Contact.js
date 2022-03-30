import React from "react";

const Contact = () => {
  return (
    <div className="bg-slate-200 h-[90vh]">
      <section className="px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2 ">
        <div className="flex flex-col justify-center items-center">
          <h1 className="text-xl md:text-3xl font-mono">
            Contact Us, Our Office Address Down Bellow
          </h1>
          <div className="mt-6 text-white">
            <button className="py-2 px-3 mr-4 bg-red-400 rounded-full">
              BD Address
            </button>
            <button className="py-2 px-3 bg-blue-500 rounded-full">
              US Address
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Contact;
