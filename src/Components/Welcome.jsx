import React from "react";
import CoolName from "./CoolName";
function Welcome() {
    return (
        <section className="ml-[5%] mr-0 mt-[10%] mb-[30%] pt-[5%] pr-[10%] pb-0 pl-[5%]">
            <h4 className="font-semibold">Hi, my name is</h4>
            {/* <h2 className="text-7xl font-semibold my-5">Hamza Lomari.</h2> */}
            <CoolName></CoolName>
            <h2 className="text-4xl font-semibold mb-5 sm:w-[21.75rem]
                           smoll:w-[21.75rem]">Front-End Developer</h2>

            <p className="sm:w-[21.851875rem]">
                I love creating web applications and websites and here you'll find all of my projects
            </p>
            <p className="absolute sm:w-[17.1875rem] smoll:m-1">
                For more info, check the About page.
            </p>
        </section>
    );
}

export default Welcome;