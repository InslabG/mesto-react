import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import constants from '../utils/constants.js';

function App() {

    const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false);
    const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);
    const [isAratarPopupOpened, setIsAvatarPopupOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(undefined);

    function handlePopupClick(evt) {
        if ((evt.target.classList.contains('popup') || evt.target.classList.contains('popup__close-btn')) && evt.button === constants.MOUSE_LEFT_BTN_CODE) {
            closeAllPopups();
        }
    }

    function handleEditProfileClick() {
        setIsProfilePopupOpened(true);
    }

    function handleAddCardClick() {
        setIsCardPopupOpened(true);
    }

    function handleEditAvatarClick() {
        setIsAvatarPopupOpened(true);
    }

    function handleCardClick(card) {
        setSelectedCard(card);
    }

    function closeAllPopups() {
        setIsProfilePopupOpened(false);
        setIsCardPopupOpened(false);
        setIsAvatarPopupOpened(false);
        setSelectedCard(null);
    }


    React.useEffect(() => {
        if (isProfilePopupOpened || isCardPopupOpened || isAratarPopupOpened || selectedCard) {
            function escHandler(evt) {
                if (evt.key === constants.ESCAPE_KEY)
                    closeAllPopups();
            };
            document.addEventListener('keydown', escHandler);
            return () => {
                document.removeEventListener('keydown', escHandler);
            };
        }
    }, [isProfilePopupOpened, isCardPopupOpened, isAratarPopupOpened, selectedCard]);

    return (
        <div className="body">
            <div className="root">
                <Header />
                <Main handleEditProfileClick={handleEditProfileClick} handleAddCardClick={handleAddCardClick} handleEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick} />
                <Footer />
                <PopupWithForm name="profile-edit-popup" title="Редактировать профиль" isOpened={isProfilePopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
                    <input type="text" className="popup__input popup__input_control_profile-name" placeholder="Имя" name="name" minLength="2" maxLength="40" required />
                    <span className="popup__input-error name-error"></span>
                    <input type="text" className="popup__input popup__input_control_profile-job" placeholder="О себе" name="about" minLength="2" maxLength="200" required />
                    <span className="popup__input-error about-error"></span>
                </PopupWithForm>
                <PopupWithForm name="card-edit-popup" title="Новое место" isOpened={isCardPopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
                    <input type="text" className="popup__input popup__input_control_card-name" placeholder="Название" name="card-name" minLength="2" maxLength="30" required />
                    <span className="popup__input-error card-name-error"></span>
                    <input type="url" className="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="card-url" required />
                    <span className="popup__input-error card-url-error"></span>
                </PopupWithForm>
                <PopupWithForm name="avatar-edit-popup" title="Обновить аватар" isOpened={isAratarPopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
                    <input type="url" className="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="avatar" required />
                    <span className="popup__input-error avatar-error"></span>
                </PopupWithForm>
                <ImagePopup name="image-popup" card={selectedCard} onClose={closeAllPopups} onPopupClick={handlePopupClick} />
                <PopupWithForm name="card-delete-confirm-popup" title="Вы уверены?" buttonTitle="Да" />
                <PopupWithForm name="error-message-popup" title="УПС! Что-то пошло не так :(" buttonTitle="Да" />
            </div>
        </div>
    );
}

export default App;
