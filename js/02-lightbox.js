import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");

const markup = createImgItemMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markup);

function createImgItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
        <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
        </a>

    `;
    })
    .join("");
}

new SimpleLightbox(".gallery__item", {
  captionsData: "alt",
  captionSelector: "img",
  captionDelay: 250,
  captionPosition: "bottom",
  close: "true",
});
