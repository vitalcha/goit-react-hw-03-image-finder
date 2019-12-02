import axios from 'axios';

const URL = 'https://pixabay.com/api/';
const KEY = '14155039-2b4040c1c4fa92b0ee1001d0b';

export const fetchImages = (
  searchQuery = '',
  pageNumber = 1,
  perPageNumber = 12,
) =>
  axios.get(
    `${URL}?q=${searchQuery}&page=${pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=${perPageNumber}`,
  );

export const somethingFunc = () => {};
