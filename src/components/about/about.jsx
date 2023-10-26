import { Link } from "react-router-dom"
import { PiMagnifyingGlassBold } from "react-icons/pi"
import "./about.scss"

const about = () => {
    return (
        <section id="about" className="section_title_right">
            <h2>A propos de moi</h2>
            <p>Je suis un developpeur debutant de 35 ans avec une longue experience dans le domaine de la relation utilisateur et du service client.</p>
            <p>Une carrière dans le support informatique et ma passion pour tout les aspects techniques de mon metier m&apos;ont conduits à m&apos;interesser au domaine du développement web.</p>
            <p>Je dispose de plus d&apos;une experience dans l&apos;assurance qualité en développement web et en auto-entreprenariat, ce qui m&apos;offre des compétences supplémentaires pour être le plus polyvalent possible.</p>
            <Link to="/cv">< PiMagnifyingGlassBold /> Mon CV</Link>
        </section>
    );
};

export default about;