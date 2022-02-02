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

//  открыть форму добавления места кликом по иконке + ___________
let AddButton = document.querySelector('.profile__add-button');
let popupAdd_window = document.querySelector('.popup-add');
let popupAdd_opened = document.querySelector('.popup-add_opened');

function open_popupAdd() {
popupAdd_window.classList.add('popup-add_opened');
}
AddButton.addEventListener('click', open_popupAdd);
//  закрыть форму добавления места кликом по иконке крестик________________
let popupAdd_close = document.querySelector('.popup-add__close-icon');

function close_popupAdd() {
    popupAdd_window.classList.remove('popup-add_opened');
}
popupAdd_close.addEventListener('click', close_popupAdd);

//  добавление карточек при загрузке _______________________
const initialCards = [
    {
      name: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      name: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      name: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      name: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      name: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      name: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ];
  const cardTemplate = document.querySelector('.card__template').content;
  const cardList = document.querySelector('.photo-grid__list');
  const cardImg = document.querySelector('.photo-grid__card-image');
  const cardDescr = document.querySelector('.photo-grid__card-title');
  const addPlaceButton = document.querySelector('.popup-add__save-button');
  const fullscreenPopup = document.querySelector('.fullscreen-img');
  const largeImage = document.querySelector('.fullscreen-img__image');
  const captionPopup = document.querySelector('.fullscreen-img__caption');
  const closeImage = document.querySelector('.fullscreen-img__close-icon');
  
  function render() {
    initialCards.forEach(renderCards)
  }

  function renderCards(element) {
      const newCard = cardTemplate.cloneNode(true);
      const cardImage = newCard.querySelector('.photo-grid__card-image');
      cardImage.setAttribute('src', element.link);
      cardImage.addEventListener('click', fullscreenImage);
      newCard.querySelector('.photo-grid__card-title').innerText = element.name;
      
      addListeners(newCard)
      addListenersLike(newCard)

      cardList.appendChild(newCard);

  }

  render();
  
  function fullscreenImage(element) {
    fullscreenPopup.classList.add('fullscreen-img_opened');
    captionPopup.innerText = element.path[1].querySelector('.photo-grid__card-title').innerText;
  	largeImage.setAttribute('src',element.path[1].querySelector('.photo-grid__card-image').src);
  }
  
  function smallImage(event) {
    fullscreenPopup.classList.remove('fullscreen-img_opened');
  }
  closeImage.addEventListener('click', smallImage);

// удаление карточки по клику на корзину _______________________
    function addListeners(el) {
        el.querySelector('.photo-grid__delete').addEventListener('click', handleDelete)
    }

    function handleDelete(event) {
        event.target.closest('.photo-grid__card').remove();
    }
// активация лайка _______________________
    function addListenersLike(el) {
         el.querySelector('.photo-grid__card-like').addEventListener('click', likeAdd)
    }

    function likeAdd(event) {
        event.target.classList.toggle("photo-grid__card-like_active");
    }
//  добавление новой карточки через форму попап _______________________
    const imgInput = document.querySelector('.popup-add__type_input_url');
    const placeInput = document.querySelector('.popup-add__type_input_name');
    const formAddElement = document.querySelector('.popup-add__field');

    function addNewCards(element) {
        const newCard = cardTemplate.cloneNode(true);
        newCard.querySelector('.photo-grid__card-image').setAttribute('src', imgInput.value);
        newCard.querySelector('.photo-grid__card-title').innerText = placeInput.value;
  
        addListeners(newCard)
        addListenersLike(newCard)
        showImage(newCard)
  
        cardList.appendChild(newCard);
    }

    function addPlaceSubmitHandler (evt) {
        evt.preventDefault();
        addNewCards();

        close_popupAdd();
    }

    formAddElement.addEventListener('submit', addPlaceSubmitHandler);


  
// https://images.unsplash.com/photo-1643475246169-dd57253b646a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80    тестик