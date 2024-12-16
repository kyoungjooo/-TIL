import { useContext } from "react";
import { ModalContext } from "../store/modalContext";

const useModal = () => {
  const [isModalOpen, setModalOpen] = useContext(ModalContext);

  const openModal = () => {
    setModalOpen(true);
  };
  const closeModal = () => {
    setModalOpen(false);
  };
  const handleToggleModal = () => {
    setModalOpen(!isModalOpen);
  };
  return {
    isModalOpen,
    setModalOpen,
    openModal,
    closeModal,
    handleToggleModal,
  };
};
export default useModal;
