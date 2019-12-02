import React, { Component } from 'react';
import Searchbar from './Searchbar/Searchbar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';
import s from './App.module.css';
import * as API from '../services/images-api';

const mapper = images => {
  return images.map(
    ({ id, webformatURL: src, largeImageURL: srcModal, tags: alt }) => ({
      id,
      src,
      srcModal,
      alt,
    }),
  );
};

export default class App extends Component {
  state = {
    images: [],
    isFetching: false,
    isOpenModal: false,
    searchQuery: '',
    pageNumber: 1,
    srcModal: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { images } = this.state;
    if (prevState.images !== images) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    }
  }

  onClose = () => {
    this.setState({ isOpenModal: false });
  };

  handleSubmit = searchQuery => {
    this.setState({ isFetching: true, searchQuery });
    API.fetchImages(searchQuery)
      .then(resData => {
        this.setState({ images: mapper(resData.data.hits) });
      })
      .finally(() => this.setState({ isFetching: false }));
  };

  handleClick = () => {
    const { searchQuery, pageNumber } = this.state;

    this.setState({ isFetching: true, searchQuery });
    API.fetchImages(searchQuery, pageNumber + 1)
      .then(resData => {
        this.setState(state => ({
          images: [...state.images, ...mapper(resData.data.hits)],
          pageNumber: state.pageNumber + 1,
        }));
      })
      .finally(() => this.setState({ isFetching: false }));
  };

  openModal = srcModal => {
    this.setState({ isOpenModal: true, srcModal });
  };

  render() {
    const { isFetching, isOpenModal, images, srcModal } = this.state;

    return (
      <div className={s.App}>
        <Searchbar onSearch={this.handleSubmit} />
        <ImageGallery images={images} openModal={this.openModal} />
        {images.length > 0 && <Button handleClick={this.handleClick} />}
        {isFetching && <Loader />}
        {isOpenModal && <Modal onClose={this.onClose} srcModal={srcModal} />}
      </div>
    );
  }
}
