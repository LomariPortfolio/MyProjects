import React from "react";
import GithubLogo from "../SVG/github.svg";

function Project({ image, title, description, appLink, github }) {
  return (
    <div className="bg-transparent rounded-md border border-solid border-cyan-400 pb-3 text-center">
      <img src={image} alt="Project" className="h-auto max-w-full " />
      <h1 className="mx-0 my-3 text-2xl">{title}</h1>
      <p className="text-base mb-5">{description}</p>

      <button className="bg-cyan-950 text-cyan-400 border-cyan-400 group relative overflow-hidden rounded-md border border-b-4 px-4 py-2 font-medium outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
        <a href={appLink} className="absolute z-50 h-full w-full"></a>
        <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] duration-500 group-hover:top-[150%]"></span>
        Live app
      </button>
      <button className="bg-cyan-950 text-cyan-400 border-cyan-400 group relative overflow-hidden rounded-md border border-b-4 px-4 py-2 font-medium outline-none duration-300 hover:border-b hover:border-t-4 hover:brightness-150 active:opacity-75">
        <a href={github} className="absolute z-50 h-full w-full"></a>
        <span className="bg-cyan-400 shadow-cyan-400 absolute -top-[150%] left-0 inline-flex h-[5px] w-80 rounded-md opacity-50 shadow-[0_0_10px_10px_rgba(0,0,0,0.3)] duration-500 group-hover:top-[150%]"></span>
        Github
      </button>
    </div>
  );
}

export default Project;
