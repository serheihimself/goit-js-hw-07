import { galleryItems } from './gallery-items.js';
// Change code below this line
console.log(galleryItems);

const imgElem = document.querySelector('.gallery');
const imgMarkup = getCards(galleryItems);

imgElem.insertAdjacentElement('beforeend', imgMarkup);
imgElem.addEventListener('click', onImgClick);

function getCards() {
  return galleryItems.map(({ preview, original, description })=> {
    return `<div class="gallery__item"><a class="gallery__link" href="${original}">
        <img class="gallery__image" src="${preview}" 
        data-source="${original}" alt="${description}"/></a>
    </div>`;
  }).join("")
}