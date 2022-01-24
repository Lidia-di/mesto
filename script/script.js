//  открыть редактирование профиля кликом по иконке ручка______________________
let edit_button = document.querySelector('.profile__edit-button');
let popup_window = document.querySelector('.popup');
let popup_opened = document.querySelector('.popup_opened');

function open_popup() {  
    popup_window.classList.add('popup_opened');
}
edit_button.addEventListener('click', open_popup);
//  закрыть редактирование профиля кликом по иконке крестик________________
let popup_close = document.querySelector('.popup__close-icon');

function close_popup() {
    popup_window.classList.remove('popup_opened');
}
popup_close.addEventListener('click', close_popup);
// Занесение текста в форму
let formElement = document.querySelector('.popup__field');
let fullname = document.querySelector('.profile__title');
let profession = document.querySelector('.profile__subtitle');
let nameInput = document.querySelector('.popup__type_fullname');
let jobInput = document.querySelector('.popup__type_profession');

nameInput.value = fullname.textContent;
jobInput.value = profession.textContent;

function formSubmitHandler (evt) {
    evt.preventDefault(); 
    fullname.value = nameInput.textContent;
    profession.value = jobInput.textContent;
}
formElement.addEventListener('submit', formSubmitHandler);
//  закрыть редактирование профиля кликом по кнопке сохранить_____________
let popup_save = document.querySelector('.popup__save-button');