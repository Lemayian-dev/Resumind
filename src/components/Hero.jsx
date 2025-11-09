// ...existing code...
import React from "react";
import { Star } from "lucide-react";
import Logo1 from "/company-logos/framer.svg";
import Logo2 from "/company-logos/huawei.svg";
import Logo3 from "/company-logos/instagram.svg";
import Logo4 from "/company-logos/microsoft.svg";
import Logo5 from "/company-logos/walmart.svg";
import { useClerk } from "@clerk/clerk-react";

function Hero() {
  // function to trigger clerk auth
  const { openSignUp } = useClerk();
  return (
    <div>
      {/* Background blob */}
      <div className="absolute z-[-100] top-[12rem] right-[50rem] w-[600px] h-[600px] rounded-full bg-primary blur-[120px] opacity-12 "></div>
      <section
        role="region"
        aria-label="Hero"
        className="h-auto sm:h-[calc(100vh-8rem)] md:h-[calc(100vh-8rem)] lg:h-[calc(100vh-8rem)] mx-auto px-8 py-24 text-center sm:px-12 flex flex-col items-center justify-center"
      >
        {/* Star ratings */}
        <div className="flex flex-col lg:flex-row items-center gap-2 font-body mb-10">
          <div className="flex text-primary">
            <Star size={18} className="text-yellow-400" />
            <Star size={18} className="text-yellow-400" />
            <Star size={18} className="text-yellow-400" />
            <Star size={18} className="text-yellow-400" />
            <Star size={18} className="text-yellow-400" />
          </div>
          <p className="ml-3">Used by 10,000+ users</p>
        </div>

        {/* Hero heading */}
        <h1 className="mb-12 font-heading font-semibold text-secondary text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Land your dream job with
          <br />
          <span className="text-primary"> AI-powered</span> resumes.
        </h1>
        <p className="mb-12 text-xl text-secondary font-body">
          Create, edit and download professional resumes with AI-powered
          assistance.
        </p>

        {/* Hero buttons */}
        <div className="mx-auto font-body flex w-fit items-center justify-center gap-4">
          <button
            onClick={() => openSignUp()}
            type="button"
            className="rounded-full bg-primary px-8 py-2 text-base text-white cursor-pointer hover:opacity-95 focus:outline-none focus:ring-2 focus:ring-primary/40 transition-colors duration-150 border-1 border-green"
          >
            Get started
          </button>

          <button
            type="button"
            className="rounded-full border-1 border-gray-400 px-8 py-2 text-base text-secondary cursor-pointer hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-gray-200 transition-colors duration-150"
          >
            Try demo
          </button>
        </div>

        {/* Logos */}
        <div className="container mt-24 mb-5 font-body lg:mb-12 md:mb-8">
          <p>Trusted by leading brands, including</p>
          <div className="flex items-center justify-center flex-wrap gap-8 mt-6">
            <img
              className="w-24 opacity-80 hover:opacity-100 transition-opacity duration-150"
              src={Logo1}
              alt="Resumind framer logo"
            />
            <img
              className="w-24 opacity-80 hover:opacity-100 transition-opacity duration-150"
              src={Logo2}
              alt="Resumind huawei logo"
            />
            <img
              className="w-24 opacity-80 hover:opacity-100 transition-opacity duration-150"
              src={Logo3}
              alt="Resumind instagram logo"
            />
            <img
              className="w-24 opacity-80 hover:opacity-100 transition-opacity duration-150"
              src={Logo4}
              alt="Resumind microsoft logo"
            />
            <img
              className="w-24 opacity-80 hover:opacity-100 transition-opacity duration-150"
              src={Logo5}
              alt="Resumind walmart logo"
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
// ...existing code...
