import { UserContext } from './contexts/CurrentUserContext';

function Card({card, onCardClick}) {

    const currentUser = React.useContext(UserContext);

    // Определяем, являемся ли мы владельцем текущей карточки
    const isOwn = card?.owner._id === currentUser?._id;

    // Создаём переменную, которую после зададим в `className` для кнопки удаления
    const cardDeleteButtonClassName = (`card__delete-button ${isOwn ? 'common_hidden' : ''}`); 


    function handleClick() {
        onCardClick(card);
    }  

    return (
        <li className="card" onClick={handleClick}>
            <img className="card__img" src={card.link} alt={card ? card.name : ""} />
                <div className="card__footer">
                    <h2 className="card__caption">{card.name}</h2>
                    <div className="card__like-area">
                    <button className="card__like-btn" type="button" aria-label="like"></button>
                    <p className="card__like-counter">{card.likes.length}</p>
                </div>
            </div>
            <button className={cardDeleteButtonClassName} type="button" aria-label="delete"></button>
        </li>
    );
}

export default Card;