// Объявляем переменные, находим элементы в дереве
const editButton = document.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');

let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');
let profileName = document.querySelector('.profile__name');
let profileJob = document.querySelector('.profile__job');

// Функция открытия попапа
function openPopup() {
  popup.classList.add('popup_opened');
  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}
// Функция закрытия попапа
function closePopup() {
  popup.classList.remove('popup_opened');
}
// Функция нажатия на кнопку "Сохранить"
function handleFormSubmit(evt) {
  evt.preventDefault();
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  closePopup();
}

// Создаём обработчики событий
editButton.addEventListener('click', openPopup);
popupClose.addEventListener('click', closePopup);
formElement.addEventListener('submit', handleFormSubmit);
