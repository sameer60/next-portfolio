import Link from "next/link";
import { FaTelegramPlane } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaCode } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="relative bg-white">
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <Link
            href="/"
            className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900"
          >
            <FaCode className="w-10 h-10 text-white p-2 bg-black rounded-full" />
            <span className="ml-3 text-xl">Sameer</span>
          </Link>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2024 Sameer —
            <Link
              href="https://twitter.com/sameer_on_x"
              className="text-gray-600 ml-1"
              rel="noopener noreferrer"
              target="_blank"
            >
              @sameer_on_x
            </Link>
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              href="https://t.me/sameer_on_tg"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <FaTelegramPlane className="h-7 w-7 mx-2 cursor-pointer text-[#27a3e2] " />
            </Link>
            <Link
              href="https://www.linkedin.com/in/shaiksameerbasha/"
              rel="noopener noreferrer"
              target="_blank"
              className="ml-3 text-gray-500"
            >
              <FaLinkedin className="h-7 w-7 mx-2 cursor-pointer text-[#0a66c2]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
