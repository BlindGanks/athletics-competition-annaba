import { useState } from "react";
import Dropdown from "./Dropdown";
import { ArrowIcon } from "./Header";

const MenuItems = ({ items }) => {
  const [dropdown, setDropdown] = useState(false);
  return (
    <li>
      {items.submenu ? (
        <>
          <button
            onClick={() => setDropdown((prev) => !prev)}
            type="button"
            className="w-full items-end flex flex-row justify-between leading-[20px]"
          >
            {items.title}
            <ArrowIcon
              style={`${dropdown ? "rotate-90" : ""}  rotate-90 ml-3`}
              color="#ffffff"
            />
          </button>
          <Dropdown dropdown={dropdown} submenus={items.submenu} />
        </>
      ) : (
        <a href={items.url}>{items.title}</a>
      )}
    </li>
  );
};

export default MenuItems;
