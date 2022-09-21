import React from "react";
import { useRecoilState } from "recoil";
import { modalState } from "../atoms/modalAtol";
import ModalForm from "./ModalForm";
import { CloseIcon } from "./icons";
const Modal = () => {
  const [modalVisible, setModalVisible] = useRecoilState(modalState);
  return (
    <div
      className={`modal-container  ${modalVisible ? "scale-100" : "scale-0"}`}
    >
      <div
        className={`modal transition-all ease-in duration-200 ${
          modalVisible ? "opacity-100" : "opacity-0"
        }`}
      >
        <button
          onClick={() => setModalVisible(false)}
          className="absolute -right-[18px] -top-[18px]"
        >
          <CloseIcon />
        </button>
        <h3 className="text-center font-futura font-normal text-2xl text-redPrimary uppercase pb-7">
          participer
        </h3>
        <ModalForm />
      </div>
    </div>
  );
};

export default Modal;
