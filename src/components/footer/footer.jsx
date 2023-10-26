import "./footer.scss"
import { FaCopyright } from "react-icons/fa"

const Footer = () => {
    return(<div className="footer">
        <section className="legal">
            <h3>Mentions légales</h3>
            <p>Ce site a été entièrement realisé par moi même avec React</p>
            <p>Copyright <FaCopyright/> &quot;moi même&quot; 2023 </p>
        </section>
        <section className="contact-info">
            <h3>Contact :</h3>
            <a href="tel:+33600000000">Tel : 06.52.50.06.77</a>
            <a href="mailto:mathieu.favraud@gmail.com">mathieu.favraud@gmail.com</a>
            <a href="https://www.linkedin.com/in/mathieu-favraud-20244a127/">Mon Linkedin</a>
        </section>
    </div>);
}

export default Footer