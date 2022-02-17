const validationConfig = {
  formElement: ".popup__form",
  fieldsetList: ".popup__set",
  inputElement: ".popup__input",
  buttonElement: "popup__button",
  buttonElementInactive: "popup__input_type_error",
  errorElement: "popup__input-error_active"
}

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.add(validationConfig.buttonElementInactive);
  errorElement.textContent = errorMessage;
  errorElement.classList.add(validationConfig.errorElement);
};

const hideInputError = (formElement, inputElement) => {
  const errorElement = formElement.querySelector(`.${inputElement.id}-error`);
  inputElement.classList.remove(validationConfig.buttonElementInactive);
  errorElement.classList.remove(validationConfig.errorElement);
  errorElement.textContent = "";
};

const checkInputValidity = (formElement, inputElement) => {
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll("input.popup__input"));
  const buttonElement = formElement.querySelector("."+validationConfig.buttonElement);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);

      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = (obj) => {
  const formList = Array.from(document.querySelectorAll(obj.formElement));
  formList.forEach((formElement) => {
    formElement.addEventListener("submit", function (evt) {
      evt.preventDefault();
    });
    const fieldsetList = Array.from(
      formElement.querySelectorAll(obj.fieldsetList)
    );

    fieldsetList.forEach((fieldSet) => { 
      setEventListeners(fieldSet);
    });
  });
};

enableValidation(validationConfig);

function hasInvalidInput(inputList) {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
}

function toggleButtonState(inputList, buttonElement) {
  
  if (hasInvalidInput(inputList)) {
    buttonElement.classList.add("popup__button_disabled");
    buttonElement.setAttribute("disabled", true);
  } else {
    buttonElement.classList.remove("popup__button_disabled");
    buttonElement.removeAttribute("disabled", true);
  }
}
