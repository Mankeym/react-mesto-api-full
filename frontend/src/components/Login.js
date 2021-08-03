import React from 'react';
import vector from "../images/Vector.svg";
import { withRouter } from 'react-router-dom';
import Header from "./Header";


function Login(props){
    const emailInput = React.useRef();
    const passwordInput = React.useRef();

    function handleSubmit(e){
        e.preventDefault();
        props.onLogIn(passwordInput.current.value,emailInput.current.value)
    };
        return (
            <div className="form">
                <Header title={'Регистрация'} link={'/sign-up'} />
                <main>
                    <form onSubmit={handleSubmit} className={"form__registration"}>
                        <h1 className={'form__name'}>Вход</h1>
                        <input ref={emailInput} className={'form__input'} type={"email"} placeholder={'Email'} />
                        <input ref={passwordInput} className={'form__input'} type={"password"} placeholder={'Пароль'} />
                        <input className={'form__submit'} type={"submit"} value={'Войти'}></input>
                    </form>

                </main>
            </div>
        )
}
export default Login;
