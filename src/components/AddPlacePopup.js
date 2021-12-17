import React from "react";
import PopupWithForm from "./PopupWithForm";

function AddPlacePopup({isOpened, onClose, onPopupClick, onAddCard}) {


    const [name, setName] = React.useState();
    const [link, setLink] = React.useState();

    function handleNameChange(e) {
        setName(e.target.value);
    }

    function handleLinkChange(e) {
        setLink(e.target.value);
    }



    function handleSubmit(e) {
        e.preventDefault();
        onAddCard({name, link});
        setName('');
        setLink('');
    }

    return (
        <PopupWithForm isOpened={isOpened} onClose={onClose} onPopupClick={onPopupClick} name="card-edit-popup" title="Новое место" onSubmit={handleSubmit} >
            <input type="text" className="popup__input popup__input_control_card-name" placeholder="Название" value={name} onChange={handleNameChange} name="card-name" minLength="2" maxLength="30" required />
            <span className="popup__input-error card-name-error"></span>
            <input type="url" className="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" value={link} onChange={handleLinkChange} name="card-url" required />
            <span className="popup__input-error card-url-error"></span>
        </PopupWithForm>
    );
}

export default AddPlacePopup;