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
import AddPlacePopup from './AddPlacePopup';

function App() {

    const [isProfilePopupOpened, setIsProfilePopupOpened] = React.useState(false);
    const [isCardPopupOpened, setIsCardPopupOpened] = React.useState(false);
    const [isAratarPopupOpened, setIsAvatarPopupOpened] = React.useState(false);
    const [selectedCard, setSelectedCard] = React.useState(null);

    const [cards, setCards] = React.useState([]);

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
        Api.updateUser(user).then(data => { setCurrentUser(data); closeAllPopups(); }).catch(error => console.error(error));
    }

    function handleUpdateAvatar(avatar) {
        Api.updateAvatar(avatar).then(data => { setCurrentUser(data); closeAllPopups(); }).catch(error => console.error(error));
    }

    function handleCardLike(card) {

        // Проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        const updateLikePromise = isLiked ? Api.deleteLike(card._id) : Api.addLike(card._id);
        updateLikePromise.then((newCard) => { setCards((state) => state.map((c) => c._id === card._id ? newCard : c)) }).catch(error => console.error(error));
    } 

    function handleCardDelete(card) {
        Api.deleteCard(card._id).then(data => { setCards(cards.filter(c => c._id !== card._id)); }).catch(error => console.error(error));
    }


    function handleAddPlaceSubmit(card) {
        Api.addCard(card).then(data => { setCards([data, ...cards]); closeAllPopups(); }).catch(error => console.error(error));
    }


    React.useEffect(() => {
        Api.getUser().then(
            user => {
                setCurrentUser(user);
            }
        ).catch(error => console.error(error));

        Api.getInitialCards().then(
            data => {
                setCards(data);
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
                    <Main cards={cards} onCardLike={handleCardLike} onCardDelete={handleCardDelete} handleEditProfileClick={handleEditProfileClick} handleAddCardClick={handleAddCardClick} handleEditAvatarClick={handleEditAvatarClick} onCardClick={handleCardClick} />
                    <Footer />
                    <EditProfilePopup isOpened={isProfilePopupOpened} onClose={closeAllPopups} onUpdateUser={handleUpdateUser} />
                    <AddPlacePopup onAddCard={handleAddPlaceSubmit} isOpened={isCardPopupOpened} onClose={closeAllPopups} onPopupClick={handlePopupClick} />
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
