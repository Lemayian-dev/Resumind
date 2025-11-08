import React from "react";

function Calltoaction() {
  return (
    <section className="min-h-[10vh] flex items-center justify-center px-4 py-12 ">
      <div className="flex flex-col md:flex-row items-center gap-6 md:gap-12 max-w-3xl w-full bg-primary text-white p-8 md:p-12 rounded-3xl font-heading text-center md:text-left shadow-lg">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:6xl font-semibold ">
          Build a Professional Resume That Helps <br className="hidden md:block" /> 
          You Stand Out and Get Hired
        </h1>
        <button className="mt-4 md:mt-0 rounded-full bg-white text-primary font-medium text-base md:text-lg px-6 py-3 hover:bg-gray-100 transition-all duration-300 cursor-pointer">
          Get started
        </button>
      </div>
    </section>
  );
}

export default Calltoaction;
