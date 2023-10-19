import "./gallery.scss"
import Card from "../card/card.jsx"
import data from "../../data/gallery.json"

const gallery = () => {
    return (
        <section id="gallery">
            <h1>Mes travaux</h1>
            <div className="buttons">
                {data.tags.map((item) => {return(<button key={item}>{item}</button>)})}
            </div>
            <div className="cards">
                {data.gallery.map((item) => {return (<Card key={item.id} title={item.title} link={item.link} description={item.description} tags={item.tags}/>)})}
            </div>
        </section>
    );
};

export default gallery;