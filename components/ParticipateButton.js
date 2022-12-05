import React from "react";
import { useModalState } from "../state-store";

const ParticipateButton = () => {
  const toggleModalVisible = useModalState((state) => state.toggle);

  return (
    <button
      onClick={toggleModalVisible}
      className="absolute w-[122px] h-[34px] bg-[#006FCF] text-white font-futura text-[18px] lg:text-[28px] leading-[18px] font-normal uppercase right-0 top-0 lg:w-[230px] lg:h-[55px] z-10"
    >
      participer
    </button>
  );
};

export default ParticipateButton;
