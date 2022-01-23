let edit_button = document.querySelector('.profile__edit-button');
let popup_window = document.querySelector('.popup');
let popup_opened = document.querySelector('.popup_opened');
let popup_field = document.querySelector('.popup__field');
let fullname = document.querySelector('.profile__title');
let profession = document.querySelector('.profile__subtitle');
let inputFullname = document.querySelector('.popup__type_fullname');
let inputProfession = document.querySelector('.popup__type_profession');

//  открыть редактирование профиля кликом по иконке ручка______________________
function open_popup() {  
    popup_window.classList.add('popup_opened');
    inputFullname.value = fullname.textContent;
    inputProfession.value = profession.textContent;
}
edit_button.addEventListener('click', open_popup);
//  закрыть редактирование профиля кликом по иконке крестик________________
let popup_close = document.querySelector('.popup__close-icon');

function close_popup() {
    popup_window.classList.remove('popup_opened');
}
popup_close.addEventListener('click', close_popup);
//  закрыть редактирование профиля кликом по кнопке сохранить_____________
let popup_save = document.querySelector('.popup__save-button');

function formSubmitHandler (evt) {
    evt.preventDefault();
}
formElement.addEventListener('submit', formSubmitHandler); 