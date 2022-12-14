import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const imgTarget = document.querySelector('.gallery')
const itemTarget = []

galleryItems.forEach(elem => {
    const galleryLink = document.createElement('a')
	galleryLink.className = 'gallery__link'
	galleryLink.href = elem.original
	const galleryImg = document.createElement('img')
	galleryImg.className = 'gallery__image'
	galleryImg.src = elem.preview
	galleryImg.setAttribute('title', elem.description)
	galleryImg.alt = elem.description

	galleryLink.append(galleryImg)
	itemTarget.push(galleryLink)
})
imgTarget.append(...itemTarget)
