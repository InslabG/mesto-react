import React from "react";
import Api from "../utils/api";
import Card from "./Card";

function Main({handleEditProfileClick, handleAddCardClick, handleEditAvatarClick, onCardClick}){

    const [userName, setUserName] = React.useState("");
    const [userInfo, setUserInfo] = React.useState("");
    const [userAvatar, setUserAvatar] = React.useState("");
    const [cards, setCards] = React.useState([]);

    React.useEffect(() => {
        Promise.all([Api.getUser(), Api.getInitialCards()]).then(
            data => {
                setUserName(data[0].name);
                setUserInfo(data[0].about);
                setUserAvatar(data[0].avatar);
                setCards(data[1]);
            }
          ).catch(error => console.error(error));
      
    }, []);

    return (
        <main className="content">
            <section className="profile root__profile">
                <div className="profile__avatar-container">
                    <img className="profile__avatar" src={userAvatar} alt="Аватар" />
                    <button type="button" className="profile__avatar-edit-btn" onClick={handleEditAvatarClick}></button>
                </div>
                
                <div>
                    <div className="profile__name-container">
                        <h1 className="profile__name">{userName}</h1>
                        <button className="profile__edit-button" type="button" aria-label="edit" onClick={handleEditProfileClick}></button>
                    </div>
                    <p className="profile__description">{userInfo}</p>
                </div>
                <button className="profile__add-button" type="button" onClick={handleAddCardClick}></button>
            </section>
            <section className="elements root__elements">
                <ul className="elements__list">
                    {cards.map((card, i) => (
                        <Card card={card} key={card._id} onCardClick={onCardClick} />
                    ))}
                </ul>
            </section>
        </main>
    );
}

export default Main;