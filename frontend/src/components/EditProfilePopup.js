import React from "react";
import PopupWithForm from './PopupWithForm';
import { CurrentUserContext } from "../contexts/CurrentUserContext";

export default function EditProfilePopup (props) {
    const [name, setName] = React.useState("");

    const [description, setDescription] = React.useState("");

    function handleNameInputChange(evt) {
        setName(evt.target.value);
    }

    function handleDescriptionInputChange(evt) {
        setDescription(evt.target.value);
    }

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateUser({
            name: name,
            about: description,
        });
    }
    const currentUser = React.useContext(CurrentUserContext);

    React.useEffect(() => {
        if (props.isOpen) {
            setName(currentUser.name);
            setDescription(currentUser.about);
        }
    }, [props.isOpen, currentUser]);

    return (
        <PopupWithForm
            isOpen={props.isOpen}
            id={'idProfile'}
            name={'updateProfile'}
            title="Редактировать профиль"
            onClose={props.onClose}
            buttonText={'Сохранить'}
            onSubmit={handleSubmit}
        >
            <input
                className="popup__input popup__input_type_name"
                id="popup__name-author"
                name="username"
                placeholder="Имя"
                required
                type="text"
                value={name}
                onChange={handleNameInputChange}
            />
            <span className="popup__name-author-error popup__error"></span>
            <input
                className="popup__input popup__input_type_job"
                id="popup__link-author"
                name="userinfo"
                placeholder="Работа"
                required
                type="text"
                value={description}
                onChange={handleDescriptionInputChange}
            />
            <span className="popup__name-author-error popup__error"></span>
        </PopupWithForm>
    );
}
