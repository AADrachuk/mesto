/* кнопка закрытия попапа */ 
let closeProfile = document.querySelector('.popup__close-button');

function popupCloser() {
    let popup = document.querySelector('.popup');
    popup.classList.toggle('popup_opened')
}

closeProfile.addEventListener('click', popupCloser);