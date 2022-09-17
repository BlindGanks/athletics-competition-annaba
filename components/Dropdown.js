const Dropdown = ({ submenus, dropdown }) => {
  const dropdownHeight = 48 + submenus.length * 24 + (submenus.length - 1) * 24;
  return (
    <div
      className={`relative px-7 flex flex-col justify-center lg:absolute lg:pt-[59px] lg:px-0`}
    >
      <div
        className={`hidden w-0 h-0 
        border-t-[18px] border-t-transparent
        border-l-[28px] border-l-redSecondary
        border-b-[18px] border-b-transparent -rotate-90 absolute top-[27px] left-[30px] lg:block transition-all duration-200 ${
          dropdown ? "opacity-100" : "opacity-0"
        }`}
      ></div>
      <ul
        style={{
          height: dropdown ? dropdownHeight : 0,
          opacity: dropdown ? 1 : 0,
        }}
        className=" space-y-[24px] flex flex-col justify-center lg:bg-redSecondary lg:w-72 list-disc px-4 lg:list-none transition-[height] lg:transition-all duration-200 overflow-hidden"
      >
        {submenus.map((submenu, index) => (
          <li key={index}>
            <a href={submenu.url}>{submenu.title}</a>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Dropdown;
