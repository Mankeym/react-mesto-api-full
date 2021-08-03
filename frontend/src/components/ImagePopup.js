import close from "../images/Close.svg";
export default function ImagePopup (props) {

    return(
<section className={`overlay ${props.card ? 'overlay_active' : ''}`}>
    <div className="popup popup_bigImage" onClick={props.onClose}>
        <img src={props.card ? props.card.link : ""}
             className="popup__picture" alt={props.card ? props.card.name : ""}/>
        <h3 className="popup__textpicture">{props.card ? props.card.name : ""}</h3>
        <button type="button" onClick={props.onClose} className="overlay__button overlay__button_edit-picture">
            <img onClick={props.onClose} className="overlay__image" src={close} alt="Крест"/>
        </button>
    </div>
</section>
    )
}