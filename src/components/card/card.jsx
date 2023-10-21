import { MdFlipCameraAndroid } from "react-icons/md"
import { useState } from "react";
import "./card.scss"

const card = (props) => {
    const css = {backgroundImage: `url(${props.thumbnail})`};
    const [rotation, rotate] = useState(true);
    return (
        <div className="card">
            <div className="card-content">
            {rotation ? 
            <div className="front" style={css}>
                <h2>{props.title}</h2>
                <button onClick={() => rotate(!rotation)}><MdFlipCameraAndroid /></button>
            </div> : 
            <div className="back">
                <div className="back-content">
                    <p>{props.description}</p>
                    <div className="tags">
                        <ul>{props.tags.map((item) => {return(<li key={item}>{item}</li>)})}</ul>
                    </div>
                    <a href={props.link}>{props.title}</a>
                </div>
                <button onClick={() => rotate(!rotation)}><MdFlipCameraAndroid /></button>
            </div>
            }
            </div>
        </div>
    );
};

export default card;