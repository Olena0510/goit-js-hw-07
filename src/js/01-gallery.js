import { galleryItems } from './gallery-items.js';
// Change code below this line
// console.log(galleryListEl);
const galleryListEl = document.querySelector(".gallery");

const addItemGallery = galleryItems.map(({ preview, original, description }) =>
`<div class="gallery__item">
  <a class="gallery__link" href="${original}">
    <img
      class="gallery__image"
      src="${preview}"
      data-source="${original}"
      alt="${description}"
    />
  </a>
</div>`);


galleryListEl.insertAdjacentHTML('beforeend', addItemGallery.join(''));

galleryListEl.addEventListener("click", onClick);

let instance;
function onClick(evt) {
    evt.preventDefault();
    if (evt.target.nodeName !== "IMG") {
        return;
    }

    instance = basicLightbox.create(
        `<img
    src = ${evt.target.dataset.source}
    alt = "${evt.target.alt}"/>`);

    instance.show();

    window.addEventListener("keydown", onEscKeyPress);
}

function onEscKeyPress(evt) {
    if (evt.code !== "Escape") {
        return
    } else {
        instance.close();
      window.removeEventListener("keydown", onEscKeyPress);
    }
      
    }