import axios from 'axios';

export const fetchImages = (searchQuery = 'cat', pageNumber = 1) => {
  return axios.get(
    `https://pixabay.com/api/?image_type=photo&orientation=horizontal&per_page=12&page=${pageNumber}&key=14443165-14886d9891bf2bd5a88f511a0&q=${searchQuery}`,
  );
};

export const somethingFunc = () => {};
