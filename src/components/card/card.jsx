import { BsArrowCounterclockwise } from "react-icons/bs"
import { useState } from "react";
import "./card.scss"

const card = (props) => {
    const css = {backgroundImage: `url(${props.thumbnail})`};
    const [rotation, Rotate] = useState(true);
    return (
        <div className="card">
            <div className="card-content">
            {rotation ? 
            <div className="front" style={css} onClick={() => Rotate(!rotation)}>
                <h2>{props.title} < BsArrowCounterclockwise/></h2>
            </div> : 
            <div className="back" onClick={() => Rotate(!rotation)}>
                <div className="back-content">
                    <p>{props.description}</p>
                    <div className="tags">
                        <ul>{props.tags.map((item) => {return(<li key={item}>{item}</li>)})}</ul>
                    </div>
                    <a href={props.link}>{props.title}</a>
                </div>
            </div>
            }
            </div>
        </div>
    );
};

export default card;