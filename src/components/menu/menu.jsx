import "./menu.scss"

const menu = () => {
    return (
        <div className="links">
                <a href="#intro">Introduction</a>
                <a href="#about">A propos</a>
                <a href="#skills">Compétences</a>
                <a href="#gallery">Gallerie de projets</a>
                <a href="#contact">Contact</a>
        </div>
    );
};

export default menu;