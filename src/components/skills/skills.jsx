import "./skills.scss"

const skills = () => {
    return (
        <section id="skills" className="section_title_left">
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
        </section>
    );
};

export default skills;