import React from "react";
import useModal from "../hooks/useModal";

const Main = () => {
  const {
    isModalOpen,
    setModalOpen,
    handleToggleModal,
    openModal,
    closeModal,
  } = useModal();
  return (
    <>
      <button onClick={isModalOpen ? closeModal : openModal}>버튼</button>
      {isModalOpen && <React.Fragment>모달</React.Fragment>}
    </>
  );
};
export default Main;
