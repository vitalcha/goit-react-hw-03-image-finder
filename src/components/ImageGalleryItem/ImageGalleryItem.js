import React from 'react';
import Proppes from 'prop-types';
import abc from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ dataObj, onOpenModal }) => (
  <li
    className={abc.ImageGalleryItem}
    onClick={() => onOpenModal(dataObj.webformatURL)}
  >
    <img
      src={dataObj.webformatURL}
      alt=""
      className={abc.ImageGalleryItemImage}
    />
  </li>
);

export default ImageGalleryItem;

ImageGalleryItem.propTypes = {
  dataObj: Proppes.shape({
    id: Proppes.number.isRequired,
    webformatURL: Proppes.string.isRequired,
  }).isRequired,
  onOpenModal: Proppes.func.isRequired,
};
