//  открыть редактирование профиля кликом по иконке ручка с замесением контента в поле ввода___________
let edit_button = document.querySelector('.profile__edit-button');
let popup_window = document.querySelector('.popup');
let popup_opened = document.querySelector('.popup_opened');

let formElement = document.querySelector('.popup__field');
let nameInput = document.querySelector('.popup__type_input_name');
let jobInput = document.querySelector('.popup__type_input_profession');

let profileName = document.querySelector('.profile__title');
let profileProfession = document.querySelector('.profile__subtitle');

function open_popup() {
    popup_window.classList.add('popup_opened');
    nameInput.value = profileName.textContent;
    jobInput.value = profileProfession.textContent;
}
edit_button.addEventListener('click', open_popup);
// Занесение текста в форму и закрытие попапа с изменением контента__________
function formSubmitHandler (evt) {
    evt.preventDefault();
    profileName.textContent = nameInput.value;
    profileProfession.textContent = jobInput.value;
    close_popup();
}
formElement.addEventListener('submit', formSubmitHandler);
//  закрыть редактирование профиля кликом по иконке крестик________________
let popup_close = document.querySelector('.popup__close-icon');

function close_popup() {
    popup_window.classList.remove('popup_opened');
}
popup_close.addEventListener('click', close_popup);