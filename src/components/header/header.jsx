import Menu from "../menu/menu"
import "./header.scss"

const Header = () => {


    return(
    <div className="header main-title">
        <img src="" alt="logo perso" />
        <div>
            <h1>Portfolio de développeur web</h1>
            <Menu></Menu>
        </div>
    </div>
    );
}

export default Header

//inverser position logo et boutons ?
//menu dans un lien qui renvoi a l'accueil