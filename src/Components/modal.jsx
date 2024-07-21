import React from 'react';

const Modal = ({ isOpen, onClose, children }) => {
  try {
    if (!isOpen) return null;

    return (
      <div className="fixed inset-0 bg-gray-800 bg-opacity-50 flex justify-center items-center z-50">
          <button onClick={onClose} className="absolute top-2 right-2 text-gray-500">
            &times;
          </button>
          {children}
      </div>
    );
  } catch (error) {
    console.error("Error rendering Modal:", error);
    return null;
  }
};

export default Modal;
