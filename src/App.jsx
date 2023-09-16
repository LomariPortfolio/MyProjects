import React from "react";
//components
import Navbar from "./Components/Navbar";
import ListItem from "./Components/ListItem";
import Welcome from "./Components/Welcome";
import About from "./Components/About";
import ContactForm from "./Components/Contact";
//assets
import newsletterImage from "./IMAGES/NEWSLETTER.png"
import home from "./SVG/home.svg";
import projects from "./SVG/projects.svg";
import contact from "./SVG/contact.svg";
import about from "./SVG/about.svg";
import themesvg from "./SVG/themes.svg";
import Project from "./Components/Project";
//links
const links = [
  ["#", "#MYPROJECTS", "#ABOUT", "#CONTACT", "#"], //nav links
  [newsletterImage, "#", "#", "#", "#"], //image links
  ["https://github.com/LomariPortfolio/Newsletter-App", "#", "#", "#", "#"], //github links
  ["https://newsletter-tz0h.onrender.com/", "#", "#", "#", "#"], //live app links
];
function App() {
  return (
    <div className="font-body">
      <Navbar>
        <ListItem icon={home} link={links[0][0]} innerText="Home"></ListItem>
        <ListItem
          icon={projects}
          link={links[0][1]}
          innerText="Projects"
        ></ListItem>
        <ListItem icon={about} link={links[0][2]} innerText="About"></ListItem>
        <ListItem
          icon={contact}
          link={links[0][3]}
          innerText="Contact"
        ></ListItem>
        <ListItem
          icon={themesvg}
          link={links[0][4]}
          innerText="Switch theme"
        ></ListItem>
      </Navbar>
      <main className="ml-20 p-4 sm:m-0 sm:mb-[10vh] smoll:m-0 smoll:mb-[10vh]">
        <Welcome />

        <div
          id="MYPROJECTS"
          className="smoll:gird-cols-1 mx-auto
          my-0 grid max-w-7xl
          grid-cols-1 gap-5 p-5 lg:mt-[10vh] lg:grid-cols-3 lg:pt-[10vh]
          sm:mt-[10%] sm:grid-cols-2 sm:pt-[10%] smoll:mt-[5%] smoll:pt-[10%]"
        >
          <Project
            image={links[1][0]}
            title="Newsletter app"
            description="Recieve emails by subscribing in my newsletter! 📧"
            appLink={links[3][0]}
            github={links[2][0]}
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
          <Project
            image="https://wallpapers.com/images/featured/1080p-3qmj7oaige168170.jpg"
            title="My App"
            description="pretty cool right? 😂"
            appLink="#"
            github="#"
          ></Project>
        </div>
        <div id="ABOUT">
          <About/>
        </div>
        <div id="CONTACT">
          <ContactForm/>
        </div>
      </main>
    </div>
  );
}

//TODO: Fix theme switcher.
export default App;
