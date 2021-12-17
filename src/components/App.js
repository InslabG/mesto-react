import React from 'react';
import Header from './Header';
import Footer from './Footer';
import Main from './Main';
import PopupWithForm from './PopupWithForm';
import ImagePopup from './ImagePopup';
import constants from '../utils/constants.js';
import Api from "../utils/api";
import { UserContext } from './contexts/CurrentUserContext';
import EditProfilePopup from './EditProfilePopup';
import EditAvatarPopup from './EditAvatarPopup';

function App() {

    const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false);
    const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);
    const [isAratarPopupOpened, setIsAvatarPopupOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [currentUser, setCurrentUser] = React.useState({});


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

    function handleUpdateUser(user) {
        Api.updateUser(user).then(data => { setCurrentUser(data); closeAllPopups(); });
    }

    function handleUpdateAvatar(avatar) {
        Api.updateAvatar(avatar).then(data => { setCurrentUser(data); closeAllPopups(); });
    }


    React.useEffect(() => {
        Api.getUser().then(
            user => {
                setCurrentUser(user);
                console.log(user);
            }
        ).catch(error => console.error(error));
    }, []);


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
                <UserContext.Provider value={currentUser}>
                    <Header />
                    <Main handleEditProfileClick={handleEditProfileClick} handleAddCardClick={handleAddCardClick} handleEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick} />
                    <Footer />
                    <EditProfilePopup isOpened={isProfilePopupOpened} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                    <PopupWithForm name="card-edit-popup" title="Новое место" isOpened={isCardPopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick}>
                        <input type="text" className="popup__input popup__input_control_card-name" placeholder="Название" name="card-name" minLength="2" maxLength="30" required />
                        <span className="popup__input-error card-name-error"></span>
                        <input type="url" className="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="card-url" required />
                        <span className="popup__input-error card-url-error"></span>
                    </PopupWithForm>
                    <EditAvatarPopup isOpened={isAratarPopupOpened} onClose={closeAllPopups} onUpdateAvatar={handleUpdateAvatar} onPopupClick={handlePopupClick} /> 
                    <ImagePopup name="image-popup" card={selectedCard} onClose={closeAllPopups} onPopupClick={handlePopupClick} />
                    <PopupWithForm name="card-delete-confirm-popup" title="Вы уверены?" buttonTitle="Да" />
                    <PopupWithForm name="error-message-popup" title="УПС! Что-то пошло не так :(" buttonTitle="Да" />
                </UserContext.Provider>
            </div>
        </div>
    );
}

export default App;
