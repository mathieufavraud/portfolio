import { useState } from "react"
import { FiMenu } from "react-icons/fi"
import { AiOutlineClose } from "react-icons/ai"
import "./menu.scss"

const menu = () => {
    const [toggle, setToggle] = useState(true);
    return (
        <div>
            <div id="menu" className={toggle ? "menu" : "hidden"}>
                <button onClick={() => setToggle(false)}>
                    <FiMenu></FiMenu>
                </button>
            </div>
            <div id="links" className={toggle ? "hidden" : "links"}>
                <div>
                    <h3>Menu</h3>
                    <button onClick={() => setToggle(true)}><AiOutlineClose /></button>
                </div>
                <a href="#intro">Introduction</a>
                <a href="#about">A propos de moi</a>
                <a href="#skills">Mes compétences & outils</a>
                <a href="#gallery">Mes travaux</a>
                <a href="#contact">Contactez moi</a>
            </div>
        </div>
    );
}
export default menu;

//affichage decalé par le header