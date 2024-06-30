import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';
import { getUrl } from './js/pixabay-api';
import { clearMarkup, createMarkup } from './js/render-functions';
import SimpleLightbox from 'simplelightbox';
import 'simplelightbox/dist/simple-lightbox.min.css';

export const refs = {
  form: document.querySelector('.form-request'),
  imgOut: document.getElementById('img-output'),
  loader: document.querySelector('.loader'),
};

refs.form.addEventListener('submit', handlerSubmit);

const instance = new SimpleLightbox('.list a', {
  captions: true,
  captionsData: 'alt',
  captionPosition: 'bottom',
  captionDelay: 250,
});

let userRequest = null;

function handlerSubmit(evt) {
  evt.preventDefault();
  userRequest = evt.target.searchQuery.value.trim();
  if (!userRequest) {
    iziToast.error({
      message:
        'Sorry, there are no images matching your search query. Please try again!',
      position: 'topRight',
    });
    return;
  }

  refs.loader.style.display = 'block';

  getUrl(userRequest)
    .then(({ hits }) => {
      clearMarkup(refs.imgOut);
      createMarkup([...hits]);
      instance.on();
    })
    .catch(error => console.log(error))
    .finally(() => {
      refs.form.reset();
      instance.refresh();
      refs.loader.style.display = 'none';
    });
}
