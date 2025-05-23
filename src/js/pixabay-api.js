import axios from 'axios';

const API_KEY = import.meta.env.VITE_PIXABAY_API_KEY;
const BASE_URL = 'https://pixabay.com/api/';

export function getImagesByQuery(query) {
  return axios
    .get(BASE_URL, {
      params: {
        key: API_KEY,
        q: query,
        image_type: 'photo',
        orientation: 'horizontal',
        safesearch: true,
      },
    })
    .then(response => response.data)
    .catch(error => {
      throw new Error(error.message);
    });
}

export default getImagesByQuery;
