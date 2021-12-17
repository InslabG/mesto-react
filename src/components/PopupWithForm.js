function PopupWithForm({name, title, buttonTitle = 'Сохранить', isOpened, onClose, onPopupClick, onSubmit, children}) {
    
    return (
        <div id={name} className={`popup ${isOpened ? 'popup_opened' : ''}`} onClick={onPopupClick}>
            <div className="popup__content">
                <button className="popup__close-btn" type="button" aria-label="close" onClick={onClose}></button>
                <form className="popup__content-form" name="popup__content-form" noValidate onSubmit={onSubmit}>
                    <h3 className="popup__header">{title}</h3>
                    {children}
                    <button className="popup__save-btn" type="submit">{buttonTitle}</button>
                </form>
            </div>
        </div>
    );
}

export default PopupWithForm;