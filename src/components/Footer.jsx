import React from "react";
import { Linkedin, Facebook } from "lucide-react";

function Footer() {
  return (
    <div className="h-[calc(100vh-70vh)] container mx-auto flex justify-between items-center font-body font-light ">
      {/* footer logo */}
      <div>
        <img className="w-32 cursor-pointer" src="src/assets/group-image-1.png" alt="" />
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
    </div>
  );
}

export default Footer;
