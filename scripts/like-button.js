/* скрипт кнопок с лайком */ 
let like = document.querySelector('.rectangle__like');

function likeToggler() {
    like.classList.toggle('rectangle__like_active');
} 

like.addEventListener('click', likeToggler);