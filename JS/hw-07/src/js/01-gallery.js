import { galleryItems } from './gallery-items.js';
// Change code below this line

// console.log(galleryItems);
const gallery = document.querySelector('.gallery');

const galleryHTML = galleryItems.map(({preview, original, description}) => {
    return `
    <li class="gallery__item">
        <a
          class="gallery__link"
          href="${original}"
        >
          <img
            class="gallery__image"
            src="${preview}"
            data-source="${original}"
            alt="${description}"
          />
        </a>
      </li>
      `;

}).join('');

gallery.insertAdjacentHTML('beforeend', galleryHTML);


gallery.addEventListener('click', handleGalleryClick);

function handleGalleryClick(event) {
    event.preventDefault();

    let target = event.target;

    if (target.nodeName !== "IMG") {
        return
    };

    const ImageSrc = target.dataset.source;

    const instance = basicLightbox.create(`
    <img src="${ImageSrc}" alt="${target.alt}" />
    `);

    instance.show();

    document.addEventListener('keydown', handleEscapePress);

function handleEscapePress(event) {
    if (event.code !== 'Escape') {
        return
    };

    instance.close();
    document.removeEventListener('keydown', handleEscapePress);
}
}