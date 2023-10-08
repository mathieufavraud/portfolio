import image from "../../assets/github-mark.svg"

const intro = () => {
    return (
        <section id="intro">
            <h1>Mathieu Favraud </h1>
            <h2>Développeur Fullstack</h2>
            <p>Autodidacte et debutant, je suis passionné d&apos;informatique et par la création d&apos;application web innovantes.</p>
            <a href="#contact">Contactez moi</a>
            <a href="https://github.com/mathieufavraud"><img src={image} alt="logo github" /> Mon profil Github</a>
        </section>
    );
};

export default intro;

//remplir le profil github