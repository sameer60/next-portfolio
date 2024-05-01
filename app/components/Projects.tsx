/* eslint-disable @next/next/no-img-element */
import Link from "next/link";
import Swal from "sweetalert2";
const Projects = () => {
  return (
    <>
      <section className="body-font bg-[#fff] text-gray-600">
        <div className="container mx-auto px-5 py-24">
          <div className="w-full flex justify-center">
            <h1 className="title-font text-center sm:text-5xl text-4xl mb-20 font-semibold text-gray-900 font-[Josefin Sans] font-semibold  text-balance tracking-tight">
              Have a glance at a few of my{" "}
              <span className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 inline-block text-transparent bg-clip-text">
                projects.
              </span>
            </h1>
          </div>
          <div className="-m-4 flex flex-wrap">
            <div className="p-4 md:w-1/2">
              <div className="h-full bg-white overflow-hidden shadow-xl hover:-translate-y-1 transition cursor-pointer rounded-lg">
                <Link href="https://sameer-job-app.vercel.app/" target="_blank">
                  <div className="mockup-browser border bg-base-300">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        https://sameer-jobby-app.vercel.app
                      </div>
                    </div>
                    <div className="flex justify-center bg-base-200">
                      <img
                        className="w-full object-cover object-center"
                        src="https://res.cloudinary.com/didtdrgsj/image/upload/v1711731529/Screenshot_from_2024-03-29_22-25-13_krjtot.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
            <div className="p-4 md:w-1/2">
              <div className="h-full bg-white overflow-hidden shadow-xl hover:-translate-y-1 transition cursor-pointer rounded-lg">
                <Link href="https://sameer-job-app.vercel.app/" target="_blank">
                  <div className="mockup-browser border bg-base-300">
                    <div className="mockup-browser-toolbar">
                      <div className="input">
                        https://sameer-jobby-app.vercel.app
                      </div>
                    </div>
                    <div className="flex justify-center bg-base-200">
                      <img
                        className="w-full object-cover object-center"
                        src="https://res.cloudinary.com/didtdrgsj/image/upload/v1711731529/Screenshot_from_2024-03-29_22-25-13_krjtot.png"
                        alt="blog"
                      />
                    </div>
                  </div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Projects;
