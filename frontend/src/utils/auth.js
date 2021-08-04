export const BASE_URL = 'https://auth.nomoreparties.co';

const handleOriginalResponse = (response) => {
    if (response.ok){
        return (response.json());
    } else {
        console.log('Ошибка');
        Promise.reject(`Ошибка: ${response.status}`)
        return ('Err')
    }
}

export const register = (password, email) => {
    console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${BASE_URL}/sign-up`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"password":password, "email":email})
    })
        .then(handleOriginalResponse)
};

export const logIn = (password, email) => {
    console.log(JSON.stringify({"password":password, "email":email}))
    return fetch(`${BASE_URL}/sign-in`, {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({"password":password, "email":email})
    })
        .then(handleOriginalResponse)};

export const getToken = (token) => {
    return fetch(`${BASE_URL}/users/me`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${token}`
        }
    })
        .then(handleOriginalResponse)};
