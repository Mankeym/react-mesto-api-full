class Api {
    constructor({adress,token}){
        this._adress = adress; 
        this._token = token;
    }
    _checkApiRequest(res) {
        if (res.ok) {
            return res.json();
        }

        return Promise.reject(new Error(`${res.status}`));
    }
    getCard(){
        return fetch(`${this._adress}/cards`,{
            headers: {
                authorization: this._token
                
            }
        }).then(this._checkApiRequest);
    }
    getUserInfo(){
        return fetch(`${this._adress}/users/me`,{
            headers:{
                authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                'Content-Type': 'application/json'
            }
        }).then(this._checkApiRequest);
    
    }
    getInitialData() {
        return Promise.all([this.getUserInfo(), this.getCard()]);
    }
    editUserInfo(name,profession){
        return fetch(`${this._adress}/users/me`,{
            method: 'PATCH',
            headers: {
                authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                about: profession
            })
        })
            .then(this._checkApiRequest);
        
            
    }
    addCard(name,link){
        return fetch(`${this._adress}/cards`,{
            method: 'POST',
            headers: {
                authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                name: name,
                link: link
            })
        })
            .then(this._checkApiRequest);
    }
    deleteCard(id){
        return fetch(`${this._adress}/cards/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                    'Content-Type': 'application/json'
                },
        })
            .then(this._checkApiRequest);
    }
    addLike(id){
        return fetch(`${this._adress}/cards/likes/${id}`, {
                method: 'PUT',
                headers: {
                    authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                    'Content-Type': 'application/json'
                },
        })
            .then(this._checkApiRequest);
    }

    //Удаление лайка
    removeLike(id){
        return fetch(`${this._adress}/cards/likes/${id}`, {
                method: 'DELETE',
                headers: {
                    authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                    'Content-Type': 'application/json'
                },
        })
            .then(this._checkApiRequest);

    }

    editAvatar(data){
        return fetch(`${this._adress}/users/me/avatar`, {
            method: 'PATCH',
            headers: {
                authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                avatar: data
            })
    })
            .then(this._checkApiRequest);

    }
    changeLikeCardStatus(id, isLiked) {
        return fetch(`${this._adress}/cards/likes/${id}`, {
            method: isLiked ? "DELETE" : "PUT",
            headers: {
                authorization: '1c933ec4-a4fc-4d43-aaf4-c9a8a8844745',
                'Content-Type': 'application/json'
            },
        }).then(this._checkApiRequest);
    }
}

const api = new Api({
    adress:'https://mesto.nomoreparties.co/v1/cohort-22',
    token:'1c933ec4-a4fc-4d43-aaf4-c9a8a8844745'

})

export default api
