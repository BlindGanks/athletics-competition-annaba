import React from "react";
import { useRecoilState } from "recoil";
import { sideMenuState } from "../atoms/sideMenuAtom";
import { BurgerMenuIcon } from "./icons";

const BurgerMenuButton = () => {
  const [sideMenuVisible, setSideMenuVisible] = useRecoilState(sideMenuState);
  return (
    <button
      onClick={() => setSideMenuVisible(true)}
      type="button"
      className="pr-4 lg:hidden"
    >
      <BurgerMenuIcon />
    </button>
  );
};

export default BurgerMenuButton;
