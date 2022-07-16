import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onImgClick);

const markup = createImgItemMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markup);

function createImgItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
      <li class="gallery__wrapper">
        <a class="gallery__item" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          alt="${description}"
          />
        </a>
      </li>
    `;
    })
    .join("");
}

function onImgClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("gallery__image")) {
    return new SimpleLightbox(".gallery__item", { captionsData: "alt" });
  }
}
