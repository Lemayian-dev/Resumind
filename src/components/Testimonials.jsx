import React from "react";
import { BookUser, Star, UserCheck } from "lucide-react";

function Testimonials() {
  return (
    <div className="min-h-screen flex flex-col justify-center items-center px-4 py-16">
        
      {/* Section Tag */}
      <div className="flex items-center gap-3 text-primary font-body bg-bg px-6 py-2 rounded-full mb-6">
        <BookUser className="w-5 h-5" />
        <span>Testimonials</span>
      </div>

      {/* Heading */}
      <h1 className="text-3xl md:text-4xl font-heading text-center">
        Don’t just take our words
      </h1>

      {/* Description */}
      <p className="mt-4 text-base md:text-lg text-text font-body text-center max-w-2xl">
        Hear what our users say about us. We're always looking for ways to
        improve. If you have a positive experience with us, leave a review.
      </p>

      {/* Testimonial cards */}
      <div className="mt-20 grid font-body gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {/* Card 1 */}
        <div className="bg-gray-50 hover:bg-light-green border border-gray-200 rounded-2xl py-6 px-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="flex text-orange mb-4">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>

          <p className="text-gray-700 mb-6">
            I built my resume in minutes, and recruiters actually noticed me
            this time. The AI suggestions were insanely accurate it felt like
            having a career coach built into my browser.
          </p>

          <div className="flex items-center gap-3 font-medium text-gray-900">
            <UserCheck className="w-5 h-5 text-green-600" />
            <span>Isaac Lemayian, Software Engineer</span>
          </div>
        </div>

        {/* Card 2 */}
        <div className="bg-gray-50  border border-gray-200 rounded-2xl py-6 px-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="flex text-orange mb-4">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            
          </div>

          <p className="text-gray-700 mb-6">
            This tool made job hunting so much easier. My resume finally looks
            professional, and I didn’t even have to stress about formatting.
          </p>

          <div className="flex items-center gap-3 font-medium text-gray-900">
            <UserCheck className="w-5 h-5 text-green-600" />
            <span>Susan Wanjiku, Data Analyst</span>
          </div>
        </div>

        {/* Card 3 */}
        <div className="bg-gray-50 border border-gray-200 rounded-2xl py-6 px-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="flex text-orange mb-4">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>

          <p className="text-gray-700 mb-6">
            The AI keyword suggestions helped me match my resume with job
            listings I got more callbacks in one week than in months before.
          </p>

          <div className="flex items-center gap-3 font-medium text-gray-900">
            <UserCheck className="w-5 h-5 text-green-600" />
            <span>Brian Otieno, Product Designer</span>
          </div>
        </div>
      </div>
      {/* Testimonial cards */}
      <div className="mt-12 grid font-body gap-8 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-full max-w-6xl">
        {/* Card 1 */}
        {/* <div className="bg-gray-50 hover:bg-light-green border border-gray-200 rounded-2xl py-6 px-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="flex text-orange mb-4">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>

          <p className="text-gray-700 mb-6">
            I built my resume in minutes, and recruiters actually noticed me
            this time. The AI suggestions were insanely accurate it felt like
            having a career coach built into my browser.
          </p>

          <div className="flex items-center gap-3 font-medium text-gray-900">
            <UserCheck className="w-5 h-5 text-green-600" />
            <span>Isaac Lemayian, Software Engineer</span>
          </div>
        </div> */}

        {/* Card 2 */}
        {/* <div className="bg-gray-50 border border-gray-200 rounded-2xl py-6 px-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="flex text-orange mb-4">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>

          <p className="text-gray-700 mb-6">
            This tool made job hunting so much easier. My resume finally looks
            professional, and I didn’t even have to stress about formatting.
          </p>

          <div className="flex items-center gap-3 font-medium text-gray-900">
            <UserCheck className="w-5 h-5 text-green-600" />
            <span>Susan Wanjiku, Data Analyst</span>
          </div>
        </div> */}

        {/* Card 3 */}
        {/* <div className="bg-gray-50 border border-gray-200 rounded-2xl py-6 px-6 flex flex-col justify-between shadow-sm hover:shadow-md transition-all">
          <div className="flex text-orange mb-4">
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
            <Star className="w-5 h-5" />
          </div>

          <p className="text-gray-700 mb-6">
            The AI keyword suggestions helped me match my resume with job
            listings I got more callbacks in one week than in months before.
          </p>

          <div className="flex items-center gap-3 font-medium text-gray-900">
            <UserCheck className="w-5 h-5 text-green-600" />
            <span>Brian Otieno, Product Designer</span>
          </div>
        </div> */}
      </div>
    </div>
  );
}

export default Testimonials;
