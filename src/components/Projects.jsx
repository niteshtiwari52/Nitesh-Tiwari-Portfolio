import React from "react";
import ZomatoClone from "../assets/projects/Zomato Clone.png";
import nodeServer from "../assets/projects/bookRecordServer.png";
import myTask from "../assets/projects/myTask.png";
import bookMyShow from "../assets/projects/bookMyShow.png";
import eTalk from "../assets/projects/eTalk.png";

const Projects = () => {
  const projects = [
    {
      id: 1,
      src: myTask,
      demo : "https://todomytasks.netlify.app/",
      code : "https://github.com/Nitesh52221/My-Task",

    },
    {
      id: 2,
      src: bookMyShow,
      demo: "https://book-my-show-clone-tau-ten.vercel.app/",
      code: "https://github.com/Nitesh52221/Book-my-show-clone-using-react",

    },
    
    {
      id: 3,
      src: nodeServer,
      demo : "#",
      code : "https://github.com/Nitesh52221/Book-Record-Management-Backend",

    },
    {
      id: 4,
      src: ZomatoClone,
      demo : "http://ec2-43-204-107-86.ap-south-1.compute.amazonaws.com/delivery",
      code : "https://github.com/Nitesh52221/zomato-clone",

    },
    {
      id: 5,
      src: eTalk,
      demo : "https://e-talk.vercel.app",
      code : "https://github.com/niteshtiwari52/E-Talk",

    },
    
  ];

  return (
    <>
      <div
        name="Projects"
        className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-auto"
      >
        <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
          <div className="pb-8">
            <p className="text-4xl font-bold inline border-b-4 border-gray-500">
              Projects
            </p>
            <p className="py-6">Checkout my all the Projects Here</p>
          </div>

          <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
            {projects.map(({ id, src , demo , code }) => (
              <div key={id} className=" shadow-md shadow-gray-600 rounded-lg">
                <img
                  src={src}
                  alt=""
                  className="rounded-md duration-200 hover:scale-105"
                />

                <div className="flex items-center justify-center">
                  <a href={demo} target = "_blank" rel='noreferrer' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Demo
                  </a>
                  <a href={code} target = "_blank" rel='noreferrer' className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                    Code
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Projects;
