import "./contact.scss"
import emailjs from "@emailjs/browser"
import { useRef, useState } from "react";
import { BsFillSendFill, BsFillSendCheckFill } from "react-icons/bs"

const Contact = () => {
    const form = useRef()
    const [sent, setSent] = useState(false)

    const sendEmail = (e) => {
        e.preventDefault(); 
     
        emailjs.sendForm("service_324vnbr", "template_e8rku3y", form.current, "I5XgpIfgH1u71e0GV")
          .then((result) => {
              console.log("email success", result)
              setSent(true)
          }, (error) => {
              console.error("email failed", error)
              alert("l'envoi un mail à échoué")
          });
      };

    return (
        <section id="contact" className="section_title_left">
            {sent ?
            <div className="message_sent">
                <h2>Message envoyé</h2>
                <BsFillSendCheckFill size={40}/>
            </div>
            :
            <div>
                <h2>Contactez moi</h2>
                <form ref={form} onSubmit={sendEmail}>
                    <input className="text_form" type="text" id="name" name="user_name" placeholder="Votre nom" aria-label="Nom"/>
                    <input className="text_form" type="email" id="mail" name="user_email" placeholder="Votre email" aria-label="Email" required/>
                    <textarea className="text_form" id="message" name="message" placeholder="Que voulez vous dire ?" aria-label="Message" required></textarea>
                    <button type="submit" aria-label="Envoyer">Envoyer <BsFillSendFill size={20}/></button>
                </form>
            </div>
            }
        </section>
    );
};

export default Contact;


