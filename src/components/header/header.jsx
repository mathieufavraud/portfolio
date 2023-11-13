import Menu from "../menu/menu"
import "./header.scss"
import Logo from "../../assets/logo.png"
import { Link, useLocation } from "react-router-dom"
import { useEffect, useState } from "react"

const Header = () => {
    const location = useLocation()
    const display=location.pathname === "/portfolio/"

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
        <Link to="portfolio/"><img src={Logo} alt="logo perso" /></Link>
        <div>
            <h1>Portfolio de développeur web</h1>
            <div className="menu-container">
                {display && <Menu></Menu>}
            </div>
        </div>
    </div>
    );
}

export default Header