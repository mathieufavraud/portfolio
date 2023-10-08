const contact = () => {
    return (
        <section id="contact">
            <h1>Contactez moi</h1>
            <form action="">
                <input type="text" id="name" placeholder="Votre nom"/>
                <input type="email" id="mail" placeholder="Votre email" required/>
                <textarea id="message" placeholder="que voulez vous dire ?"></textarea>
                <button>Envoyer</button>
            </form>
        </section>
    );
};

export default contact;

//configurer un service email ?