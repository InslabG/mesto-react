import React from 'react';
import { UserContext } from './contexts/CurrentUserContext';

function Card({card, onCardClick, onCardLike, onCardDelete}) {

    const currentUser = React.useContext(UserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card?.owner._id === currentUser?._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (`card__del-btn ${isOwn ? '' : 'common_hidden'}`); 


    // Определяем, есть ли у карточки лайк, поставленный текущим пользователем
    const isLiked = card.likes.some(i => i._id === currentUser._id);

    // Создаём переменную, которую после зададим в `className` для кнопки лайка
    const cardLikeButtonClassName = `card__like-btn ${isLiked ? 'card__like-btn_active' : ''}`; 

    console.log(cardDeleteButtonClassName);

    function handleCardDelete() {
        onCardDelete(card);
    }

    function handleLikeClick() {
        onCardLike(card);
    }

    function handleClick() {
        onCardClick(card);
    }  

    return (
        <li className="card" >
            <img className="card__img" src={card.link} alt={card ? card.name : ""} onClick={handleClick} />
                <div className="card__footer">
                    <h2 className="card__caption">{card.name}</h2>
                    <div className="card__like-area">
                    <button className={cardLikeButtonClassName} type="button" aria-label="like" onClick={handleLikeClick} ></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
            <button className={cardDeleteButtonClassName} type="button" aria-label="delete" onClick={handleCardDelete} ></button>
        </li>
    );
}

export default Card;