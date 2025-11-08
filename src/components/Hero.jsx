import React from "react";
import { Star } from "lucide-react";
function Hero() {
  return (
    <div className="">
      <section class=" h-[calc(100vh-8rem)] mx-auto px-8 py-36 text-center sm:px-12 flex flex-col items-center justify-center">
        {/* Star ratings */}
        <div className="flex flex-col lg:flex-row items-center gap-2 font-body mb-10">
          <div className="flex text-primary">
            <Star />
            <Star />
            <Star />
            <Star />
            <Star />
          </div>
          <p>Used by 10,000+ users</p>
        </div>

        {/* Hero heading */}
        <h1 class="mb-12  font-heading font-semibold text-secondary text-4xl sm:text-4xl md:text-5xl lg:text-6xl">
          Land your dream job with <br />{" "}
          <span className="text-primary">AI-powered</span> resumes.
        </h1>
        <p class="mb-12 text-xl text-secondary font-body">
          Create, edit and download professional resumes with AI-powered
          assistance.
        </p>

        {/* Hero buttons */}
        <div class="mx-auto font-body flex w-fit items-center justify-center flex-row gap-2 sm:flex-row sm:space-y-0 sm:space-x-4">
          <button class="rounded-full border-0 bg-primary px-8 py-2 text-base text-white cursor-pointer">
            Get started
          </button>
          <button class="rounded-full border-1  px-8 py-2 text-base text-dark-900 cursor-pointer">
            Try demo
          </button>
        </div>

        {/* Logos */}
        <div className="container mt-24 mb-5 font-body lg:mb-50 md:50">
          <p>Trusting by leading brands, including</p>
          <div className=" flex  items-center justify-center flex-wrap gap-8 mt-6">
            <img
              className="w-24"
              src="public\company-logos\framer.svg"
              alt=""
            />
            <img
              className="w-24"
              src="public\company-logos\huawei.svg"
              alt=""
            />
            <img
              className="w-24"
              src="public\company-logos\instagram.svg"
              alt=""
            />
            <img
              className="w-24"
              src="public\company-logos\microsoft.svg"
              alt=""
            />
            <img
              className="w-24"
              src="public\company-logos\walmart.svg"
              alt=""
            />
          </div>
        </div>
      </section>
    </div>
  );
}

export default Hero;
