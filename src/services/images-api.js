import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '14443165-14886d9891bf2bd5a88f511a0';

export const fetchImages = (
  searchQuery = '',
  pageNumber = 1,
  perPageNumber = 12,
) =>
  axios.get(
    `${URL}?q=${searchQuery}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPageNumber}`,
  );

export const somethingFunc = () => {};
