/* кнопка сохранить форму */ 
let formElement = document.querySelector('.form'); // Воспользуйтесь методом querySelector()

function formSubmitHandler (evt) {
    evt.preventDefault(); // Эта строчка отменяет стандартную отправку формы.

    // Находим поля формы в DOM
    let nameInput = formElement.querySelector('.form__input-name');// Воспользуйтесь инструментом .querySelector()
    let jobInput = formElement.querySelector('.form__input-profession');// Воспользуйтесь инструментом .querySelector()

    // Получите значение полей из свойства value
    console.log(nameInput.value);
    console.log(jobInput.value);

    // Выберите элементы, куда должны быть вставлены значения полей
    let nameEdited = document.querySelector('.profile__name');
    let jobEdited = document.querySelector('.profile__profession');

    // Вставьте новые значения с помощью textContent
    nameEdited.textContent = nameInput.value;
    jobEdited.textContent = jobInput.value;
}

// Прикрепляем обработчик к форме:
// он будет следить за событием “submit” - «отправка»
formElement.addEventListener('submit', formSubmitHandler); 
formElement.addEventListener('submit', popupCloser); 