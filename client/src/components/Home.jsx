import React from "react";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import HeroImage from "../assets/Nitesh.png";
import Modal from "./Modal";

const Home = () => {
  return (
    <>
      <div
        name="Home"
        className="h-screen w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col justify-center items-center h-full  px-4 md:flex-row">
          <div className=" flex flex-col justify-center h-auto">
            <h2 className="text-4xl sm:text-7xl font-bold text-white">
              I'm a Full Stack Developer.
            </h2>

            <div>
              <a
                href="https://drive.google.com/file/d/1Fyb5kNVIENFTatR5qK6fuoKq4A9daibB/view"
                download={true}
                className="group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Resume
                <span className="group-hover:rotate-90 duration-300">
                  {/* <MdOutlineKeyboardArrowRight size={25} className = "ml-1"/> */}
                </span>
              </a>
            </div>
          </div>

          <div>
            <img
              src={HeroImage}
              alt="my profile"
              className=" rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Home;
