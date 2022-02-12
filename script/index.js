const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const popupEdit = document.querySelector('.popup_type_profile-edit');
const formElementEdit = document.querySelector('.popup__form_type_profile-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const popupEditClose = document.querySelector('.popup__close-icon_type_profile-edit');

const popupAdd = document.querySelector('.popup_type_add');
const formElementAdd = document.querySelector('.popup__form_type_add');
const placeInput = document.querySelector('.popup__input_type_place');
const imgInput = document.querySelector('.popup__input_type_url');
const buttonAddPlace = document.querySelector('.popup__save-button_type_add');
const popupAddClose = document.querySelector('.popup__close-icon_type_add');

const cardTemplate = document.querySelector('.card__template').content;
const cardList = document.querySelector('.photo-grid__list');
const cardImg = document.querySelector('.photo-grid__card-image');
const cardDescr = document.querySelector('.photo-grid__card-title');
const card = document.querySelector('.photo-grid__card');

const popupFullscreen = document.querySelector('.popup_type_fullscreen');
const imageFullscreen = document.querySelector('.popup__image');
const captionPopup = document.querySelector('.popup__caption');
const imageClose = document.querySelector('.popup__close-icon_type_fullscreen');

const popup = document.querySelector('.popup');
const popupContainer = document.querySelector('.popup__container');

//--------------------------------------POPUP OPEN-------------------------------------------------
function openPopup (popup) {
 popup.classList.add('popup_opened');
}
//--------------------------------------POPUP CLOSE-------------------------------------------------
function closePopup (popup) {
 popup.classList.remove('popup_opened');
}
function keyHandler (evt) {  // не работает ;((((
  if (evt.keyCode === 27) {
    const openedPopup = document.querySelector('.popup_opened');
    closePopup(popup);
  }
 }
function clickHandler (evt) {
  if (evt.target.closest('.popup__container') === null) {  // не работает ;((((
    closePopup(popup);
  }
  evt.stopPropagation();
  }
 
//--------------------------------------TEXT CONTENT POPUP EDIT-------------------------------------
function input() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
//--------------------------------------ADD CONTENT IN PROFILE FROM POPUP-EDIT INPUT--------------------------
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupEdit);
}
//--------------------------------------CREATE CARD FOR NEXT INSERT---------------------------------
function createCard(el) {
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.photo-grid__card-image').src = el.link;
  cardElement.querySelector('.photo-grid__card-image').alt = el.name;
  cardElement.querySelector('.photo-grid__card-title').textContent = el.name;
//--------------------------------------listeners for different events------------------------------
  cardElement.querySelector('.photo-grid__card-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle("photo-grid__card-like_active")});
  cardElement.querySelector('.photo-grid__delete').addEventListener('click', (evt) => {
    evt.target.closest('.photo-grid__card').remove()});
    cardElement.querySelector('.photo-grid__card-image').addEventListener('click', fullscreenImage)
  return cardElement;
}
//--------------------------------------ADDING CARDS------------------------------------------------
function renderCard(el) {
   const newCard = createCard(el)
   cardList.append(newCard);
}
cardsInitial.forEach(renderCard);
//--------------------------------------ADD NEW CARD IN CARD-LIST FROM POPUP-ADD INPUT---------------
 function formAddHandler(evt) {
   evt.preventDefault();
   const link = imgInput.value;
   const name = placeInput.value;
   renderCard({name, link})
   closePopup(popupAdd);
}
//--------------------------------------FULLSCREEN FORMAT WITH CONTENT--------------------------------
function fullscreenImage(evt) {
  openPopup(popupFullscreen);
  captionPopup.innerText = evt.path[1].querySelector('.photo-grid__card-title').innerText;
  imageFullscreen.src = evt.target.src;
  imageFullscreen.alt = evt.target.alt;
  }
//--------------------------------------ALL OTHER BUTTONS LISTENERS------------------------------------
buttonEdit.addEventListener('click', input);
formElementEdit.addEventListener('submit', formSubmitHandler);
formElementAdd.addEventListener('submit', formAddHandler);
popupEditClose.addEventListener('click', function(){closePopup(popupEdit)});
popupEdit.addEventListener('keydown', function(){keyHandler(evt)});  // не работает ;((((
popup.addEventListener('click', function(){clickHandler});  // не работает ;((((
popupAddClose.addEventListener('click', function(){closePopup(popupAdd)});
popupAddClose.addEventListener('keydown', function(){keyHandler(popupAdd)});
buttonAdd.addEventListener('click', function(){openPopup(popupAdd)});
imageClose.addEventListener('click', function(){closePopup(popupFullscreen)});

//--------------------------------------URL FOR FAST TEST------------------------------------

// https://images.unsplash.com/photo-1643475246169-dd57253b646a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80