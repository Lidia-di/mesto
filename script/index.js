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
const buttonAddPlace = document.querySelector('.popup__button_type_add');
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

const popupContainer = document.querySelector('.popup__container');
const inputElement = document.querySelector('.popup__input');

const popups = document.querySelectorAll('.popup');
 
//--------------------------------------POPUP OPEN-------------------------------------------------
function openPopup (popups) {
 popups.classList.add('popup_opened');
 document.addEventListener('keydown', closeByEscape); 
}
//--------------------------------------POPUP CLOSE-------------------------------------------------

function closePopup(popups) {
  popups.classList.remove('popup_opened');
  document.removeEventListener('keydown', closeByEscape); 
}

function closeByEscape(evt) {
  if (evt.key === 'Escape') {
    const popupOpened = document.querySelector('.popup_opened');
    closePopup(popupOpened);
  }
}

 function closeByOverlay(evt) {
  if (evt.target.classList.contains('popup_opened')) {
    closePopup(evt.target);
    evt.stopPropagation();
  }
}
popups.forEach((el)=>{el.addEventListener('click', closeByOverlay)});
//--------------------------------------TEXT CONTENT POPUP EDIT-------------------------------------
function openProfilePopup() {
  openPopup(popupEdit);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}
//--------------------------------------ADD CONTENT IN PROFILE FROM POPUP-EDIT INPUT--------------------------
function handleProfileFormSubmit (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupEdit);
}
//--------------------------------------CREATE CARD FOR NEXT INSERT---------------------------------
function createCard(el) {
  const cardElement = cardTemplate.cloneNode(true);
  const cardElementImage = cardElement.querySelector('.photo-grid__card-image');
  cardElementImage.src = el.link;
  cardElementImage.alt = el.name;
  cardElement.querySelector('.photo-grid__card-title').textContent = el.name;
//--------------------------------------listeners for different events------------------------------
  cardElement.querySelector('.photo-grid__card-like').addEventListener('click', (evt) => {
    evt.target.classList.toggle("photo-grid__card-like_active")});
  cardElement.querySelector('.photo-grid__delete').addEventListener('click', (evt) => {
    evt.target.closest('.photo-grid__card').remove()});
    cardElementImage.addEventListener('click', openImagePopup)
  return cardElement;
}
//--------------------------------------ADDING CARDS------------------------------------------------
function renderCard(el) {
   const newCard = createCard(el)
   cardList.prepend(newCard);
}
cardsInitial.forEach(renderCard);
//--------------------------------------ADD NEW CARD IN CARD-LIST FROM POPUP-ADD INPUT---------------
 function handleAddFormSubmit(evt) {
   evt.preventDefault();
   const link = imgInput.value;
   const name = placeInput.value;
   renderCard({name, link})
   closePopup(popupAdd);
   imgInput.value = "";
   placeInput.value = "";
   buttonAddPlace.setAttribute("disabled", true);
   buttonAddPlace.classList.add("popup__button_disabled");
}
//--------------------------------------FULLSCREEN FORMAT WITH CONTENT--------------------------------
function openImagePopup(evt) {
  openPopup(popupFullscreen);
  captionPopup.innerText = evt.target.alt;
  imageFullscreen.src = evt.target.src;
  imageFullscreen.alt = evt.target.alt;
  }
//--------------------------------------ALL OTHER BUTTONS LISTENERS------------------------------------
buttonEdit.addEventListener('click', openProfilePopup);
formElementEdit.addEventListener('submit', handleProfileFormSubmit);
formElementAdd.addEventListener('submit', handleAddFormSubmit);
popupEditClose.addEventListener('click', function(){closePopup(popupEdit)});
popupAddClose.addEventListener('click', function(){closePopup(popupAdd)});
buttonAdd.addEventListener('click', function(){openPopup(popupAdd)});
imageClose.addEventListener('click', function(){closePopup(popupFullscreen)});

//--------------------------------------URL FOR FAST TEST------------------------------------
// https://clc.to/testi