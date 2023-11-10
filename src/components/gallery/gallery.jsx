import "./gallery.scss"
import { useState, useEffect } from "react";
import Card from "../card/card.jsx"
import data from "../../data/gallery.json"

const Gallery = () => {
    const [filter, setFilter] = useState("Tous");
    const [hidden, setHidden] = useState(false);

    useEffect(() =>  {
        const timeout = setTimeout(() => {
            setHidden(false);
        }, 100);

        return () => clearTimeout(timeout);
    }, [filter]);

    const handleFilterChange = (newFilter) => {
        setHidden(true);
        setTimeout(() => {
            setFilter(newFilter);
        }, 300);
    };

    return (
        <section id="gallery" className="section_title_right">
            <h1>Mes travaux</h1>
            <div className="buttons">
                {data.tags.map((item) => {return(<button key={item} className={item==filter ? "active" : "inactive" } onClick={() => handleFilterChange(item)} aria-label={item}>{item}</button>)})}
            </div>
            <div  className={`cards ${hidden ? 'hidden' : ''}`}>
                {data.gallery.filter((item) => filter == "Tous" ? item : item.tags.includes(filter)).map((item) => {return (<Card key={item.id} title={item.title} link={item.link} description={item.description} details={item.details} thumbnail={item.thumbnail} tags={item.tags}/>)})}
            </div>
        </section>
    );
};

export default Gallery;