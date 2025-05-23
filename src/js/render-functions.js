const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader');

export function createGallery(images) {
  if (!gallery || !Array.isArray(images)) return;

  const markup = images.map(createGalleryItemMarkup).join('');
  gallery.insertAdjacentHTML('beforeend', markup);
}

function createGalleryItemMarkup({
  webformatURL,
  webformatWidth,
  webformatHeight,
  largeImageURL,
  tags,
  likes,
  views,
  comments,
  downloads,
}) {
  return `
    <li class="gallery__item">
      <a class="gallery__link" href="${largeImageURL}">
        <img 
          class="gallery__image"
          src="${webformatURL}" 
          width="${webformatWidth}" 
          height="${webformatHeight}" 
          alt="${tags}" 
          loading="lazy" 
        />
      </a>
      <ul class="gallery__info">
        ${createInfoItem('Likes', likes)}
        ${createInfoItem('Views', views)}
        ${createInfoItem('Comments', comments)}
        ${createInfoItem('Downloads', downloads)}
      </ul>
    </li>`;
}

function createInfoItem(label, value) {
  return `
    <li class="gallery__info-item">
      <p class="gallery__info-text">${label}</p>
      <span class="gallery__info-value">${value}</span>
    </li>`;
}

export function clearGallery() {
  gallery && (gallery.innerHTML = '');
}

export function showLoader() {
  loader?.classList.add('show');
}

export function hideLoader() {
  loader?.classList.remove('show');
}
