import { BsArrowCounterclockwise } from "react-icons/bs"
import { HiCursorClick } from "react-icons/hi"
import { useState } from "react";
import "./card.scss"

const Card = (props) => {
    const css = {backgroundImage: `linear-gradient(180deg, rgba(255,255,255,0.1),rgba(0,0,0,0.7)), url(${props.thumbnail})`};
    const [rotation, Rotate] = useState(true);
    return (
        <div className="card">
            <div className="card-content">
            {rotation ? 
            <div className="front" style={css} onClick={() => Rotate(!rotation)}>
                <h3>{props.title} < BsArrowCounterclockwise/></h3>
            </div> : 
            <div className="back" onClick={() => Rotate(!rotation)}>
                <div className="back-content">
                    <div>
                        <p>{props.description}</p>
                        <p>{props.details}</p>
                        <div className="tags">
                            <ul>{props.tags.map((item) => {return(<li key={item}>{item}</li>)})}</ul>
                        </div>
                    </div>
                    <a href={props.link} target="_blank" rel="noreferrer"><button aria-label="lien du site">{props.title} <HiCursorClick /></button></a>
                </div>
            </div>
            }
            </div>
        </div>
    );
};

export default Card;