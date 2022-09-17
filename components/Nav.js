import React from "react";
import { CloseIcon, menuItems } from "./Header";
import MenuItems from "./MenuItems";

const Nav = ({ slideNavVisible, setSlideNavVisible }) => {
  return (
    <nav
      className={`nav ${
        slideNavVisible ? "translate-x-0" : "-translate-x-full lg:translate-x-0"
      }`}
    >
      <ul className="pt-7 w-9/12 h-full flex flex-col px-8 bg-white space-y-[24px] lg:space-y-0 lg:flex-grow lg:px-0 lg:justify-between lg:flex-row lg:pt-0 lg:bg-inherit lg:items-center">
        <span className="font-sitka text-3xl mb-16 text-black lg:hidden">
          Lawa
        </span>
        {menuItems.map((menu, index) => {
          return <MenuItems items={menu} key={index} />;
        })}
        <button className="w-full h-11 rounded-full bg-redPrimary uppuercase font-poppins font-normal text-white !mt-8 lg:hidden">
          PARTICIPER
        </button>
      </ul>
      <div
        onClick={() => setSlideNavVisible(false)}
        className="w-1/4 h-full bg-black/70 flex justify-center lg:hidden"
      >
        <div className="mt-7">
          <CloseIcon />
        </div>
      </div>
    </nav>
  );
};

export default Nav;
