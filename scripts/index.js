/* объявление переменных */
const templateElement = document.querySelector(".template");
const elementsContainer = document.querySelector(".elements");
const editProfileBtn = document.querySelector(".profile__edit-button");
const addCardBtn = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup-profile");
const popupNewCard = document.querySelector(".popup-newCard");
const popupImage = document.querySelector(".popup-image");
const popupImageCaption = document.querySelector(".popup__caption");
const popupImageSrc = document.querySelector(".popup__image");

const editProfileForm = document.forms.EditProfile;
const addCardForm = document.forms.AddCard;

const nameInput = document.querySelector(".popup__form-input_name_default");
const jobInput = document.querySelector(".popup__form-input_profession_default");
const nameEdited = document.querySelector(".profile__name");
const jobEdited = document.querySelector(".profile__profession");
const labelInput = document.querySelector(".popup__form-input_label");
const srcInput = document.querySelector(".popup__form-input_src");

const closeButtons = document.querySelectorAll(".popup__close-button");

/* объявление функций */ 
function handleRemoveCard(evt) {
    evt.target.closest(".element").remove();
}

function handleLikeCard(evt) {
    evt.target.classList.toggle("element__like_active");
}

function renderList() {
    const elementItems = initialCards.map(renderItem);
    elementsContainer.append(...elementItems);
}

function renderItem(item) {
    const elementItem = templateElement.content.cloneNode(true);
    
    const headerElement = elementItem.querySelector(".element__label");
    headerElement.textContent = item.name;

    const srcElement = elementItem.querySelector(".element__cover");
    srcElement.src = item.link;
    srcElement.alt = "Фотография " + item.name;

    elementItem.querySelector(".element__delete").addEventListener("click", handleRemoveCard);
    elementItem.querySelector(".element__like").addEventListener("click", handleLikeCard);
    elementItem.querySelector(".element__cover").addEventListener("click", function() {
      handleOpenImagePopup(item);
    });

    return elementItem;
}

function handleOpenFormPopup(popup) {
    popup.classList.add("popup_opened");
};

function handleOpenImagePopup(popup) {
    popupImage.classList.add("popup_opened");
    popupImageCaption.textContent = popup.name;
    popupImageSrc.src = popup.link;
    popupImageSrc.alt = "Фотография " + popup.name;
};

function handleClosePopup(evt) {
    const popup = evt.target.closest(".popup");
    popup.classList.remove("popup_opened");
}

function handleProfileSubmit(evt) {
    evt.preventDefault();
    nameEdited.textContent = nameInput.value;
    jobEdited.textContent = jobInput.value;
    handleClosePopup(evt);
}

function handleCardSubmit(evt) {
    evt.preventDefault();
    const newCardInputs = {name: labelInput.value, link: srcInput.value};
    newCard = renderItem(newCardInputs);
    elementsContainer.prepend(newCard);
    addCardForm.reset();
    handleClosePopup(evt);
}

/* слушатели страницы */
editProfileBtn.addEventListener("click", function() {
    handleOpenFormPopup(popupEditProfile);
    nameInput.value = nameEdited.textContent;
    jobInput.value = jobEdited.textContent;
});
addCardBtn.addEventListener("click", function() {
    handleOpenFormPopup(popupNewCard);
});
editProfileForm.addEventListener("submit", function(evt) {
    handleProfileSubmit(evt);
});
addCardForm.addEventListener("submit", function(evt) {
    handleCardSubmit(evt);
});

closeButtons.forEach((item) => {
  item.addEventListener("click", function(evt) {
    handleClosePopup(evt);
  })
});

/* вызов функций */
renderList();
