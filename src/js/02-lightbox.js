import { galleryItems } from './gallery-items.js';
// Change code below this line

console.log(galleryItems);

const galleryListEl = document.querySelector(".gallery");

const addItemGallery = galleryItems.map(({ preview, original, description }) =>
    `<a class="gallery__item" 
href="${original}">
  <img class="gallery__image" 
  src="${preview}" 
  alt="${description}" />
</a>`
);

galleryListEl.insertAdjacentHTML('beforeend', addItemGallery.join(''));

new SimpleLightbox('.gallery a', {
  captionsData: "alt",
  captionDelay: 250, });
