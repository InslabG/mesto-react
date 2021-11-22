function Main({handleEditProfileClick, handleAddCardClick, handleEditAvatarClick}){


    return (
        <main className="content">
            <section className="profile root__profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src="#" alt="Аватар" />
                    <button type="button" className="profile__avatar-edit-btn" onClick={handleEditAvatarClick}></button>
                </div>
                
                <div>
                    <div className="profile__name-container">
                        <h1 className="profile__name">Жак-Ив Кусто</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__description">Исследователь океана</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddCardClick}></button>
            </section>
            <section className="elements root__elements">
                <ul className="elements__list">
                </ul>
            </section>
        </main>
    );
}


export default Main;