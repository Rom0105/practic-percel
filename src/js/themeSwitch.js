import { galleryItems } from './galleryItems';
import { refs } from './refs';

let activeIndex = null;

function createGalleryCards(items) {
  return items.map(({ preview, original, description }) => {
    return `<li class="gallery__item">
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
    </li>`;
  });
}

refs.galleryList.innerHTML = createGalleryCards(galleryItems).join('');

refs.galleryList.addEventListener('click', onModalOpen);

function onModalOpen(event) {
  event.preventDefault();
  if (!event.target.classList.contains('gallery__image')) {
    return;
  }
  refs.lightBox.classList.add('is-open');
  refs.lightboxImage.src = event.target.dataset.source;
  createGalleryCards(galleryItems).forEach((element, ind) => {
    if (element.includes(event.target.src)) {
      activeIndex = ind;
    }
  });
  window.addEventListener('keydown', changeByArrows);
  window.addEventListener('keydown', closeByEscape);
}

refs.lightBox.addEventListener('click', closeModal);

function closeModal(event) {
  if (event?.target.nodeName === 'IMG') {
    return;
  }
  refs.lightboxImage.src = '';
  refs.lightBox.classList.remove('is-open');
  window.addEventListener('keydown', changeByArrows);
  window.removeEventListener('keydown', closeByEscape);
}

function closeByEscape(event) {
  if (event.key !== 'Escape') {
    return;
  }
  closeModal();
}
function changeByArrows(event) {
  if (event.key === 'ArrowRight' && activeIndex < galleryItems.length - 1) {
    activeIndex += 1;
    refs.lightboxImage.src = galleryItems[activeIndex].original;
    return;
  }
  if (event.key === 'ArrowLeft' && activeIndex > 0) {
    activeIndex -= 1;
    refs.lightboxImage.src = galleryItems[activeIndex].original;
    return;
  }
  if (event.key === 'ArrowRight' && activeIndex === galleryItems.length - 1) {
    activeIndex = 0;
    refs.lightboxImage.src = galleryItems[activeIndex].original;
    return;
  }
  if (event.key === 'ArrowLeft' && activeIndex === 0) {
    activeIndex = galleryItems.length - 1;
    refs.lightboxImage.src = galleryItems[activeIndex].original;
    return;
  }
}

// function keyboardManipulation({ key }) {
//   switch (key) {
//     case gallery.length - 1 > activeIndex && 'ArrowRight':
//       activeIndex += 1;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case activeIndex > 0 && 'ArrowLeft':
//       activeIndex -= 1;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case activeIndex === gallery.length - 1 && 'ArrowRight':
//       activeIndex = 0;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case activeIndex === 0 && 'ArrowLeft':
//       activeIndex = gallery.length - 1;
//       refs.modalImg.src = gallery[activeIndex].original;
//       break;
//     case 'Escape':
//       closeModal();
//       break;
//     default:
//       alert('что-то пошло не так');
//   }
// }
