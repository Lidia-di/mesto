const validationConfig = {
  formElement: ".popup__form",
  fieldsetList: ".popup__set",
  inputElement: "input.popup__input",
  buttonElement: "popup__button",
  buttonElementInactive: "popup__input_type_error",
  errorElement: "popup__input-error_active"
}

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(settings.buttonElementInactive);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(settings.errorElement);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(settings.buttonElementInactive);
  errorElement.classList.remove(settings.errorElement);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement, settings) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage, settings);
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(formElement.querySelectorAll(settings.inputElement));
  const buttonElement = formElement.querySelector("."+settings.buttonElement);

  toggleButtonState(inputList, buttonElement,settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement,settings);

      toggleButtonState(inputList, buttonElement,settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = Array.from(document.querySelectorAll(settings.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(
      formElement.querySelectorAll(settings.fieldsetList)
    );

    fieldsetList.forEach((fieldSet) => { 
      setEventListeners(fieldSet, settings);
    });
  });
};

enableValidation(validationConfig);

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement,settings) {
  
  if (hasInvalidInput(inputList, settings)) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.removeAttribute("disabled", true);
  }
}
