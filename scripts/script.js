const editButton = document.querySelector('.profile__button_type_edit');
const popup = document.querySelector('.popup');
const popupClose = document.querySelector('.popup__close-button');

function open() {
  popup.classList.add('popup_opened');

  nameInput.value = profileName.textContent;
  jobInput.value = profileJob.textContent;
}

function close() {
  popup.classList.remove('popup_opened');
}

editButton.addEventListener('click', open);
popupClose.addEventListener('click', close);

let formElement = popup.querySelector('.popup__form');
let nameInput = popup.querySelector('.popup__input_type_name');
let jobInput = popup.querySelector('.popup__input_type_job');

function formSubmitHandler(evt) {
  evt.preventDefault();
  let profileName = document.querySelector('.profile__name');
  let profileJob = document.querySelector('.profile__job');
  profileName.textContent = nameInput.value;
  profileJob.textContent = jobInput.value;
  close();
}

formElement.addEventListener('submit', formSubmitHandler);
