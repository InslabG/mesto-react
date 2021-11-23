function Card({card, onCardClick}) {

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
            <button className="card__del-btn" type="button" aria-label="delete"></button>
        </li>
    );
}

export default Card;