import Menu from "../menu/menu"
import "./header.scss"

const Header = () => {


    return(
    <div className="header main-title">
        <Menu></Menu>
        <div>
            <h1>Portfolio de développeur web</h1>
            <img src="" alt="logo perso" />
        </div>
    </div>
    );
}

export default Header