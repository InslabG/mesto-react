import React from 'react';

import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopUpWithForm from './PopUpWithForm';
import ImagePopup from './ImagePopup';
import Api from '../utils/api'; 

import constants from '../utils/constants.js';

function App() {

const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false);
const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);
const [isAratarPopupOpened, setIsAvatarPopupOpened] = React.useState(false);



function handlePopupClick(evt) {
    if((evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) && evt.button === constants.MOUSE_LEFT_BTN_CODE){
        closeAllPopups();
    }
}

function handleEditProfileClick() {
    setIsProfilePopupOpened(true);
}

function handleAddCardClick() {
    setIsCardPopupOpened(true);
}

function handleEditAvatarClick(){
    setIsAvatarPopupOpened(true);
}

  function closeAllPopups() {
    setIsProfilePopupOpened(false);
    setIsCardPopupOpened(false);
    setIsAvatarPopupOpened(false);
  }




  React.useEffect(() => {

    if(isProfilePopupOpened || isCardPopupOpened || isAratarPopupOpened){
        function escHandler(evt) {
            if(evt.key === constants.ESCAPE_KEY)
            closeAllPopups();
        };
        document.addEventListener('keydown', escHandler);
        return () => {
            document.removeEventListener('keydown', escHandler);
        };
    }


  }, [isProfilePopupOpened, isCardPopupOpened, isAratarPopupOpened]);


  return (
    <div className="body">
    <div className="root">
        <Header />
        <Main handleEditProfileClick={handleEditProfileClick} handleAddCardClick={handleAddCardClick} handleEditAvatarClick={handleEditAvatarClick} />
        <Footer />
        <PopUpWithForm name="profile-edit-popup" title="Редактировать профиль" isOpened={isProfilePopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
            <input type="text" class="popup__input popup__input_control_profile-name" placeholder="Имя" name="name" minlength="2" maxlength="40" required />
            <span class="popup__input-error name-error"></span>
            <input type="text" class="popup__input popup__input_control_profile-job" placeholder="О себе" name="about" minlength="2" maxlength="200" required />
            <span class="popup__input-error about-error"></span>
        </PopUpWithForm>
        <PopUpWithForm name="card-edit-popup" title="Новое место" isOpened={isCardPopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
            <input type="text" class="popup__input popup__input_control_card-name" placeholder="Название" name="card-name" minlength="2" maxlength="30" required />
            <span class="popup__input-error card-name-error"></span>
            <input type="url" class="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="card-url" required />
            <span class="popup__input-error card-url-error"></span>
        </PopUpWithForm>
        <PopUpWithForm name="avatar-edit-popup" title="Обновить аватар" isOpened={isAratarPopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
            <input type="url" class="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="avatar" required />
            <span class="popup__input-error avatar-error"></span>
        </PopUpWithForm>

        <ImagePopup name="image-popup" />

        <div id="card-delete-confirm-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form class="popup__content-form" name="popup__content-form" >
                    <h3 class="popup__header">Вы уверены?</h3>
                    <button class="popup__save-btn" type="submit">Да</button>
                </form>
            </div>
        </div>
        <div id="error-message-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form class="popup__content-form" name="popup__content-form" >
                    <h3 class="popup__header">УПС! Что-то пошло не так :(</h3>
                    <button class="popup__save-btn" type="submit">Закрыть</button>
                </form>
            </div>
        </div>
    </div>
    <template id="card-template">
        <li class="card">
            <img class="card__img" />
            <div class="card__footer">
                <h2 class="card__caption"></h2>
                <div class="card__like-area">
                    <button class="card__like-btn" type="button" aria-label="like"></button>
                    <p class="card__like-counter">2</p>
                </div>
                
            </div>
            <button class="card__del-btn" type="button" aria-label="delete"></button>
        </li>
    </template>
    </div>
  );
}

export default App;
