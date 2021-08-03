import React from 'react'
import vector from "../images/Vector.svg";
import Header from "./Header";


function Registr(props){
    const emailInput = React.useRef();
    const passwordInput = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        props.onRegister(passwordInput.current.value,emailInput.current.value)
    };

    return (
            <div className="form">
                <Header title={'Регистрация'} link={'/sign-in'} />
                <main>
                    <form onSubmit={handleSubmit} className={"form__registration"}>
                        <h1 className={'form__name'}>Регистрация</h1>
                        <input ref={emailInput} className={'form__input'} type={"email"} placeholder={'Email'}  />
                        <input ref={passwordInput} className={'form__input'} type={"password"} placeholder={'Пароль'}  />
                        <input className={'form__submit'} type={"submit"} value={'Зарегистрироваться'}></input>
                        <p className={'form__text'}>Уже зарегистрированы?
                            <a className={'form__link'} href={'/sign-in'}>Войти</a>
                        </p>
                    </form>

                </main>
            </div>
        )
    }
export default Registr;
