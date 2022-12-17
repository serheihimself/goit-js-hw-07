import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgTarget = document.querySelector('.gallery');
const imgMarkup = galleryItems.map(({ preview, description, original }) =>
      `<a class="gallery__item" href="${original}">
		<img class="gallery__image" src="${preview}" alt="${description}" /></a>`
  ).join('');

imgTarget.insertAdjacentHTML('beforeend', imgMarkup);

new SimpleLightbox('.gallery a', {
  captionsData: 'alt',
  captionDelay: 250,
  captionPosition: 'bottom',
});