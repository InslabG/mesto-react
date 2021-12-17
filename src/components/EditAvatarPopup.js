import React from "react";
import PopupWithForm from './PopupWithForm';

function EditAvatarPopup({isOpened, onClose, onUpdateAvatar, onPopupClick}) {

    const inputRef = React.useRef(); 

    function handleSubmit(e) {
        e.preventDefault();
        onUpdateAvatar({
          avatar: inputRef.current.value
        });
        inputRef.current.value = '';
      } 

    return (
        <PopupWithForm name="avatar-edit-popup" title="Обновить аватар" isOpened={isOpened} onPopupClick={onPopupClick} onClose={onClose} onSubmit={handleSubmit}>
            <input ref={inputRef} type="url" className="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="avatar" required />
            <span className="popup__input-error avatar-error"></span>
        </PopupWithForm>
    );
}

export default EditAvatarPopup;