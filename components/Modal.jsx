import React from 'react';
import { IoClose } from "react-icons/io5";

const Modal = ({ children, onClose }) => {
  return (
    <div className="modal-overlay" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close" onClick={onClose}>
          <IoClose />
        </button>
        {children}
      </div>
    </div>
  );
};

export default Modal;
