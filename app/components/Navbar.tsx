"use client";
import Link from "next/link";
import { FaCode } from "react-icons/fa";

const Navbar = () => {
  return (
    <header className="text-gray-600 body-font bg-white">
      <div className="container mx-auto flex flex-wrap px-5 pt-10 flex-col md:flex-row items-center">
        <a
          href="/"
          className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0"
        >
          <FaCode className="w-10 h-10 text-white p-2 bg-black rounded-full" />
          <span className="ml-3 text-2xl">Sameer</span>
        </a>
        <nav className="md:ml-auto flex flex-wrap items-center text-base justify-center">
          <Link
            href="/uses"
            className="mr-5 text-gray-600 font-semibold text-lg cursor-pointer hover:text-gray-900"
          >
            Uses
          </Link>
          <a
            className="mr-5 text-gray-600 font-semibold text-lg cursor-pointer hover:text-gray-900"
            href="/Resume.pdf" // Replace this with the actual path to your resume file
            download="resume.pdf" // Specify the desired filename for the downloaded file
          >
            Resume
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
