import PopupWithForm from './PopupWithForm';
import React from "react";

export default function AddPlacePopup (props) {
    const [title, setTitle] = React.useState("");

    const [link, setLink] = React.useState("");

    function handleTitleInputChange(evt) {
        setTitle(evt.target.value);
    }

    function handleLinkInputChange(evt) {
        setLink(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onAddPlace({
            name: title,
            link: link,
        });

        setTitle("");
        setLink("");
    }
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            id={'idAddPlace'}
            name={'addPlace'}
            title="Добавить карточку"
            onClose={props.onClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_type_mesto"
                id="popup__name"
                name="cardDescription"
                placeholder="Название"
                value={title}
                required
                type="text"
                onChange={handleTitleInputChange}
            />
            <span className="popup__name-author-error popup__error"></span>
            <input
                className="popup__input popup__input_type_link"
                id="popup__link"
                name="cardImage"
                placeholder="Ссылка на картинку"
                required
                value={link}
                type="url"
                onChange={handleLinkInputChange}
            />
            <span className="popup__name-author-error popup__error"></span>
        </PopupWithForm>
    );
}
