import React from "react";

function ListItem({ icon, link, innerText, isNavbarHovered }) {
  return (
    
        <li className={`w-full bg-primary last:mt-auto hover:invert dark:bg-Dprimary`}>
          <a
            href={link} //link
            className="flex h-20 items-center text-secondary no-underline dark:text-Dtext-secondary sm:justify-center smoll:justify-center"
          >
            <img
              src={icon} //image
              alt="home"
              className="mx-6 my-0 min-w-[2rem] grayscale invert"
            />
            <span className={`sm:hidden sm:ml-0 ml-4
                             smoll:hidden smoll:ml-0
                             ${isNavbarHovered ? "lg:inline" : "lg:hidden"}`}
                             >
              {innerText}
              </span>
          </a>
        </li>
      
  );
}

export default ListItem;