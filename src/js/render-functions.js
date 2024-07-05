import iziToast from 'izitoast';
import SimpleLightbox from 'simplelightbox';
import 'izitoast/dist/css/iziToast.min.css';
import 'simplelightbox/dist/simple-lightbox.min.css';

const cardContainer = document.querySelector('.card-container');

export function renderGallery(images) {
  const cardContainer = document.querySelector('.card-container');
  const markup = images
    .map(
      image => `
    <div class="card">
      <div class="card-img-top">
        <a href="${image.largeImageURL}">
          <img src="${image.webformatURL}" alt="${image.tags}">
        </a>
      </div>
      <div class="card-body">
        <h2 class="card-title">${image.tags}</h2>
        <p class="card-text">Likes: ${image.likes}</p>
        <p class="card-text">Views: ${image.views}</p>
        <p class="card-text">Comments: ${image.comments}</p>
        <p class="card-text">Downloads: ${image.downloads}</p>
      </div>
    </div>
  `
    )
    .join('');

  cardContainer.innerHTML = markup;

  const lightbox = new SimpleLightbox('.card-img-top a', {
    captions: true,
    captionsData: 'alt',
  });

  lightbox.refresh();
}

export function showNoResultsMessage() {
  iziToast.info({
    title: 'Info',
    message:
      'Sorry, there are no images matching your search query. Please try again!',
  });
}

export function showFetchErrorMessage() {
  console.error('Error fetching images');
  iziToast.error({
    title: 'Error',
    message:
      'Sorry, there was an error fetching images. Please try again later.',
  });
}
