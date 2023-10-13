import "./contact.scss"
import {BsFillSendFill} from "react-icons/bs"

const contact = () => {
    return (
        <section id="contact" className="section_title_right">
            <h1>Contactez moi</h1>
            <form action="">
                <input type="text" id="name" placeholder="Votre nom"/>
                <input type="email" id="mail" placeholder="Votre email" required/>
                <textarea id="message" placeholder="que voulez vous dire ?"></textarea>
                <button><BsFillSendFill/>Envoyer</button>
            </form>
        </section>
    );
};

export default contact;

//configurer un service email ?