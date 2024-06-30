import { refs } from '../main';

function createMarkup(arr) {
  const markup = [];
  arr.map(item => {
    const {
      webformatURL,
      largeImageURL,
      tags,
      likes,
      views,
      comments,
      downloads,
    } = item;
    markup.push(
      `<li class="item">
      <a href="${largeImageURL}" class="gallery">
      <img class='item-img' src="${webformatURL}" alt="${tags}" />
      <div class="item-info">
      <div class="item-info__text">Likes <span>${likes}</span></div>
      <div class="item-info__text">Views <span>${views}</span></div>
      <div class="item-info__text">Comments <span>${comments}</span></div>
      <div class="item-info__text">Downloads <span>${downloads}</span></div>
      </div>
      </a>
      </li>`
    );
  });

  // document
  //   .getElementById('img-output')
  //   .insertAdjacentHTML('beforebegin', markup.join(''));

  refs.imgOut.innerHTML = markup.join('');
}

function clearMarkup(element) {
  element.innerHTML = ' ';
}

export { createMarkup, clearMarkup };
