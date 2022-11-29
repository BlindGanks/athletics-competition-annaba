import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtom";

const ParticipateButton = () => {
  const [modalVisible, setModalVisible] = useRecoilState(modalState);

  return (
    <button
      onClick={() => setModalVisible(true)}
      className="absolute w-[122px] h-[34px] bg-red-600 text-white font-futura text-[18px] lg:text-[28px] leading-[18px] font-normal uppercase right-0 top-0 lg:w-[230px] lg:h-[55px] z-10"
    >
      participer
    </button>
  );
};

export default ParticipateButton;
