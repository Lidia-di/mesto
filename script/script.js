// лайк _________________________________________________________________
let like = document.querySelectorAll('.photo-grid__card-like');
let like_disabled = document.querySelector('.photo-grid__card-like_disabled');
let like_active = document.querySelector('.photo-grid__card-like_active');

function like_click() {
    let this_like = this;
    if (this_like.classList.contains('photo-grid__card-like_disabled') === true) {
        this_like.classList.add('photo-grid__card-like_active');
        this_like.classList.remove('photo-grid__card-like_disabled');
    } else {
        this_like.classList.add('photo-grid__card-like_disabled');
        this_like.classList.remove('photo-grid__card-like_active');
    }
}
like.forEach(like_switch => like_switch.addEventListener('click', like_click));
//  открыть редактирование профиля кликом по иконке ручка______________________
let edit_button = document.querySelector('.profile__edit-button');
let popup_window = document.querySelector('.popup');

function open_popup() {
    popup_window.setAttribute("style", 'display:block');
}
edit_button.addEventListener('click', open_popup);
//  закрыть редактирование профиля кликом по иконке крестик________________
let popup_close = document.querySelector('.popup__close-icon');

function close_popup() {
    popup_window.setAttribute("style", 'display:none');
}
popup_close.addEventListener('click', close_popup);
//  закрыть редактирование профиля кликом по кнопке сохранить_____________
let popup_save = document.querySelector('.popup__save-button');

function save_popup() {
    popup_window.setAttribute("style", 'display:none');
}
popup_save.addEventListener('click', save_popup);