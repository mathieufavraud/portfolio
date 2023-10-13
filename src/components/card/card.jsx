import "./card.scss"
import test from "../../assets/test.jpg"

const card = (props) => {
    const css = {backgroundImage: `url(${test})`};
    return (
        <div style={css}>
            <h2>{props.title}</h2>
        </div>
    );
};

export default card;