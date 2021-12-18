import React from "react";
import { UserContext } from './contexts/CurrentUserContext';
import PopupWithForm from './PopupWithForm';

function EditProfilePopup({isOpened, onClose, onPopupClick, onUpdateUser}) {

    const [name, setName] = React.useState();
    const [description, setDescription] = React.useState();
    const currentUser = React.useContext(UserContext);


    // После загрузки текущего пользователя из API
    // его данные будут использованы в управляемых компонентах.
    React.useEffect(() => {
        setName(currentUser.name );
        setDescription(currentUser.about);
    }, [currentUser, isOpened]); 



    function handleInputName(e) {
        setName(e.target.value);
    }

    function handleDescription(e) {
        setDescription(e.target.value);
    }

    function handleSubmit(e) {
        // Запрещаем браузеру переходить по адресу формы
        e.preventDefault();
      
        // Передаём значения управляемых компонентов во внешний обработчик
        onUpdateUser({
          name,
          about: description,
        });
      } 

    return (
        <PopupWithForm name="profile-edit-popup" title="Редактировать профиль" isOpened={isOpened} onClose={onClose} onPopupClick={onPopupClick} onSubmit={handleSubmit}>
            <input value={name || ''} type="text" className="popup__input popup__input_control_profile-name" placeholder="Имя" name="name" minLength="2" maxLength="40" required onChange={handleInputName} />
            <span className="popup__input-error name-error"></span>
            <input value={description || ''} type="text" className="popup__input popup__input_control_profile-job" placeholder="О себе" name="about" minLength="2" maxLength="200" required onChange={handleDescription} />
            <span className="popup__input-error about-error"></span>
        </PopupWithForm>
    );
}

export default EditProfilePopup;