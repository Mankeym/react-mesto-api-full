import vector from "../images/Vector.svg";
import {Link} from 'react-router-dom';

function Header (props) {
    function handleSignOut(){
        props.signOut();
    };
    return(
    <header className="header">
        <img src={vector} className="header__logo" alt="Место"/>
        <div className="header__info">
            <p className="header__text">{props.email}</p>
            <Link to={props.link}><p onClick={props.signOut && handleSignOut} className="header__btn">{props.title}</p></Link>
        </div>
    </header>
    );
}
export default Header;