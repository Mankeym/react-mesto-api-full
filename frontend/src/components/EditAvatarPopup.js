import PopupWithForm from './PopupWithForm';
import { useEffect, useRef, useState } from "react";
const DEFAULT_VALUE = "Сохранить";
export default function EditAvatarPopup(props) {

    const [buttonValue, setButtonValue] = useState(DEFAULT_VALUE);
    const avatarRef = useRef();

    function handleSubmit(evt) {
        evt.preventDefault();

        props.onUpdateAvatar({
            avatar: avatarRef.current.value,
        });

        avatarRef.current.value = "";
    }
    return (
        <PopupWithForm
            isOpen={props.isOpen}
            id={'idAvatar'}
            name={'updateAvatar'}
            onClose={props.onClose}
            onSubmit={handleSubmit}
            submitButtonValue={buttonValue}
            title="Обновить аватар"
            buttonText={'Сохранить'}
        >
                <input
                    className="popup__input popup__input_type_avatar"
                    id="popup__avatar"
                    name="cardAvatar"
                    placeholder="Ссылка на картинку"
                    required
                    type="url"
                    ref={avatarRef}
                />
                <span className="popup__name-author-error popup__error"></span>
        </PopupWithForm>
    );
}
