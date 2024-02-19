import React, { useState } from "react";
import logo from "../Spaceimgs/shared/logo.svg";
import { Link } from "react-router-dom";

export default function SpaceProjectNav() {
  const [activeItem, setActiveItem] = useState(""); // State to keep track of active item

  const Heads = [
    { number: "00", head: "Home", link: "/" },
    { number: "01", head: "Destination", link: "/Destination" },
    { number: "02", head: "Crew", link: "/Crew" },
    { number: "03", head: "Technology", link: "/Technology" },
  ];

  const handleItemClick = (link) => {
    setActiveItem(link); // Update active item when clicked
  };

  return (
    <div className="">
      <div className="w-full z-50 absolute flex items-center justify-between lg:pt-12">
        <Link to="/">
          <img className="lg:pl-20 pl-10" src={logo} alt="logo" />
        </Link>
        <div className="absolute right-[45%] w-[40%] z-20 lg:border-b-2 border-[#3e404c]"></div>
        <div className="relative flex items-center justify-center lg:w-[50%] bg-[#13141f] lg:bg-transparent lg:backdrop-blur-3xl h-20">
          <ul className="sm:flex hidden gap-x-[4lvw] text-white pl-10 pr-10  ">
            {Heads.map((item, i) => (
              <Link key={i} to={`${item.link}`}>
                <li
                  className={`navcont cursor-pointer leading-[78px] ${
                    activeItem === item.link ? "active" : ""
                  }`}
                  onClick={() => handleItemClick(item.link)}
                >
                  <span className="hidden lg:inline font-semibold">
                    {item.number}
                  </span>{" "}
                  {item.head}
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
