/* eslint-disable jsx-a11y/no-noninteractive-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React from 'react';
import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

const ImageGalleryItem = ({ src, alt, openModal, srcModal }) => (
  <li onClick={() => openModal(srcModal)} className={s.ImageGalleryItem}>
    <img src={src} alt={alt} className={s.ImageGalleryItemImage} />
  </li>
);

ImageGalleryItem.propTypes = {
  src: PropTypes.string.isRequired,
  alt: PropTypes.string.isRequired,
  openModal: PropTypes.func.isRequired,
  srcModal: PropTypes.string.isRequired,
};

export default ImageGalleryItem;
