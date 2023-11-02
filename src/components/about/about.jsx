import { Link } from "react-router-dom"
import { PiMagnifyingGlassBold } from "react-icons/pi"
import "./about.scss"

const about = () => {
    return (
        <section id="about" className="section_title_right">
            <h2>A propos de moi</h2>
            <p>Fort d&apos;une longue expérience dans le domaine informatique, et en particulier la relation utilisateur et service client, j’ai décidé de me concentrer sur la programmation.</p>
            <p>Je suis donc a présent développeur débutant.</p>
            <p>Une carrière dans le support informatique et ma passion pour tout les aspects techniques de mon metier m&apos;ont conduit à m&apos;interesser au domaine du développement web.</p>
            <p>J&apos;ai egalement une experience dans l&apos;assurance qualité en développement web et dans l&apos;auto-entreprenariat, ce qui me permet d&apos;être le plus polyvalent possible.</p>
            <Link to="/cv">< PiMagnifyingGlassBold /> Mon CV</Link>
        </section>
    );
};

export default about;