
import pen from "../images/pen.svg";
import krest from "../images/krest.svg";
import {useContext} from "react";
import Card from "./Card";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";


function Main(props) {
    const cards = useContext(CardsContext);
    const currentUser = useContext(CurrentUserContext);
    /** Handlers */
    return(

        <main>
            <section className="profile">
                <div className="profile__page">
                    <div className="profile__avatar">
                        <img src={currentUser.avatar} className="profile__logo" alt={currentUser.name}/>
                        <button onClick={props.onEditAvatar} className="profile__avatar-update" type="button"></button>
                    </div>
                    <div className="profile__info">
                        <div>
                            <h1 className="profile__title" id="heading">{currentUser.name}</h1>
                            <p className="profile__subtitle" id="quote">{currentUser.about}</p>
                        </div>
                        <button onClick={props.onEditProfile} type="button" className="profile__rectangle">
                            <img src={pen} alt="Ручка"/>
                        </button>
                    </div>
                </div>
                <button onClick={props.onAddPlace} type="button" className="profile__button">
                    <img src={krest} alt="Крест" className="profile__image"/>
                </button>
            </section>
            <section className="cards">
                    {cards.map((card) => (
                        <Card
                            key={card._id}
                            link={card.link}
                            name={card.name}
                            likes={card.likes.length}
                            card={card}
                            onCardClick={props.onCardClick}
                            onCardDelete={props.onCardDelete}
                            onCardLike={props.onCardLike}
                        />
                    ))}
            </section>

        </main>

    )
}
export default Main;