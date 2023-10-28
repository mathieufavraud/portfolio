import "./gallery.scss"
import {useState} from "react";
import Card from "../card/card.jsx"
import data from "../../data/gallery.json"

const gallery = () => {
    const [filter, setFilter] = useState("Tous");
    return (
        <section id="gallery" className="section_title_right">
            <h1>Mes travaux</h1>
            <div className="buttons">
                {data.tags.map((item) => {return(<button key={item} className={item==filter ? "active" : "inactive" } onClick={() => setFilter(item)}>{item}</button>)})}
            </div>
            <div className="cards">
                {data.gallery.filter((item) => filter == "Tous" ? item : item.tags.includes(filter)).map((item) => {return (<Card key={item.id} title={item.title} link={item.link} description={item.description} thumbnail={item.thumbnail} tags={item.tags}/>)})}
            </div>
        </section>
    );
};

export default gallery;