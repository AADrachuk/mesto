/* импорт данных */
import {initialCards} from "./Card.js";
import Card from "./Card.js";

import {validationConfig} from "./FormValidator.js";
import FormValidator from "./FormValidator.js";

/* объявление переменных */ 
const elementsContainer = document.querySelector(".elements");
const editProfileBtn = document.querySelector(".profile__edit-button");
const addCardBtn = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup-profile");
const popupNewCard = document.querySelector(".popup-newCard");

const editProfileForm = document.querySelector("#form-EditProfile");
const addCardForm = document.querySelector("#form-AddCard");

const nameInput = document.querySelector(".popup__input_name_default");
const jobInput = document.querySelector(".popup__input_profession_default");

const nameEdited = document.querySelector(".profile__name");
const jobEdited = document.querySelector(".profile__profession");
const labelInput = document.querySelector(".popup__input_label");
const srcInput = document.querySelector(".popup__input_src");
const popupsList = document.querySelectorAll(".popup");
const formList = document.querySelectorAll(".popup__form");


/* объявление функций */
function openPopup(popup) {
  popup.classList.add("popup_opened");
  document.addEventListener("keydown", closeByEscape);
}

function closeByEscape(evt) {
  if (evt.key === "Escape") {
    const openedPopup = document.querySelector(".popup_opened");
    closePopup(openedPopup);
  }
}

function closePopup(popup) {
  popup.classList.remove("popup_opened");
  document.removeEventListener("keydown", closeByEscape);
}

function handleProfileSubmit(evt) {
  evt.preventDefault();
  nameEdited.textContent = nameInput.value;
  jobEdited.textContent = jobInput.value;
  closePopup(evt.target.closest(".popup"));
}

function handleCardSubmit(evt) {
  evt.preventDefault();
  const newCardInputs = { name: labelInput.value, link: srcInput.value };
  const card = new Card(newCardInputs, "#card-template").render();
  closePopup(evt.target.closest(".popup"));
  elementsContainer.prepend(card);
  addCardForm.reset();
}


/* слушатели событий */
editProfileBtn.addEventListener("click", function () {
  nameInput.value = nameEdited.textContent;
  jobInput.value = jobEdited.textContent;
  openPopup(popupEditProfile);
});

addCardBtn.addEventListener("click", function () {
  openPopup(popupNewCard);
});

editProfileForm.addEventListener("submit", handleProfileSubmit);

addCardForm.addEventListener("submit", handleCardSubmit);

popupsList.forEach((popup) => {
  popup.addEventListener("click", function (evt) {
    if (
      evt.target.classList.contains("popup_opened") ||
      evt.target.classList.contains("popup__container") ||
      evt.target.classList.contains("popup__close-button")
    ) {
      closePopup(popup);
    }
  });
});


/* рендер карточек */ 
initialCards.forEach( function(item) {
  const card = new Card(item, "#card-template").render();
  elementsContainer.append(card);
})


/* валидация форм */
formList.forEach(function(form) {
  const validationFormAdd = new FormValidator(validationConfig, form);
  validationFormAdd.enableValidation();
})