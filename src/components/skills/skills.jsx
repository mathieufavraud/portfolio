import "./skills.scss"
import Element from "../item/item.jsx"
import data from "../../data/skills.json"

const skills = () => {
    return (
        <section id="skills" className="section_title_left">
            <h2>Mes compétences & outils</h2>
            <div className="container">
                <h3>Compétences en développement web</h3>
                <div className="skills">
                    <section className="frontend">
                        <div className="frontend-container">
                            {data.frontend.map((item) => {return (<Element key={item.id} title={item.title} link={item.link}/>)})}
                        </div>
                        <h4>Frontend</h4>
                    </section>
                    <section className="backend">
                        <div className="backend-container">
                            {data.backend.map((item) => {return (<Element key={item.id} title={item.title} link={item.link}/>)})}
                        </div>
                        <h4>Backend</h4>
                    </section>
                </div>
                <div className="tools">
                    <section>
                        <h3>Outils de développement</h3>
                        <div className="tools-container">
                            {data.tools.map((item) => {return(<Element key={item.id} title={item.title} link={item.link}/>)})}
                        </div>
                        <h4>Outils et logiciels</h4>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default skills;