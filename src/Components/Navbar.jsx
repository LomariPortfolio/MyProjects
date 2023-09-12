import React, { useState } from "react";

function Navbar({ children }) {
  const [isNavbarHovered, setIsNavbarHovered] = useState(false);
  return (
    <nav
      onMouseEnter={() => setIsNavbarHovered(true)}
      onMouseLeave={() => setIsNavbarHovered(false)}
      className={`transition-{width} lg:hover:transition-{opacity} fixed z-10 bg-primary border-cyan-400 border-r border-solid duration-200 ease-in dark:bg-Dprimary
      lg:top-0 lg:h-screen lg:w-20
      lg:hover:inline ${isNavbarHovered ? "lg:hover:w-64" : ""} lg:hover:duration-300
      sm:bottom-0 sm:h-20 sm:w-screen
      smoll:bottom-0 smoll:h-20 smoll:w-screen`}
    >
      <ul
        className="m-0 flex h-full list-none flex-col items-center p-0
        sm:flex-row smoll:flex-row"
      > {children.map((child, index) => {
          // Pass isNavbarHovered as a prop to each ListItem
          return React.cloneElement(child, { key: index, isNavbarHovered });
        })}
      </ul>
    </nav>
  );
}

export default Navbar;
