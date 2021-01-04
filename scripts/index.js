/* объявление переменных */
const initialCards = [
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
const templateElement = document.querySelector(".template");
const elementsContainer = document.querySelector(".elements");
const editProfile = document.querySelector(".profile__edit-button");
const addCard = document.querySelector(".profile__add-button");
const popupEditProfile = document.querySelector(".popup-profile");
const popupNewCard = document.querySelector(".popup-newCard");
const popupImage = document.querySelector(".popup-image");
const popupSrcImage = document.querySelector(".popup__image");
const popupImageCaption = document.querySelector(".popup__caption");
const root = document.querySelector(".page");

const nameInput = document.querySelector(".popup__form-input_name_default");
const jobInput = document.querySelector(".popup__form-input_profession_default");
const nameEdited = document.querySelector(".profile__name");
const jobEdited = document.querySelector(".profile__profession");
const labelInput = document.querySelector(".popup__form-input_label");
const srcInput = document.querySelector(".popup__form-input_src");


/* объявление функций */ 
function renderList() {
    const elementItems = initialCards.map(renderItem);
    elementsContainer.append(...elementItems);
}

function renderItem(item) {
    const elementItem = templateElement.content.cloneNode(true);
    
    const headerElement = elementItem.querySelector(".element__label");
    headerElement.textContent = item.name;

    const srcElement = elementItem.querySelector(".element__cover");
    srcElement.setAttribute("src", item.link);
    srcElement.setAttribute("alt", "Фотография " + item.name);

    return elementItem;
}

function popupOpener(evt) {
    evt.classList.add("popup_opened");
}

function popupCloser(evt) {
    const pressedButton = evt.target;
    if (pressedButton.classList.contains("popup__close-button")){
      pressedButton.closest(".popup").classList.remove("popup_opened");
}}

function popupLiker(evt) {
    const pressedButton = evt.target;
    if (pressedButton.classList.contains("element__like")) {
        pressedButton.classList.toggle("element__like_active");
    }
}

function popupRemover(evt) {
    const pressedButton = evt.target;
    if (pressedButton.classList.contains("element__delete")) {
        pressedButton.closest(".element").remove();
    }
}

function formSubmitHandler(evt) {
    evt.preventDefault();
    const pressedButton = evt.target;
    if (pressedButton.classList.contains("popup__form-submit")) {
        if (pressedButton.closest(".popup").classList.contains("popup-profile")) {
            nameEdited.textContent = nameInput.value;
            jobEdited.textContent = jobInput.value;
        } 
        else {
            const elementItem = templateElement.content.cloneNode(true);
            const labelElement = elementItem.querySelector(".element__label");
            const coverElement = elementItem.querySelector(".element__cover");
            
            labelElement.textContent = labelInput.value;
            coverElement.setAttribute("src", srcInput.value);
            coverElement.setAttribute("alt", "Фотография " + labelInput.value);

            document.querySelector(".elements").prepend(elementItem);
        }
        pressedButton.closest(".popup").classList.remove("popup_opened");
    }
}

function imageOpener(evt) {
  const pressedImage = evt.target;
  if (pressedImage.classList.contains("element__cover")) {
    popupOpener(popupImage);
    const imageSrc = pressedImage.closest(".element").querySelector(".element__cover");
    const captionSrc = pressedImage.closest(".element").querySelector(".element__label")
    popupSrcImage.setAttribute("src", imageSrc.getAttribute("src"));
    popupSrcImage.setAttribute("alt", captionSrc.textContent);
    popupImageCaption.textContent = captionSrc.textContent;
  }
}

/* слушатели событий */
editProfile.addEventListener("click", function() {
    popupOpener(popupEditProfile);
    nameInput.value = nameEdited.textContent;
    jobInput.value = jobEdited.textContent;
});
addCard.addEventListener("click", function() {
    popupOpener(popupNewCard);
    labelInput.value = "Название места";
    srcInput.value = "Ссылка на картинку";
});

root.addEventListener("click", popupCloser);
root.addEventListener("click", popupLiker);
root.addEventListener("click", popupRemover);
root.addEventListener("click", formSubmitHandler);
root.addEventListener("click", imageOpener);

/* вызов функций */
renderList();