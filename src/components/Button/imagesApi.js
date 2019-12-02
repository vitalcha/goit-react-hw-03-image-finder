import axios from 'axios';

export const apiImage(
  searchImg = "",
   pageNumber = 1,
  perPage = 12


) =>
axios.get(
  `https://pixabay.com/api/?q=${searchImg}&page=${pageNumber}&key=14443165-14886d9891bf2bd5a88f511a0&image_type=photo&orientation=horizontal&per_page=${perPage}`
)

