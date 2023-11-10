import "./footer.scss"
import { FaRegCopyright } from "react-icons/fa"
import { BsTelephoneFill, BsLinkedin  } from "react-icons/bs"
import { AiFillMail } from "react-icons/ai"
import { Link } from "react-router-dom"
import { Email, Phone } from "hidden-from-bots-react";

const Footer = () => {
    return(<div className="footer">
        <div>
            <Link><img src="" alt="logo perso" /></Link>
            <section className="legal">
                <h4>Mentions légales</h4>
                <p>Ce site a été entièrement realisé par moi même avec React</p>
                <p className="italic">Copyright <FaRegCopyright /> &quot;moi même&quot; 2023 </p>
            </section>
        </div>
        <section className="contact-info">
            <h4>Contact</h4>
            <Email email="mathieu.favraud@gmail.com" className="contact-item"><AiFillMail /> Mon email</Email>
            <Phone phone="+33600000000" className="contact-item"><BsTelephoneFill /> Mon téléphone</Phone>
            <a href="https://www.linkedin.com/in/mathieu-favraud-20244a127/" target="_blank" rel="noreferrer" className="contact-item"><BsLinkedin /> Mon Linkedin</a>
        </section>
    </div>);
}

export default Footer

//affichage du telephone et mail dans une image ou un script

/*
a href="tel:+33600000000"><BsTelephoneFill /> Tel : +(33)6.52.50.06.77</a>
<a href="mailto:mathieu.favraud@gmail.com"><AiFillMail /> mathieu.favraud@gmail.com</a>
*/