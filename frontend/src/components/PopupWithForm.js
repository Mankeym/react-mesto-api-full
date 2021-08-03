import close from "../images/Close.svg";

export default function PopupWithForm({
      children,
      isOpen,
      name,
      onClose,
      onSubmit,
      title,
      buttonText,
      id
  }){
    return (
        <section className={`overlay ${isOpen ? 'overlay_active' : ''}`}>
            <div className="popup">
                <h2 className="popup__title">{title}</h2>
                <form className="popup__form"
                      id={id}
                      name={name}
                      onSubmit={onSubmit}>
                    {children}
                    <button value={'Сохранить'} type="submit" className="popup__submit popup__submit-profile" >{buttonText}
                    </button>
                </form>
                <button onClick={onClose} type="button"  className="overlay__button overlay__button-profile">
                    <img onClick={onClose} className="overlay__image" src={close} alt="Крест"/>
                </button>
            </div>
        </section>
    )
}
