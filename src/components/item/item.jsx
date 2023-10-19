import "./item.scss"
import test from "../../assets/html5.svg"

const item = (props) => {
    return (
        <figure>
            <img src={test} alt={props.title} />
            <figcaption>{props.title}</figcaption>
        </figure>
    );
};

export default item;

//props.link ne fonctionne pas
//mettre les images dans public au lieu de assets

