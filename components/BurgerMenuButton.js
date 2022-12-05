import React from "react";
import { useSideMenuState } from "../state-store";
import { BurgerMenuIcon } from "./icons";

const BurgerMenuButton = () => {
  const toggleSideMenuVisible = useSideMenuState((state) => state.toggle);
  return (
    <button
      onClick={toggleSideMenuVisible}
      type="button"
      className="pr-4 lg:hidden"
    >
      <BurgerMenuIcon />
    </button>
  );
};

export default BurgerMenuButton;
