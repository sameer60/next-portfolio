"use client";
import Link from "next/link";
import { FaCode } from "react-icons/fa";
import { MdOutlineFileDownload } from "react-icons/md";

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
            className="mr-5 text-gray-900 font-semibold text-lg cursor-pointer group transition duration-300"
          >
            /uses
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
          </Link>
          <a
            className="mr-5 cursor-pointer group transition duration-300 text-white bg-[#050708] hover:bg-[#050708]/80 focus:ring-4 focus:outline-none focus:ring-[#050708]/50 font-medium rounded-3xl text-sm px-5 py-2.5 text-center inline-flex items-center me-2 mb-2"
            href="/Resume.pdf"
            target="_blank"
            rel="noreferrer"
          >
            resume &nbsp; <MdOutlineFileDownload />
            <span className="block max-w-0 group-hover:max-w-full transition-all duration-500 h-0.5 bg-gray-800"></span>
          </a>
        </nav>
      </div>
    </header>
  );
};

export default Navbar;
