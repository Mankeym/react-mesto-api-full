import Err from '../images/Err.svg';
import Ok from '../images/Ok.svg';
import close from "../images/Close.svg";
function InfoTooltip(props){
    return(
        <div className={`overlay ${props.isOpen ? 'overlay_active' : ''}`}>
            <div className="popup__container">
                <button onClick={props.onClose} type="button"  className="overlay__button overlay__button-profile">
                    <img onClick={props.onClose} className="overlay__image" src={close} alt="Крест"/>
                </button>
                <div className="popup__card">
                    <img src={props.isOk ? Ok : Err} className="popup__response" alt="Галочка ОК"/>
                    <p className="popup__response-text">{props.isOk ? "Вы успешно зарегистрировались!" : "Что-то пошло не так! Попробуйте ещё раз."}</p>
                </div>
            </div>
        </div>
    )
}
export default InfoTooltip;
