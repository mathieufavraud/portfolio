import "./contact.scss"
import emailjs from "@emailjs/browser"
import { useRef } from "react";
import { BsFillSendFill } from "react-icons/bs"

const contact = () => {
    const form = useRef()

    const sendEmail = (e) => {
        e.preventDefault(); 
        console.log("email");
     
        emailjs.sendForm("service_324vnbr", "template_e8rku3y", form.current, "I5XgpIfgH1u71e0GV")
          .then((result) => {
              console.log("email success", result)
              alert("ça marche")
          }, (error) => {
              console.error("email failed", error)
              alert("ça marche pas")
          });
      };
     



    return (
        <section id="contact" className="section_title_left">
            <h2>Contactez moi :</h2>
            <form ref={form} onSubmit={sendEmail}>
                <input className="text_form" type="text" id="name" name="user_name" placeholder="Votre nom"/>
                <input className="text_form" type="email" id="mail" name="user_email" placeholder="Votre email" required/>
                <textarea className="text_form" id="message" name="message" placeholder="Que voulez vous dire ?"></textarea>
                <button><input type="submit" value="Envoyer"/><BsFillSendFill/></button>
            </form>
        </section>
    );
};

export default contact;

//service mail ne fonctionne que partiellement