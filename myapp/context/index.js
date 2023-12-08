'use client'
import { createContext, useContext, useState } from "react";

export const GlobalContext = createContext(null);

export default function GlobalState({ children }) {
  const [registerModalState, setRegisterModalState] = useState({
    isOpen: false,
    content: null,
  });

  const [loginModalState, setLoginModalState] = useState({
    isOpen: false,
    content: null,
  });

  const openRegisterModal = (content) => {
    setRegisterModalState({ isOpen: true, content });
  };

  const closeRegisterModal = () => {
    setRegisterModalState({ isOpen: false, content: null });
  };

  const openLoginModal = (content) => {
    setLoginModalState({ isOpen: true, content });
  };

  const closeLoginModal = () => {
    setLoginModalState({ isOpen: false, content: null });
  };

  return (
    <GlobalContext.Provider
      value={{
        registerModalState,
        openRegisterModal,
        closeRegisterModal,
        loginModalState,
        openLoginModal,
        closeLoginModal,
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
}
