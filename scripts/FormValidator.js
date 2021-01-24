/* объявление переменных */
export const validationConfig = {
  inputSelector: ".popup__input",
  submitButtonSelector: ".popup__button",
  inactiveButtonClass: "popup__button_disabled",
  inputErrorClass: "popup__input_type_error",
  errorClass: "popup__error_visible",
};


/* объявление класса */
export default class FormValidator {
  constructor (config, formSelector) {
    this._config = config;
    this._formSelector = formSelector;
  }

  _showError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.add(this._config.inputErrorClass);
    error.textContent = input.validationMessage;
    error.classList.add(this._config.errorClass);
  }
  
  _hideError(form, input) {
    const error = form.querySelector(`#${input.id}-error`);
    input.classList.remove(this._config.inputErrorClass);
    error.textContent = "";
    error.classList.remove(this._config.errorClass);
  }
  
  _checkInputValidity(form, input) {
    if (input.validity.valid) {
      this._hideError(form, input);
    } else {
      this._showError(form, input);
    }
  }
  
  _setButtonState(button, isActive) {
    if (isActive) {
      button.classList.remove(this._config.inactiveButtonClass);
      button.disabled = false;
    } else {
      button.classList.add(this._config.inactiveButtonClass);
      button.disabled = true;
    }
  }
  
  _setEventListener(form) {
    const inputList = form.querySelectorAll(this._config.inputSelector);
    const submitButton = form.querySelector(this._config.submitButtonSelector);

    inputList.forEach((input)  => {
      input.addEventListener("input", (evt) => {
        this._checkInputValidity(form, input);
        this._setButtonState(submitButton, form.checkValidity());
      });
    });
  }
  
  enableValidation() {
    const form = this._formSelector;
    form.addEventListener("submit", function(evt) {
      evt.preventDefault();
    });
    this._setEventListener(form);
    const submitButton = form.querySelector(this._config.submitButtonSelector);
    this._setButtonState(submitButton, form.checkValidity());
  }

}