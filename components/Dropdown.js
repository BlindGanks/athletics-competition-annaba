import MenuItems from "./MenuItems";

const Dropdown = ({ submenus, dropdown, depthLevel }) => {
  depthLevel = depthLevel + 1;
  const dropdownHeight = 48 + submenus.length * 24 + (submenus.length - 1) * 24;
  const dropdownClass = depthLevel > 1 ? "dropdown-submenu" : "";
  return (
    <div
      className={`relative pl-7 flex flex-col justify-center mt-6 lg:mt-0 lg:absolute lg:pt-[56px] lg:px-0 lg:min-w-[313px] ${
        dropdown ? "flex" : "hidden"
      }`}
    >
      <div
        className={`hidden w-0 h-0 
        border-t-[18px] border-t-transparent
        border-l-[28px] border-l-redSecondary
        border-b-[18px] border-b-transparent -rotate-90 absolute top-[27px] xl:top-[25px] left-[30px] lg:block ${
          depthLevel > 1 ? "!hidden" : "block"
        } ${dropdown ? "opacity-100" : "opacity-0"}`}
      ></div>
      <ul className={`dropdown ${dropdownClass}`}>
        {submenus.map((submenu, index) => (
          <MenuItems items={submenu} key={index} depthLevel={depthLevel} />
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
