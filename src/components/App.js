import React, { Component } from 'react';
import * as API from './Services/API';
import SearchBar from './Searchbar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import Button from './Button/Button';
import Loader from './Loader/Loader';
import Modal from './Modal/Modal';

class App extends Component {
  state = {
    images: [],
    isLoading: false,
    pageNumber: 1,
    query: '',
    isModalOpen: false,
    bigPicture: '',
  };

  componentDidMount() {
    const { query, pageNumber } = this.state;
    this.getImages(query, pageNumber);
  }

  componentDidUpdate(prevProps, prevState) {
    const { pageNumber, query, images } = this.state;
    if (prevState.pageNumber !== pageNumber || prevState.query !== query) {
      this.getImages(query, pageNumber);
    }
    if (prevState.images !== images && images.length > 12) {
      setTimeout(() => {
        window.scrollTo({
          top: document.documentElement.scrollHeight,
          behavior: 'smooth',
        });
      }, 1000);
    }
  }

  changePage = () => {
    const { images } = this.state;
    if (images.length > 0) {
      this.setState(prevState => ({
        pageNumber: prevState.pageNumber + 1,
      }));
    }
  };

  getImages = (query, page) => {
    this.setState({ isLoading: true });

    API.fetchImages(query, page)
      .then(res =>
        this.setState(prevState => ({
          images: [...prevState.images, ...res.data.hits],
        })),
      )
      .finally(() =>
        setTimeout(() => {
          this.setState({ isLoading: false });
        }, 500),
      );
  };

  onSearch = queryParameter => {
    this.setState({ query: queryParameter, images: [], pageNumber: 1 });
  };

  openModal = bigPicture => {
    this.setState({ isModalOpen: true, bigPicture });
    window.addEventListener('keydown', this.closeModal);
  };

  closeModal = e => {
    if (e.target === e.currentTarget || e.keyCode === 27)
      this.setState({ isModalOpen: false });

    window.removeEventListener('keydown', this.closeModal);
  };

  render() {
    const { images, isLoading, isModalOpen, bigPicture } = this.state;
    return (
      <>
        <SearchBar onSearch={this.onSearch} />
        <ImageGallery items={images} onOpenModal={this.openModal} />
        {isLoading && <Loader />}
        <Button ChangePage={this.changePage} />
        {isModalOpen && (
          <Modal bigPicture={bigPicture} closeModal={this.closeModal} />
        )}
      </>
    );
  }
}

export default App;
