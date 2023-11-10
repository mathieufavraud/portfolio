import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import "./menu.scss"

const menu = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <div id="menu" className={toggle ? "menu" : "hidden"} aria-label="menu">
                <button onClick={() => setToggle(false)}>
                    <FiMenu></FiMenu>
                </button>
            </div>
            <div id="links" className={toggle ? "hidden" : "links"}>
                <div>
                    <h3>Menu</h3>
                    <button onClick={() => setToggle(true)} aria-label="menu close"><AiOutlineClose /></button>
                </div>
                <a href="#intro" onClick={() => setToggle(true)}>Introduction</a>
                <a href="#about" onClick={() => setToggle(true)}>A propos de moi</a>
                <a href="#skills" onClick={() => setToggle(true)}>Mes compétences & outils</a>
                <a href="#gallery" onClick={() => setToggle(true)}>Mes travaux</a>
                <a href="#contact" onClick={() => setToggle(true)}>Contactez moi</a>
            </div>
        </div>
    );
}
export default menu;

//affichage decalé par le header