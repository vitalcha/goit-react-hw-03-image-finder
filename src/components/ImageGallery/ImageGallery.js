import React from 'react';
import Proppes from 'prop-types';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import abc from './ImageGallery.module.css';

const ImageGallery = ({ items, onOpenModal }) => {
  return (
    <ul className={abc.ImageGallery}>
      {items.map(el => (
        <ImageGalleryItem onOpenModal={onOpenModal} key={el.id} dataObj={el} />
      ))}
    </ul>
  );
};

export default ImageGallery;

ImageGallery.propTypes = {
  items: Proppes.arrayOf(
    Proppes.shape({
      id: Proppes.number,
      webformatURL: Proppes.string,
    }).isRequired,
  ).isRequired,
  onOpenModal: Proppes.func.isRequired,
};
