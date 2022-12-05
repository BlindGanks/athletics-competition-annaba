import ModalForm from "./ModalForm";
import { CloseIcon } from "./icons";
import { memo } from "react";
import { useModalState } from "../state-store";
const Modal = () => {
  const [modalVisible, toggleModalVisible] = useModalState((state) => [
    state.isVisible,
    state.toggle,
  ]);

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
          onClick={toggleModalVisible}
          className="absolute -right-[18px] -top-[18px]"
        >
          <CloseIcon />
        </button>
        <h3 className="text-center font-futura font-normal text-2xl text-redPrimary uppercase pb-7">
          participer
        </h3>
        <ModalForm setModalVisible={toggleModalVisible} />
      </div>
    </div>
  );
};

export default memo(Modal);
