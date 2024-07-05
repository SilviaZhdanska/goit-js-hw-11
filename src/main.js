import { getPicturesByQuery } from './js/pixabay-api.js';
import {
  renderGallery,
  showNoResultsMessage,
  showFetchErrorMessage,
} from './js/render-functions.js';

const searchForm = document.querySelector('.search-form');
const loader = document.querySelector('.loader');

loader.style.display = 'none';

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget;
  const queryValue = form.elements.query.value.trim().toLowerCase();

  if (!queryValue) {
    return;
  }

  loader.style.display = 'inline-block';

  getPicturesByQuery(queryValue)
    .then(data => {
      loader.style.display = 'none';

      if (data.hits.length === 0) {
        showNoResultsMessage();
      } else {
        renderGallery(data.hits);
      }
    })
    .catch(error => {
      console.error('Error:', error);
      loader.style.display = 'none';
      showFetchErrorMessage();
    })
    .finally(() => form.reset());
}
