/* объявление переменных */ 
let editProfile = document.querySelector('.profile__edit-button'); // кнопка открытия попапа
let popup = document.querySelector('.popup'); // попап в DOM
let closeProfile = document.querySelector('.popup__close-button'); // кнопка закрытия попапа


let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__form-input_name_default');
let jobInput = popup.querySelector('.popup__form-input_profession_default');


let nameEdited = document.querySelector('.profile__name');
let jobEdited = document.querySelector('.profile__profession');


/* кнопка открытия попапа */ 
function popupOpener() {
    popup.classList.add('popup_opened');
    nameInput.value = nameEdited.textContent;
    jobInput.value = jobEdited.textContent;
} 

/* кнопка закрытия попапа */ 
function popupCloser() {
    popup.classList.remove('popup_opened');
}

/* кнопка сохранить форму */ 
function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.
    
    nameEdited.textContent = nameInput.value;
    jobEdited.textContent = jobInput.value;
    popupCloser();
}

editProfile.addEventListener('click', popupOpener);
closeProfile.addEventListener('click', popupCloser);
formElement.addEventListener('submit', formSubmitHandler);