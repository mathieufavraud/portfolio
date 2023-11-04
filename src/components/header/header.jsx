import Menu from "../menu/menu"
import { Link } from "react-router-dom"
import "./header.scss"
import { useEffect, useState } from "react"

const Header = () => {
    useEffect (() => {
        window.addEventListener("scroll", handleScroll, {passive: true})
        return () => {
            window.removeEventListener("scroll", handleScroll)
        }
    }, [])

    const[scrolled,  setScroll] = useState(false)
    const handleScroll = () => {
        if(window.pageYOffset > 250) {
            setScroll(true)
          } else {
            setScroll(false)
          }
    }
    return(
    <div className={`header main-title ${scrolled && "scrolled"}`}>
        <Link><img src="" alt="logo perso" /></Link>
        <div>
            <h1>Portfolio de développeur web</h1>
            <div className="menu-container">
                <Menu></Menu>
            </div>
        </div>
    </div>
    );
}

export default Header

//affichage conditionnel du menu ?