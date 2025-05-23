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
const submitButton = form?.querySelector('button[type="submit"]');

document.addEventListener('DOMContentLoaded', () => {
  enableSubmitButton();
});

form.addEventListener('submit', handleFormSubmit);

function handleFormSubmit(event) {
  event.preventDefault();
  const query = event.target.elements['search-text'].value.trim();

  if (!query) {
    showError('Please enter a search query.');
    return;
  }

  disableSubmitButton();
  clearGallery();
  showLoader();

  getImagesByQuery(query)
    .then(({ hits }) => {
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
      showError(`${error.message}. Please try again later.`);
    })
    .finally(() => {
      hideLoader();
      enableSubmitButton();
      form.reset();
    });
}

function initLightbox() {
  new SimpleLightbox('.gallery a', {
    captionsData: 'alt',
    captionDelay: 250,
    scrollZoom: false,
  }).refresh();
}

function showError(message) {
  iziToast.error({
    message,
    position: 'topRight',
    maxWidth: 432,
  });
}

function disableSubmitButton() {
  if (submitButton) {
    submitButton.disabled = true;
  }
}

function enableSubmitButton() {
  if (submitButton) {
    submitButton.disabled = false;
  }
}
