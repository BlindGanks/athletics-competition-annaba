import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Dropdown from "./Dropdown";
import { ArrowDownIcon, ArrowRightIcon } from "./icons";

const MenuItems = ({ items, depthLevel }) => {
  let ref = useRef();
  const [dropdown, setDropdown] = useState(false);
  useEffect(() => {
    const handler = (event) => {
      if (dropdown && ref.current && !ref.current.contains(event.target)) {
        setDropdown(false);
      }
    };
    document.addEventListener("mousedown", handler);
    document.addEventListener("touchstart", handler);
    return () => {
      // Cleanup the event listener
      document.removeEventListener("mousedown", handler);
      document.removeEventListener("touchstart", handler);
    };
  }, [dropdown]);
  return (
    <li
      ref={ref}
      className="font-helvetica text-base font-bold text-[#959798] lg:text-white lg:text-xl lg:uppercase xl:text-2xl"
    >
      {items.submenu ? (
        <>
          <span
            onClick={() => setDropdown((prev) => !prev)}
            type="button"
            className="w-full items-center flex flex-row justify-between cursor-pointer"
          >
            {items.title}
            {items.submenu && depthLevel < 1 ? (
              <ArrowDownIcon style="text-black lg:text-white" />
            ) : null}
            {items.submenu && depthLevel > 0 ? (
              <ArrowRightIcon
                style={`text-black lg:text-white ${
                  dropdown ? "rotate-90" : ""
                }`}
              />
            ) : null}
          </span>
          <Dropdown
            dropdown={dropdown}
            submenus={items.submenu}
            depthLevel={depthLevel}
          />
        </>
      ) : (
        <Link href={items.url}>{items.title}</Link>
      )}
    </li>
  );
};

export default MenuItems;
