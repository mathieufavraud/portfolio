import "./item.scss"

const item = (props) => {
    return (
        <figure>
            <img src={props.link} alt={props.title} />
            <figcaption>{props.title}</figcaption>
        </figure>
    );
};

export default item;

