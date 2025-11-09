import React from "react";
import { Linkedin, Facebook } from "lucide-react";

import logoUrl from "/logo.svg";

function Footer() {
  return (
    <div className="h-[calc(100vh-70vh)] container mx-auto flex flex-col mt-24 gap-8 items-center font-body font-light sm:flex-row md:flex-row lg:flex-row xl:flex-row lg:justify-around">
      {/* footer logo */}
      <div>
        {/* <img
          className="w-32 cursor-pointer"
          src="src/assets/logo.svg
        "
          alt=""
        /> */}
        <img src={logoUrl || "/logo.svg"} alt="Logo" />
      </div>

      {/* nav links */}
      <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className=" hover:text-primary">
              Home
            </a>
          </li>
          <li>
            <a href="#about" className=" hover:text-primary">
              About
            </a>
          </li>
          <li>
            <a href="#contact" className=" hover:text-primary">
              Contact
            </a>
          </li>
        </ul>
      </div>
      <div className="flex">
        <Linkedin />
        <Facebook />
      </div> 
      {/* <div>
        <ul className="flex space-x-4">
          <li>
            <a href="#home" className=" hover:text-primary underline text-green">
              Privacy policy
            </a>
          </li>
         
        </ul>
      </div> */}
      {/* <div>
        <p>Copyright @Resumind 2025</p>
      </div> */}
    </div>
  );
}

export default Footer;
