import { BsGithub } from "react-icons/bs"
import { AiOutlineMail } from "react-icons/ai"
import "./intro.scss"

const intro = () => {
    return (
        <section id="intro" className="section_title_left">
            <h2>Mathieu Favraud </h2>
            <h3>Développeur Fullstack</h3>
            <p>Autodidacte et nouvellement diplomé, je suis passionné par l&apos;informatique, la technologie en général, et par la création d&apos;applications web innovantes.</p>
            <div>
                <a href="#contact"><AiOutlineMail /> Contactez moi</a>
                <a href="https://github.com/mathieufavraud"><BsGithub /> Mon profil Github</a>
            </div>
        </section>
    );
};

export default intro;

//remplir le profil github
//<img src={image} alt="logo github" />