
import Header from './Header';
import Footer from './Footer';
import Main from './Main';

function App() {
  return (
    <div class="body">
    <div class="root">
        <Header />
        <Main />
        <Footer />
        <div id="profile-edit-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form class="popup__content-form" name="popup__content-form" novalidate>
                    <h3 class="popup__header">Редактировать профиль</h3>
                    <input type="text" class="popup__input popup__input_control_profile-name" placeholder="Имя" name="name" minlength="2" maxlength="40" required />
                    <span class="popup__input-error name-error"></span>
                    <input type="text" class="popup__input popup__input_control_profile-job" placeholder="О себе" name="about" minlength="2" maxlength="200" required />
                    <span class="popup__input-error about-error"></span>
                    <button class="popup__save-btn" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div id="card-edit-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form novalidate class="popup__content-form" name="popup__content-form" >
                    <h3 class="popup__header">Новое место</h3>
                    <input type="text" class="popup__input popup__input_control_card-name" placeholder="Название" name="card-name" minlength="2" maxlength="30" required />
                    <span class="popup__input-error card-name-error"></span>
                    <input type="url" class="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="card-url" required />
                    <span class="popup__input-error card-url-error"></span>
                    <button class="popup__save-btn" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div id="avatar-edit-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form novalidate class="popup__content-form" name="popup__content-form" >
                    <h3 class="popup__header">Обновить аватар</h3>
                    <input type="url" class="popup__input popup__input_control_card-url" placeholder="Ссылка на картинку" name="avatar" required />
                    <span class="popup__input-error avatar-error"></span>
                    <button class="popup__save-btn" type="submit">Сохранить</button>
                </form>
            </div>
        </div>
        <div id="image-popup" class="popup popup_dark">
            <div class="popup__content-img">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <img class="popup__img" alt="image" src="#" />
                <p class="popup__img-caption"></p>
            </div>
        </div>
        <div id="card-delete-confirm-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form class="popup__content-form" name="popup__content-form" >
                    <h3 class="popup__header">Вы уверены?</h3>
                    <button class="popup__save-btn" type="submit">Да</button>
                </form>
            </div>
        </div>
        <div id="error-message-popup" class="popup">
            <div class="popup__content">
                <button class="popup__close-btn" type="button" aria-label="close"></button>
                <form class="popup__content-form" name="popup__content-form" >
                    <h3 class="popup__header">УПС! Что-то пошло не так :(</h3>
                    <button class="popup__save-btn" type="submit">Закрыть</button>
                </form>
            </div>
        </div>
    </div>
    <template id="card-template">
        <li class="card">
            <img class="card__img" />
            <div class="card__footer">
                <h2 class="card__caption"></h2>
                <div class="card__like-area">
                    <button class="card__like-btn" type="button" aria-label="like"></button>
                    <p class="card__like-counter">2</p>
                </div>
                
            </div>
            <button class="card__del-btn" type="button" aria-label="delete"></button>
        </li>
    </template>
    </div>
  );
}

export default App;
