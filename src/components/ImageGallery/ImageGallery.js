import React from 'react';
import PropTypes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';

const ImageGallery = ({ images, openModal }) => (
  <ul className={s.ImageGallery}>
    {images.map(el => (
      <ImageGalleryItem
        openModal={openModal}
        key={el.id}
        src={el.src}
        alt={el.alt}
        srcModal={el.srcModal}
      />
    ))}
  </ul>
);

ImageGallery.propTypes = {
  openModal: PropTypes.func.isRequired,
  images: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      src: PropTypes.string.isRequired,
      alt: PropTypes.string.isRequired,
      srcModal: PropTypes.string.isRequired,
    }).isRequired,
  ).isRequired,
};

export default ImageGallery;
