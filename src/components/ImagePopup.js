function ImagePopup({name, card, onClose, onPopupClick}) {
    
    return (
        <div id={name} className={`popup popup_dark ${card ? 'popup_opened' : ''}`} onClick={onPopupClick} >
            <div className="popup__content-img">
                <button className="popup__close-btn" type="button" aria-label="close" onClick={onClose}></button>
                <img className="popup__img" alt="image" src={card ? card.link : "#"} alt={card ? card.name : ""} />
                <p className="popup__img-caption"></p>
            </div>
        </div>

    );
}

export default ImagePopup;