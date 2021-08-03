import React from 'react'
import trash from "../images/Trash.svg";
import { CurrentUserContext } from "../contexts/CurrentUserContext";


function Card(props) {
    function handleCardClick() {
        props.onCardClick(props.card);
    }
    const currentUser = React.useContext(CurrentUserContext);

    const isOwn = props.card.owner._id === currentUser._id;

    const cardDeleteButtonClassName = `card__trash ${
        isOwn ? `card__trash_visible` : ``
    }`;

    const isLiked = props.card.likes.some((i) => i._id === currentUser._id);

    const cardLikeButtonClassName = `card__button ${
        isLiked ? `card__button_active` : ``
    }`;
    function handleLikeClick() {
        props.onCardLike(props.card);
        console.log(props.card)
    }

    function handleDeleteClick() {
        props.onCardDelete(props.card);
    }
    return (
        <figure className="card">
            <button onClick={handleDeleteClick} className={cardDeleteButtonClassName}>
                <img src={trash} alt="Ведро"/>
            </button>
            <img onClick={handleCardClick} className="card__logo" src={props.link}
                 alt={props.name}/>
            <figcaption className="card__figcaption">
                <h3 className="card__title">{props.name}</h3>
                <div className="card__like">
                    <button aria-label="Кнопка нравится" type="button" className={cardLikeButtonClassName} onClick={handleLikeClick}></button>
                    <p className="card__score">{props.likes}</p>
                </div>
            </figcaption>
        </figure>
    );
}

export default Card;
