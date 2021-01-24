/* объявление переменных */
export const initialCards = [
    {
      name: "Карачаевск",
      link: "./images/Karachaevsk.jpg"
    },
    {
      name: "Гора Эльбрус",
      link: "./images/Elbrus-1.jpg"
    },
    {
      name: "Домбай",
      link: "./images/Dombay-1.jpg"
    },
    {
      name: "Гора Эльбрус",
      link: "./images/Elbrus-2.jpg"
    },
    {
      name: "Домбай",
      link: "./images/Dombay-2.jpeg"
    },
    {
      name: "Карачаево-Черкессия",
      link: "./images/Cherkessia.jpg"
    }
];


/* объявление класса */ 
export default class Card {
  constructor(data, templateSelector) {
    this._data = data;
    this._templateSelector = templateSelector;
    this._card = null;
  }

  _getTemplate() {
    const elementItem = document
    .querySelector(this._templateSelector)
    .content
    .querySelector(".element")
    .cloneNode(true);

    return elementItem;
  }

  /* обработчики */
  _handleLikeCard() {
    this.classList.toggle("element__like_active");
  }

  _handleDeleteCard() {
    this.closest(".element").remove();
    this._removeDeleteListener;
    this._removeZoomListener;
    this._removetLikeListener;
  }

  _handlePopupImage() {
    const popupImage = document.querySelector(".popup-image");
    const sourceElement = this.closest(".element__cover");
    popupImage.classList.add("popup_opened");
    popupImage.querySelector(".popup__image").src = sourceElement.src;
    popupImage.querySelector(".popup__caption").textContent = sourceElement.alt;
  }


  /* слушатели событий*/
  _setDeleteListener() {
    this._card.querySelector("#delete-button").addEventListener("click", this._handleDeleteCard);
  }

  _removeDeleteListener() {
    this._card.querySelector("#delete-button").removeEventListener("click", this._handleDeleteCard);
  }

  _setZoomListener() {
    this._card.querySelector(".element__cover").addEventListener("click", this._handlePopupImage);
  }

  _removeZoomListener() {
    this._card.querySelector(".element__cover").removeEventListener("click", this._handlePopupImage);
  }

  _setLikeListener() {
    this._card.querySelector("#like-button").addEventListener("click", this._handleLikeCard);
  }

  _removetLikeListener() {
    this.closest("#like-button").removeEventListener("click", this._handleLikeCard);
  }


  /* рендер карточки */
  render() {
    this._card = this._getTemplate();
    this._cover = this._card.querySelector(".element__cover");

    this._card.querySelector(".element__label").textContent = this._data.name;
    this._cover.src = this._data.link;
    this._cover.alt = `Фотография ${this._data.name}`;

    this._setDeleteListener();
    this._setZoomListener();
    this._setLikeListener();
    
    return this._card;
  }
}