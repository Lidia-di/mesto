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

function input() { // + работает
  openPopup(popupWindow);
  nameInput.value = profileName.textContent;
  jobInput.value = profileProfession.textContent;
}

buttonEdit.addEventListener('click', input); // + открывает текст заносит
popupEditClose.addEventListener('click', closePopup(popupWindow)); // - не закрывает
formElement.addEventListener('submit', formSubmitHandler);

buttonAdd.addEventListener('click', openPopup(popupAddWindow)); // - не открывает
popupAddClose.addEventListener('click', closePopup(popupAddWindow));
formAddElement.addEventListener('submit', formAddHandler);

imageClose.addEventListener('click', closePopup(popupFullscreen)); // - не закрывает


// Ввод пользователем текста в форму и закрытие попапа с изменением контента__________
function formSubmitHandler (evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileProfession.textContent = jobInput.value;
  closePopup();  // - меняет текст но не закрывает попап
}

//  добавление карточек при загрузке и добавление новой карточки через форму попап_______________________

function createCard(element) {//ф создания готовой карточки
  const cardElement = cardTemplate.cloneNode(true);
  cardElement.querySelector('.photo-grid__card-image').src = element.link;
  cardElement.querySelector('.photo-grid__card-title').textContent = element.name;
  
  cardElement.querySelector('.photo-grid__card-like').addEventListener('click', (event) => {
    event.target.classList.toggle("photo-grid__card-like_active")});//лайк
  cardElement.querySelector('.photo-grid__delete').addEventListener('click', (event) => {
    event.target.closest('.photo-grid__card').remove()});//корзина
  cardElement.querySelector('.photo-grid__card-image').addEventListener('click', fullscreenImage)
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
   cardsInitial.push({name: cardTitle, link: cardImage})
   renderCard(cardsInitial[cardsInitial.length - 1])
   closePopup;
}

function fullscreenImage(element) {
  popupFullscreen.classList.add('popup_opened');
  captionPopup.innerText = element.path[1].querySelector('.photo-grid__card-title').innerText;
  imageFullscreen.setAttribute('src',element.path[1].querySelector('.photo-grid__card-image').src);
}





// https://images.unsplash.com/photo-1643475246169-dd57253b646a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2960&q=80
// ссылка тестик
