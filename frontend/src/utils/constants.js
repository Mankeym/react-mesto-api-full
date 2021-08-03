export const overlayEditPicture = document.querySelector('.overlay_edit-picture')
export const cardImage = document.querySelector('.popup__picture')
export const cardTitle = document.querySelector('.popup__textpicture')
export const cardTemplate = document.querySelector('.card-template').content.querySelector('.card')
export const overlayImageCloseButton = document.querySelector('.overlay__button_edit')
export const lilImage = document.querySelector('.card__logo')
export const textCard = document.querySelector('.card__title')
export const imageCloseButton = document.querySelector('.overlay__button_edit-picture')
export const namePicture = document.querySelector('.popup__input_type_mesto')
export const jobPicture = document.querySelector('.popup__input_type_link')
export const profileCloseButton = document.querySelector('.overlay__button-profile')
export const overlayActive = document.querySelector('.overlay_active')
export const overlay = document.querySelectorAll('.overlay')
export const nameInput = document.querySelector('.popup__input_type_name')
export const jobInput = document.querySelector('.popup__input_type_job')
export const profilePopup = document.querySelector('.profile-popup');
export const form = document.querySelector('.popup__form_edit')
export const overlayEdit = document.querySelector('.overlay_edit')
export const profilePopupOpenButton = document.querySelector('.profile__rectangle')
export const openPicture = document.querySelector('.profile__button')
export const directorsList = document.querySelector('.cards');
export const name = document.querySelector('.profile__title')
export const job = document.querySelector('.profile__subtitle')
export const avatar = document.querySelector('.profile__avatar-update')
export const deleteTrash = document.querySelector('.card__trash')
export const editDelete = document.querySelector('.overlay_edit-delete')
export const cardEl = document.querySelector('.card-template')
export const card = document.querySelector('.card')
export const avatarProfile = document.querySelector('.popup__input_type_avatar')
export const avatarUrl = document.querySelector('.profile__logo')
export const buttonLoadingName = 'Сохранение...';
export const valid = {
    popupForm:'.popup__form',
    inputSelector:'.popup__input',
    submitButton:'.popup__submit',
    submitButtonDisabled:'popup__submit_disabled',
    inputErrorCon:'popup__input_type_error',
    errorVis: 'popup__error_visible'
}
export const initialCards = [
    {
      place: 'Архыз',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/arkhyz.jpg'
    },
    {
      place: 'Челябинская область',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/chelyabinsk-oblast.jpg'
    },
    {
      place: 'Иваново',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/ivanovo.jpg'
    },
    {
      place: 'Камчатка',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kamchatka.jpg'
    },
    {
      place: 'Холмогорский район',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/kholmogorsky-rayon.jpg'
    },
    {
      place: 'Байкал',
      link: 'https://pictures.s3.yandex.net/frontend-developer/cards-compressed/baikal.jpg'
    }
  ]; 