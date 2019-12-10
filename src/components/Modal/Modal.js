import React from 'react';
import Proppes from 'prop-types';
import abc from './Modal.module.css';

const Modal = ({ bigPicture, closeModal }) => {
  return (
    <div className={abc.Overlay} onClick={closeModal}>
      <div className={abc.Modal}>
        <img src={bigPicture} alt="" />
      </div>
    </div>
  );
};

export default Modal;

Modal.propTypes = {
  bigPicture: Proppes.string.isRequired,
  closeModal: Proppes.func.isRequired,
};
