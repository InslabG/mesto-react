import React from "react";
import Card from "./Card";
import { UserContext } from './contexts/CurrentUserContext';

function Main({cards, onCardLike, onCardDelete, handleEditProfileClick, handleAddCardClick, handleEditAvatarClick, onCardClick}){

    const currentUser = React.useContext(UserContext);



    return (
        <main className="content">
            <section className="profile root__profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={currentUser.avatar} alt="Аватар" />
                    <button type="button" className="profile__avatar-edit-btn" onClick={handleEditAvatarClick}></button>
                </div>
                
                <div>
                    <div className="profile__name-container">
                        <h1 className="profile__name">{currentUser.name}</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__description">{currentUser.about}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddCardClick}></button>
            </section>
            <section className="elements root__elements">
                <ul className="elements__list">
                    {cards.map((card, i) => (
                        <Card card={card} key={card._id} onCardClick={onCardClick} onCardLike={onCardLike} onCardDelete={onCardDelete} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;