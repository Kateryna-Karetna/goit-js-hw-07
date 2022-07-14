import { galleryItems } from "./gallery-items.js";

const gallery = document.querySelector(".gallery");
gallery.addEventListener("click", onImgClick);

const markup = createImgItemMarkup(galleryItems);
gallery.insertAdjacentHTML("beforeend", markup);

function createImgItemMarkup(galleryItems) {
  return galleryItems
    .map(({ preview, description, original }) => {
      return `
      <div class="gallery__item">
        <a class="gallery__link" href="${original}">
          <img
          class="gallery__image"
          src="${preview}"
          data-source="${original}"
          alt="${description}" 
          />
        </a>
       </div>
    `;
    })
    .join("");
}

function onImgClick(evt) {
  evt.preventDefault();

  if (evt.target.classList.contains("gallery__image")) {
    const instance = basicLightbox.create(`
    <img src="${evt.target.dataset.source}" width="1280"/>
`);
    instance.show();
  }
}
