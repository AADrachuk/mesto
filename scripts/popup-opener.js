/* кнопка открытия попапа */
let editProfile = document.querySelector('.profile__edit-button');

function popupOpener() {
    let popup = document.querySelector('.popup');
    popup.classList.toggle('popup_opened')
} 

editProfile.addEventListener('click', popupOpener);