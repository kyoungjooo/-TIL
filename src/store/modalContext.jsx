import { createContext, useState } from "react";

export const ModalContext = createContext();

const ModalContextProvider = ({ children }) => {
  const [isModalOpen, setModalOpen] = useState(false);
  return (
    <ModalContext.Provider value={[isModalOpen, setModalOpen]}>
      {children}
    </ModalContext.Provider>
  );
};
export default ModalContextProvider;
