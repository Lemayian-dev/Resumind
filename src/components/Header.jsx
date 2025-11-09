import React from "react";
import { Menu } from "lucide-react";
import {
  SignedIn,
  SignedOut,
  SignInButton,
  UserButton,
} from "@clerk/clerk-react";
import LogoUrl from "/logo.svg";

import { useClerk } from "@clerk/clerk-react";

function Header() {
  const { openSignIn } = useClerk();

  return (
    <>
      <header>
        {/* Background blob */}
        {/* <div className="absolute top-[12rem] right-[50rem] w-[600px] h-[600px] rounded-full bg-primary blur-[120px] opacity-12 "></div> */}
        {/* Top ticker */}
        <div className="w-full font-body h-10  bg-gradient-to-r from-white via-green-200 to white flex items-center justify-center gap-4">
          <button className="bg-primary text-white px-2 py-0.5 rounded-xl">
            New
          </button>
          <p className="text-primary">AI Feature Added</p>
        </div>
        <nav className=" p-4 top-0 z-50 h-16 font-body">
          <div className="container mx-auto flex justify-between items-center">
            {/* Logo main */}
            {/* <img
              className="w-32 cursor-pointer"
              src="src/assets/logo.svg"
              alt=""
            /> */}
            <img
              className="w-32 cursor-pointer"
              src={LogoUrl || "/logo.svg"}
              alt="Resumind-logo"
            />

            {/* Nav links */}
            <div className="hidden lg:inline ">
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
                    Features
                  </a>
                </li>
                <li>
                  <a href="#contact" className=" hover:text-primary">
                    Testimonials
                  </a>
                </li>
                <li>
                  <a href="#contact" className=" hover:text-primary">
                    Contact
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <button
                onClick={() => openSignIn()}
                class="rounded-full  border-0 bg-primary px-8 py-2 text-base text-white cursor-pointer  lg:inline"
              >
                Login
              </button>
              <Menu className="hidden  sm:hidden md:hidden lg:hidden" />
            </div>
          </div>
        </nav>
      </header>
    </>
  );
}

export default Header;
