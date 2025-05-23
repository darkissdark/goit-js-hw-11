import { getImagesByQuery } from './js/pixabay-api.js';
import {
  createGallery,
  clearGallery,
  showLoader,
  hideLoader,
} from './js/render-functions.js';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');

form.addEventListener('submit', onFormSubmit);

function onFormSubmit(event) {
  event.preventDefault();
  clearGallery();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    showError('Please enter a search query.');
    return;
  }

  showLoader();

  getImagesByQuery(query)
    .then(({ hits }) => {
      hideLoader();

      if (hits.length === 0) {
        showError(
          'Sorry, there are no images matching your search query. Please, try again!'
        );
        return;
      }

      createGallery(hits);
      initLightbox();
    })
    .catch(error => {
      hideLoader();
      showError(`${error.message}. Please try again later.`);
    })
    .finally(() => {
      form.reset();
    });
}

function initLightbox() {
  const lightbox = new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
  });
  lightbox.refresh();
}

function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    maxWidth: 432,
  });
}
