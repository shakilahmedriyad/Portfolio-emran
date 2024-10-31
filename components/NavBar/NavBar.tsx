"use client";
import Behence from "../Icons/Behence";
import LinkedIn from "../Icons/Linkedin";
import Twitter from "../Icons/Twitter";

export default function NavBar() {
  const NavItem = [
    { label: "Home", slug: "home" },
    { label: "Skills", slug: "skills" },
    { label: "Experience", slug: "experience" },
    { label: "Work", slug: "work" },
    { label: "Contact", slug: "contact" },
  ];
  const handleClick = (item: string) => {
    document.getElementById(item)?.scrollIntoView({ behavior: "smooth" });
  };
  return (
    <nav className="bg-[#1B1B1B] text-xs md:text-base sm:text-sm z-50 fixed w-full translate-x-[-50%] left-[50%] py-6 shadow-lg px-5 rounded-b-xl  max-w-[80rem]">
      <div className="flex max-w-[70rem] mx-auto">
        <ul className="flex text-[#9C9C9C] justify-between w-full">
          {NavItem.map((item) => (
            <li
              key={item.slug}
              onClick={() => handleClick(item.slug)}
              className="hover:border-[#9C9C9C] border-b border-transparent cursor-pointer py-1"
            >
              {item.label}
            </li>
          ))}
        </ul>
        <div className="icons md:flex hidden items-center gap-7 ml-7 mr-2">
          <LinkedIn
            className="w-[1.2rem] border-b pt-1 pb-2 border-transparent hover:border-[#9C9C9C] cursor-pointer"
            fill="none"
          />
          <Behence
            className="w-[1.3rem] border-b pt-2 pb-2 border-transparent hover:border-[#9C9C9C] cursor-pointer"
            fill="none"
          />
          <Twitter
            className="w-[1.2rem] border-b pt-1 pb-2 border-transparent hover:border-[#9C9C9C] cursor-pointer"
            fill="none"
          />
        </div>
      </div>
    </nav>
  );
}
