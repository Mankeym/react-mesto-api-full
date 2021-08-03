import { useState, useEffect } from "react";
import {Redirect, Route, Switch, useHistory  } from 'react-router-dom';
import Header from "./Header";
import Main from "./Main";
import Footer from "./Footer";
import EditAvatarPopup from './EditAvatarPopup';
import EditProfilePopup from "./EditProfilePopup";
import '../index.css';
import api from '../utils/api';
import AddPlacePopup from "./AddPlacePopup";
import ImagePopup from './ImagePopup'
import PopupDelete from "./PopupDelete";
import Registr from "./Registration";
import { CurrentUserContext } from "../contexts/CurrentUserContext";
import { CardsContext } from "../contexts/CardsContext";
import Login from "./Login";
import ProtectedRoute from "./ProtectedRoute";
import * as auth from '../utils/auth';
import InfoTooltip from "./InfoTooltip";



function App() {
  const [isEditAvatarPopupOpen,setEditAvatarPopupOpen] = useState(false)
  const [isEditProfilePopupOpen, setEditProfilePopupOpen] = useState(false)
  const [isAddPlacePopupOpen, setAddPlacePopupOpen] = useState(false)
  const [selectedCard, setSelectedCard] = useState(null)
  const [isDeletePopupOpen, setIsDeletePopupOpen] = useState(false);
  const [isInfoTooltipOpen, setInfoTooltipOpen] = useState(false);
  const [currentUser, setCurrentUser] = useState({});
  const [deletedCard, setDeletedCard] = useState(null);
  const [cards, setCards] = useState([]);
  const [loggedIn,setLoggedIn] = useState(false);
  const [tooltip, setTooltip] = useState(false);
  const [email, setEmail] = useState(null);
  const history = useHistory();
    function signOut(){
        localStorage.removeItem('jwt');
        setLoggedIn(false);
        history.push('/sign-in');
        console.log(localStorage)
    }
    useEffect(()=>{
        tokenCheck();
    },[]);
    useEffect(() => {
    api
        .getInitialData()
        .then((response) => {
          const [userData, cardsData] = response;

          setCurrentUser(userData);
          setCards(cardsData);
        })
        .catch((err) => console.log("Ошибка загрузки начальных данных - " + err));
  }, []);

    useEffect(()=>{
        if (loggedIn){
            history.push('/profile');
        }
    },[loggedIn, email])
    function tokenCheck () {
        const jwt = localStorage.getItem('jwt');
        if (jwt){
            // проверим токен
            auth.getToken(jwt)
                .then((res) => {
                    if (res){
                        setEmail(res.data.email)
                        setLoggedIn(true);
                    }
                })
                .catch((err) => console.log(err));
        }
    }
    function closeAllPopups() {
    setEditAvatarPopupOpen(false)
    setEditProfilePopupOpen(false)
    setAddPlacePopupOpen(false)
    setSelectedCard(null)
    setIsDeletePopupOpen(false)
    setInfoTooltipOpen(false)
  }
  function handleEditAvatarClick (){
    setEditAvatarPopupOpen(true)
  }
  function handleEditProfileClick(){
    setEditProfilePopupOpen(true)
  }
  function handleAddPlaceClick(){
    setAddPlacePopupOpen(true)
  }
  function handleCardClick(card) {
    setSelectedCard(card);
  }
  function handleCardDeleteClick(card) {
    setIsDeletePopupOpen(true);

    setDeletedCard(card);
  }
  function handleCardLike(card) {
    const isLiked = card.likes.some((i) => i._id === currentUser._id);

    api
        .changeLikeCardStatus(card._id, isLiked)
        .then((newCard) => {
          setCards((state) =>
              state.map((c) => (c._id === card._id ? newCard : c))
          );
        })
        .catch((err) => console.log("Ошибка постановки лайка/дизлайка - " + err));
  }
  function handleUpdateUser({ name, about }) {

    api
        .editUserInfo(name, about)
        .then((userData) => {
          setCurrentUser(userData);

          closeAllPopups();
        })
        .catch((err) =>
            console.log("Ошибка обновления данных пользователя - " + err)
        );
  }
  function handleUpdateAvatar({ avatar }) {
    api
        .editAvatar(avatar)
        .then((userData) => {
          setCurrentUser(userData);

          closeAllPopups();
        })
        .catch((err) =>
            console.log("Ошибка обновления аватара пользователя - " + err)
        );
  }

  function handleAddPlaceSubmit({ name, link }) {
    api
        .addCard(name, link)
        .then((cardsData) => {
          setCards([cardsData, ...cards]);

          closeAllPopups();
        })
        .catch((err) => console.log("Ошибка добавления новой карточки - " + err));
  }

  function handleDeleteCardSubmit(id) {
    api
        .deleteCard(id)
        .then(() => {
          setCards((cardsData) => cardsData.filter((card) => id !== card._id));

          closeAllPopups();
        })
        .catch((err) => console.log("Ошибка удаления карточки - " + err));
  }
    function handleRegistration(password, email){
        auth.register(password, email)
            .then((data)=>{
                if (data === 'Err'){
                    setInfoTooltipOpen(true);
                } else {
                    setTooltip(!tooltip)
                    setInfoTooltipOpen(true);
                }
            })
            .catch((err) => console.log(err));
    }
    function handleLogIn(password, email){
        auth.logIn(password, email)
            .then((data)=>{
                if (data === 'Err'){

                } else {
                    localStorage.setItem('jwt', data.token);
                    setLoggedIn(true);
                    setEmail(email);
                    history.push('/profile');
                }
            })
            .catch((err) => console.log(err));
    }
    return (
        <CurrentUserContext.Provider value={currentUser}>
            <CardsContext.Provider value={cards}>
                <div className="page">
                    {loggedIn && <Header email={email} loggedIn={loggedIn} title={"Выйти"} link='/sign-in' signOut={signOut}/>}
                    <EditAvatarPopup
                        isOpen={isEditAvatarPopupOpen}
                        onClose={closeAllPopups}
                        onUpdateAvatar={handleUpdateAvatar}
                    />
                    <EditProfilePopup
                        isOpen={isEditProfilePopupOpen}
                        onClose={closeAllPopups}
                        onUpdateUser={handleUpdateUser}
                    />
                    <AddPlacePopup
                        isOpen={isAddPlacePopupOpen}
                        onClose={closeAllPopups}
                        onAddPlace={handleAddPlaceSubmit}
                    />
                    <ImagePopup card={selectedCard} onClose={closeAllPopups}/>
                    <PopupDelete
                        card={deletedCard}
                        isOpen={isDeletePopupOpen}
                        onClose={closeAllPopups}
                        onCardDelete={handleDeleteCardSubmit}
                    />
                    <InfoTooltip isOk={tooltip} isOpen={isInfoTooltipOpen} onClose={closeAllPopups}/>
          <Switch>
              <ProtectedRoute path='/profile'
                              loggedIn={loggedIn}
                              component={Main}
                              onAddPlace={handleAddPlaceClick}
                              onEditAvatar={handleEditAvatarClick}
                              onEditProfile={handleEditProfileClick}
                              onCardClick={handleCardClick}
                              onCardDelete={handleCardDeleteClick}
                              onCardLike={handleCardLike}
              />

              <Route path="/sign-up">
                  <Registr onRegister={handleRegistration} />

              </Route>
              <Route path="/sign-in">
                  <Login onLogIn={handleLogIn} />
              </Route>
              <Route exact path="/">
                  {loggedIn ? <Redirect to="/profile" /> : <Redirect to="/sign-in" />}
              </Route>


          </Switch>
                <Footer />
               </div>
        </CardsContext.Provider>
    </CurrentUserContext.Provider>
  );

}


export default App;
