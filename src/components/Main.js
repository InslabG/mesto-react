function Main(){


    function handleEditAvatarClick(){

        //this._popup.classList.add("popup_opened");          

    }



    return (
        <main class="content">
            <section class="profile root__profile">
                <div class="profile__avatar-container">
                    <img class="profile__avatar" src="#" alt="Аватар" />
                    <button type="button" class="profile__avatar-edit-btn" onClick={handleEditAvatarClick}></button>
                </div>
                
                <div>
                    <div class="profile__name-container">
                        <h1 class="profile__name">Жак-Ив Кусто</h1>
                        <button class="profile__edit-button" type="button" aria-label="edit"></button>
                    </div>
                    <p class="profile__description">Исследователь океана</p>
                </div>
                <button class="profile__add-button" type="button"></button>
            </section>
            <section class="elements root__elements">
                <ul class="elements__list">
                </ul>
            </section>
        </main>
    );
}


export default Main;