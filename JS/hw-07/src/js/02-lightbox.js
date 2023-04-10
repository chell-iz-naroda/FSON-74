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

    const lightbox = new SimpleLightbox('.gallery__item a', { 
        captions: true, // включення підписів
        captionsData: "alt", // зчитування підписів з атрибута alt
        captionsDelay: 250, // затримка появи підпису
        animationSpeed: 150, // швидкість анімації
        loop: true, // зациклювання галереї
        closeText: "Закрити", // текст на кнопці закриття
        nextText: "Наступне", // текст на кнопці наступного зображення
        prevText: "Попереднє", // текст на кнопці попереднього зображення
        disableScroll: false, // заборона прокрутки сторінки при відкритті галереї
        docClose: true, // закриття галереї при кліку на тло
        swipeClose: true // закриття галереї при змаху пальцем на мобільних пристроях/ 
    });

    lightbox.open();

    const ImageSrc = target.dataset.source;
    document.addEventListener('keydown', handleEscapePress);

function handleEscapePress(event) {
    if (event.code !== 'Escape') {
        return
    };

    lightbox.close();
    document.removeEventListener('keydown', handleEscapePress);
}
}