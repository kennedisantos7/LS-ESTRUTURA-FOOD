import React, { createContext, useContext, useState } from 'react';

interface DiagnosticModalContextType {
    isOpen: boolean;
    openModal: () => void;
    closeModal: () => void;
}

const DiagnosticModalContext = createContext<DiagnosticModalContextType>({
    isOpen: false,
    openModal: () => { },
    closeModal: () => { },
});

export const DiagnosticModalProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
    const [isOpen, setIsOpen] = useState(false);

    const openModal = () => {
        setIsOpen(true);
        document.body.style.overflow = 'hidden';
    };

    const closeModal = () => {
        setIsOpen(false);
        document.body.style.overflow = '';
    };

    return (
        <DiagnosticModalContext.Provider value={{ isOpen, openModal, closeModal }}>
            {children}
        </DiagnosticModalContext.Provider>
    );
};

export const useDiagnosticModal = () => useContext(DiagnosticModalContext);
