import "./skills.scss"
import Element from "../item/item.jsx"
import data from "../../data/skills.json"

const skills = () => {
    return (
        <section id="skills" className="section_title_left">
            <h1>Détail des compétences et outils</h1>
            <div>
                <h2>Compétences en développement web</h2>
                <div className="skills">
                    <section className="frontend">
                        <h3>Frontend</h3>
                        <div className="frontend-container">
                            {data.frontend.map((item) => {return (<Element key={item.id} title={item.title} link={item.link}/>)})}
                        </div>
                    </section>
                    <section className="backend">
                        <h3>Backend</h3>
                        <div className="backend-container">
                            {data.backend.map((item) => {return (<Element key={item.id} title={item.title} link={item.link}/>)})}
                        </div>
                    </section>
                </div>
                <div className="tools">
                    <section>
                        <h2>Outils de développement</h2>
                        <div className="tools-container">
                            {data.tools.map((item) => {return(<Element key={item.id} title={item.title} link={item.link}/>)})}
                        </div>
                    </section>
                </div>
            </div>
        </section>
    );
};

export default skills;

//{data.frontend.map((item) => {<Element key={item.id} title={item.title} link={item.link}/>})}
/*
            <h1>Détail des compétences et outils</h1>
            <div>
            <h2>Compétences en développement web</h2>
            <table>
                <tr>
                    <th>Frontend</th>
                    <th>Backend</th>
                </tr>
                <tr>
                    <td>HTML5&CSS3</td>
                    <td>Node.js</td>
                </tr>
                <tr>
                    <td>Javascript</td>
                    <td>MongoDB</td>
                </tr>
                <tr>
                    <td>React</td>
                </tr>
            </table>
            </div>
            <div>
            <h2>Outils de développement</h2>
            <ul>
                <li>Visual studio</li>
                <li>Postman</li>
                <li>Github</li>
                <li>Sass</li>
            </ul>
            </div>
*/