import "../index.css";
import { useState } from "react";

function Navigation() {
  const [activeItem, setActiveItem] = useState("Home");

  const menuItems = [
    { name: "Home", id: "home" },
    { name: "About", id: "about" },
    { name: "Projects", id: "projects" },
    { name: "Skills", id: "skills" },
    { name: "Certificates", id: "certificates" },
    { name: "Contact", id: "contact" },
  ];

  const handleClick = (item) => {
    setActiveItem(item.name);

    // Scroll to the section
    const element = document.getElementById(item.id);
    if (element) {
      element.scrollIntoView({
        behavior: "smooth",
        block: "start",
      });
    }
  };

  return (
    <nav className="flex bg-white shadow z-51 h-12 p-6 justify-center items-center rounded-2xl w-full anton fixed">
      <ul className="flex flex-row flex-wrap justify-center gap-3 sm:gap-6 md:gap-8 lg:gap-12 list-none text-black text-sm sm:text-base md:text-lg lg:text-xl xl:text-xl">
        {menuItems.map((item) => (
          <li
            key={item.name}
            className={`cursor-pointer transition-colors whitespace-nowrap ${
              activeItem === item.name
                ? "text-yellow-500 font-bold"
                : "hover:text-yellow-500"
            }`}
            onClick={() => handleClick(item)}
          >
            {item.name}
          </li>
        ))}
      </ul>
    </nav>
  );
}

export default Navigation;
