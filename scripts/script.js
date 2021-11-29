//переменные для попапа Профиля: сам попап и кнопки
const editButton = document.querySelector('.profile__button_type_edit');
const profilePopup = document.querySelector('.profile-popup');
const profilePopupClose = document.querySelector('.profile-popup__close-button');

//переменные форм ввода и заголовки
let formElement = profilePopup.querySelector('.profile-popup__form');
let nameInput = profilePopup.querySelector('.profile-popup__input_type_name');
let jobInput = profilePopup.querySelector('.profile-popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Функция открытия попапа Профиля
function openProfilePopup() {
  profilePopup.classList.add('profile-popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
// Функция закрытия попапа Профиля
function closeProfilePopup() {
  profilePopup.classList.remove('profile-popup_opened');
}
// Функция нажатия "Сохранить" в попапе Профиля
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closeProfilePopup();
}

//обработчики событий для кнопок в разделе о профиле Кусто
editButton.addEventListener('click', openProfilePopup);
profilePopupClose.addEventListener('click', closeProfilePopup);
formElement.addEventListener('submit', handleFormSubmit);


//Создание начального блока с карточками по данным из массива
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

//константы для работы с блоком карточек
const cardsContainerEl = document.querySelector('.elements');
const templateEl = document.querySelector('.template');


