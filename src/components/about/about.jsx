import { Link } from "react-router-dom"
import "./about.scss"

const about = () => {
    return (
        <section id="about" className="section_title_right">
            <h1>A propos de moi</h1>
            <p>Je suis un developpeur debutant de 35 ans avec une longue experience dans le domaine de la relation utilisateur.</p>
            <p>Une carrière dans le support informatique et ma passion pour tout les aspects techniques de mon metier m&apos;ont conduit à m&apos;interesser au domaine du developpement web.</p>
            <p>Je dispose de plus d&apos;une experience dans l&apos;assurance qualité en developpement web et en auto entreprenariat, ce qui m&apos;offre des competences supplémentaires pour être le plus polyvalent possible.</p>
            <Link to="/cv">Mon CV</Link>
        </section>
    );
};

export default about;