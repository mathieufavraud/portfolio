import { BsGithub } from "react-icons/bs"
import "./intro.scss"

const intro = () => {
    return (
        <section id="intro" className="section_title_left">
            <h1>Mathieu Favraud </h1>
            <h2>Développeur Fullstack</h2>
            <p>Autodidacte et debutant, je suis passionné d&apos;informatique et par la création d&apos;application web innovantes.</p>
            <div>
                <a href="#contact">Contactez moi</a>
                <a href="https://github.com/mathieufavraud"><BsGithub /> Mon profil Github</a>
            </div>
        </section>
    );
};

export default intro;

//remplir le profil github
//<img src={image} alt="logo github" />