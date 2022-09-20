const ArrowDownIcon = ({ style = "" }) => {
  return (
    <svg
      className={`transition-all duration-200 lg:ml-3 rotate-90 ${style}`}
      xmlns="http://www.w3.org/2000/svg"
      width="9.59"
      height="13.92"
      viewBox="0 0 9.59 13.92"
    >
      <g id="Group_94" transform="translate(2.119 11.802) rotate(-90)">
        <path
          id="Path_7"
          d="M-2.9,1.041,1.956,6.393"
          transform="translate(2.899 -1.041)"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          id="Line_17"
          x1="4.827"
          y2="5.247"
          transform="translate(4.855 0.105)"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
const ArrowRightIcon = ({ style = "" }) => {
  return (
    <svg
      className={`transition-all duration-200 ml-3 ${style}`}
      xmlns="http://www.w3.org/2000/svg"
      width="9.59"
      height="13.92"
      viewBox="0 0 9.59 13.92"
    >
      <g id="Group_94" transform="translate(2.119 11.802) rotate(-90)">
        <path
          id="Path_7"
          d="M-2.9,1.041,1.956,6.393"
          transform="translate(2.899 -1.041)"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
        <line
          id="Line_17"
          x1="4.827"
          y2="5.247"
          transform="translate(4.855 0.105)"
          fill="currentColor"
          stroke="currentColor"
          strokeLinecap="round"
          strokeWidth="3"
        />
      </g>
    </svg>
  );
};
const CloseIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="38"
      height="38"
      viewBox="0 0 38 38"
    >
      <g id="X" transform="translate(-126.06 -521.059)">
        <circle
          id="Ellipse_35"
          cx="19"
          cy="19"
          r="19"
          transform="translate(126.06 521.059)"
          fill="#fff"
        />
        <line
          id="Line_34"
          x1="16"
          y2="16"
          transform="translate(137.06 532.059)"
          fill="none"
          stroke="#101010"
          strokeLinecap="round"
          strokeWidth="4"
        />
        <line
          id="Line_35"
          x1="16"
          y1="16"
          transform="translate(137.06 532.059)"
          fill="none"
          stroke="#101010"
          strokeLinecap="round"
          strokeWidth="4"
        />
      </g>
    </svg>
  );
};
const BurgerMenuIcon = () => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="20.001"
      viewBox="0 0 24 20.001"
    >
      <path
        id="menu_icon"
        d="M1,20a1,1,0,0,1-1-1v-.858a1,1,0,0,1,1-1H23a1,1,0,0,1,1,1V19a1,1,0,0,1-1,1Zm0-8.572a1,1,0,0,1-1-1V9.571a1,1,0,0,1,1-1H14a1,1,0,0,1,1,1v.858a1,1,0,0,1-1,1ZM1,2.858a1,1,0,0,1-1-1V1A1,1,0,0,1,1,0H23a1,1,0,0,1,1,1v.858a1,1,0,0,1-1,1Z"
        fill="#fff"
      />
    </svg>
  );
};

export { ArrowDownIcon, ArrowRightIcon, CloseIcon, BurgerMenuIcon };
