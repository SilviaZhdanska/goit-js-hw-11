function getPicturesByQuery(query) {
  const API_KEY = '44780398-b9dbe1b89370a8f5261d05d93';
  const picture = {
    key: 'API_KEY',
    q: 'queryValue',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: 'true',
  };

  return fetch(`https://pixabay.com/api?${picture}`).then(res => {
    //res - відповідь від серверу (обʼєкт типу Response)
    console.log(res);

    // додаткова перевірка для помилки 404 (для того щоб ми попали в блок catch)
    if (!res.ok) {
      throw new Error(res.status); // викид помилки - моментально перерхдимо в блок кетч
    }

    // json() - це метод який викликається на обʼєкті відповіді від серверу та парсить відповідь з джсону в звичайний джс обʼєкт. Повертає проміс
    return res.json();
  });
}

const cardContainer = document.querySelector('.card-container');
const searchForm = document.querySelector('.search-form');

searchForm.addEventListener('submit', handleSearch);

function handleSearch(event) {
  event.preventDefault();

  const form = event.currentTarget; // посилання на елемент форми
  const queryValue = form.elements.query.value.toLowerCase(); // значення, яке написав користувач

  getPicturesByQuery(queryValue) // робимо запит на сервер та отримуємо відповідь
    .then(showPicturesByQuery) // запускаємо функцію, яка відмалює наші карточки
    .catch(onFetchError) // якщо робиться запит на неіснуючого покемона (404) - викликається ця фукнція для обробки помилки
    .finally(() => form.reset()); // після закінчення промісу ми очищуємо дані форми
}

function showPicturesByQuery() {
  let gallery = new SimpleLightbox('.gallery a');
  gallery.on('show.simplelightbox', function () {
    // do something…
  });

  gallery.on('error.simplelightbox', function (e) {
    console.log(e); // some usefull information
  });

  const markup = `<div class="card">
   <div class="card-img-top">
     <img src="${webformatURL}" alt="${tags}">
   </div>
   <div class="card-body">
     <h2 class="card-title">${tags}</h2>
     <p class="card-text">${likes}</p>
     <p class="card-text">${views}</p>
     <p class="card-text">${comments}</p>
     <p class="card-text">${downloads}</p>
   </div>
</div>`;
  cardContainer.innerHTML = markup;
}

function onFetchError(error) {
  alert(
    'Sorry, there are no images matching your search query. Please try again!'
  );
}
