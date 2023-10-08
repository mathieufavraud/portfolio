import image from "../../assets/bars-solid.svg"
import Menu from "../menu/menu"
import { useState } from "react"
import "./header.scss"

const Header = () => {
    const [state, setState] = useState(true);

    return(
    <div className="header">
        <div>
            <button onClick={() => setState(!state)}>
                {state ? <img src={image} alt="image de menu" /> : <Menu></Menu>}
            </button>
        </div>
        
        <h1>Portfolio de developpeur web</h1>
    </div>
    );
}

export default Header
