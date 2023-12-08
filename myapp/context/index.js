"use client";
import { createContext, useContext, useState } from "react";


export const GlobalContext = createContext(null);


export default function GlobalState({ children }) {
  
    const [modalState, setModalState] = useState({
        isOpen: false,
        content: null,
      });
    
      const openModal = (content) => {
        setModalState({ isOpen: true, content });
      };
    
      const closeModal = () => {
        setModalState({ isOpen: false, content: null });
      };
    
    return (
        <GlobalContext.Provider 
        value={{ 
            modalState,
            openModal,
            closeModal,
         }}>
        {children}
        </GlobalContext.Provider>
    )
}