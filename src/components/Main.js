import React from "react";
import Card from "./Card";
import Api from "../utils/api";
import { UserContext } from './contexts/CurrentUserContext';

function Main({handleEditProfileClick, handleAddCardClick, handleEditAvatarClick, onCardClick}){

    const [cards, setCards] = React.useState([]);

    const currentUser = React.useContext(UserContext);

    React.useEffect(() => {
        Api.getInitialCards().then(
            data => {
                setCards(data);
            }
          ).catch(error => console.error(error));

    }, []);


    function handleCardLike(card) {

        // Проверяем, есть ли уже лайк на этой карточке
        const isLiked = card.likes.some(i => i._id === currentUser._id);
        
        // Отправляем запрос в API и получаем обновлённые данные карточки
        const updateLikePromise = isLiked ? Api.deleteLike(card._id) : Api.addLike(card._id);
        updateLikePromise.then((newCard) => { setCards((state) => state.map((c) => c._id === card._id ? newCard : c)) });
    } 

    function handleCardDelete(card) {
        Api.deleteCard(card._id).then(data => { setCards(cards.filter(c => c._id !== card._id)); });
    }


    return (
        <main className="content">
            <section className="profile root__profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <button type="button" className="profile__avatar-edit-btn" onClick={handleEditAvatarClick}></button>
                </div>
                
                <div>
                    <div className="profile__name-container">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddCardClick}></button>
            </section>
            <section className="elements root__elements">
                <ul className="elements__list">
                    {cards.map((card, i) => (
                        <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={handleCardLike} onCardDelete={handleCardDelete} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;