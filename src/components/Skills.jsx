import React from "react";
import html from "../assets/skills/html.svg";
import css from "../assets/skills/css.svg";
import javascript from "../assets/skills/javascript.svg";
import reactImage from "../assets/skills/react.svg";
import tailwind from "../assets/skills/tailwindcss.svg";
import bootstrap from "../assets/skills/bootstrap.svg"
import redux from "../assets/skills/redux.svg"
import nodejs from "../assets/skills/nodejs.svg"
import mongoDb from "../assets/skills/mongodb.svg"
import express from "../assets/skills/express.svg"
import git from "../assets/skills/git.svg";
import postman from "../assets/skills/postman.png";

const Skills = () => {
  const techs = [
    {
      id: 1,
      src: html,
      title: "HTML",
      style: "shadow-orange-500",
    },
    {
      id: 2,
      src: css,
      title: "CSS",
      style: "shadow-blue-500",
    },
    
    {
      id: 3,
      src: javascript,
      title: "JavaScript",
      style: "shadow-yellow-500",
    },
    {
      id: 4,
      src:bootstrap,
      title: "Bootstrap",
      style:"shadow-blue-700"
    },
    {
      id: 5,
      src: reactImage,
      title: "React",
      style: "shadow-blue-600",
    },
    {
      id: 6,
      src: tailwind,
      title: "Tailwind",
      style: "shadow-sky-400",
    },
    {
      id: 8,
      src:redux,
      title: "Redux",
      style:"shadow-violet-600"
    },
    {
      id: 9,
      src:express,
      title: "Express",
      style:"shadow-neutral-50"
    },
    {
      id: 10,
      src:nodejs,
      title: "Nodejs",
      style:"shadow-lime-600"
    },
    {
      id: 11,
      src:mongoDb,
      title: "mongoDb",
      style:"shadow-lime-600"
    },   
    {
      id: 12,
      src: git,
      title: "Git",
      style: "shadow-red-500",
    },
    {
      id: 13,
      src:postman,
      title: "postman",
      style:"shadow-orange-600"
    },
       
    
    
  ];
  return (
    <>
      <div
        name="Skills"
        className="bg-gradient-to-b from-gray-800 to-black w-full h-auto"
      >
        <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
          <div>
            <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
              Skills
            </p>
            <p className="py-6">These are the technologies I've worked with</p>
          </div>

          <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
            {techs.map(({ id, src, title, style }) => (
              <div
                key={id}
                className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
              >
                <img src={src} alt="" className="w-20 mx-auto" />
                <p className="mt-4">{title}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Skills;
