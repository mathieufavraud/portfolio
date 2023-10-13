import Menu from "../menu/menu"
import image from "../../assets/menu-bar.svg"
import { useState } from "react"
import "./header.scss"

const Header = () => {
    const [state, setState] = useState(true);

    return(
    <div className="header main-title">
        <div>
            <button onClick={() => setState(!state)}>
                {state ? <img src={image} alt="menu" /> : <Menu></Menu>}
            </button>
        </div>
        <h1>Portfolio de developpeur web</h1>
    </div>
    );
}

export default Header
