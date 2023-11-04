import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import CV from "../../assets/CV.pdf";
import "./cv.scss"

const cv = () => {
    return (
        <div>
            <Header></Header>
            <iframe src={CV}></iframe>
            <Footer></Footer>
        </div>
    );
};

export default cv;