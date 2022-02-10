const buttonEdit = document.querySelector('.profile__edit-button');
const buttonAdd = document.querySelector('.profile__add-button');
const profileName = document.querySelector('.profile__title');
const profileProfession = document.querySelector('.profile__subtitle');

const popupWindow = document.querySelector('.popup_type_profile-edit');
const formElement = document.querySelector('.popup__field_type_profile-edit');
const nameInput = document.querySelector('.popup__input_type_name');
const jobInput = document.querySelector('.popup__input_type_profession');
const popupEditClose = document.querySelector('.popup__close-icon_type_profile-edit');

const popupAddWindow = document.querySelector('.popup_type_add');
const formAddElement = document.querySelector('.popup__field_type_add');
const imgInput = document.querySelector('.popup__input_type_url');
const placeInput = document.querySelector('.popup__input_type_place');
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

function openPopup(popup) {
 popup.classList.add('popup_opened');
}

function closePopup(popup) {
 popup.classList.remove('popup_opened');
}

function input() {
  openPopup(popupWindow);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup(popupWindow);
}

//  добавление карточек при загрузке и добавление новой карточки через форму попап_______________________

function createCard(element) {//ф создания готовой карточки
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.photo-grid__card-image').src = element.link;
  cardElement.querySelector('.photo-grid__card-image').alt = element.name;
  cardElement.querySelector('.photo-grid__card-title').textContent = element.name;
  
  cardElement.querySelector('.photo-grid__card-like').addEventListener('click', (event) => {
    event.target.classList.toggle("photo-grid__card-like_active")});//лайк
  cardElement.querySelector('.photo-grid__delete').addEventListener('click', (event) => {
    event.target.closest('.photo-grid__card').remove()});//корзина
  cardElement.querySelector('.photo-grid__card').addEventListener('click', function () {
    fullscreenImage(element)
});
  return cardElement;
}


function renderCard(element) {
   const newCard = createCard(element)

   cardList.append(newCard);
}

cardsInitial.forEach(renderCard);

 function formAddHandler(evt) {
   evt.preventDefault();
   const cardImage = imgInput.value;
   const cardTitle = placeInput.value;
   const link = imgInput.value;
   const name = placeInput.value;
   renderCard({name, link})
   closePopup(popupAddWindow);
}

function fullscreenImage(element) {
  openPopup(popupFullscreen);
  captionPopup.innerText = element.name;
  imageFullscreen.src = element.link;
  imageFullscreen.alt = element.name;
}

buttonEdit.addEventListener('click', input);
formElement.addEventListener('submit', formSubmitHandler);
formAddElement.addEventListener('submit', formAddHandler);
popupEditClose.addEventListener('click', function(){
  closePopup(popupWindow)
  });
popupAddClose.addEventListener('click', function(){
  closePopup(popupAddWindow)
  });
buttonAdd.addEventListener('click', function(){
  openPopup(popupAddWindow)
  });
imageClose.addEventListener('click', function(){
  closePopup(popupFullscreen)
  });

// https://images.unsplash.com/photo-1643475246169-dd57253b646a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80
// ссылка тестик
