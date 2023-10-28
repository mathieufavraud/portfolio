import "./contact.scss"
import {BsFillSendFill} from "react-icons/bs"

const contact = () => {
    return (
        <section id="contact" className="section_title_left">
            <h2>Contactez moi :</h2>
            <form action="">
                <input className="text_form" type="text" id="name" placeholder="Votre nom"/>
                <input className="text_form" type="email" id="mail" placeholder="Votre email" required/>
                <textarea className="text_form" id="message" placeholder="Que voulez vous dire ?"></textarea>
                <button>Envoyer <BsFillSendFill/></button>
            </form>
        </section>
    );
};

export default contact;

//configurer un service email