//import Header from "../../components/header/header";
//import Footer from "../../components/footer/footer";
import CV from "../../assets/CV.pdf";
import "./cv.scss"

const cv = () => {
    return (
        <section id="cv" className="section_title_left">
            <iframe src={CV}></iframe>
        </section>
    );
};

export default cv;