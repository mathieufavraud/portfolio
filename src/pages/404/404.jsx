import Header from "../../components/header/header";
import Footer from "../../components/footer/footer";
import "./404.scss"

const error = () => {
    return (
        <div>
            <Header></Header>
            <h1>Erreur 404</h1>
            <Footer></Footer>
        </div>
    );
};

export default error;