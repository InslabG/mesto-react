
function ImagePopup({name}) {
    
    return (
        <div id={name} class="popup popup_dark">
            <div class="popup__content-img">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <img class="popup__img" alt="image" src="#" />
                <p class="popup__img-caption"></p>
            </div>
        </div>

    );
}

export default ImagePopup;