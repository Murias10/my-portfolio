import React from 'react';
import './Home.css'; // Si quieres usar estilos personalizados

function Home() {
    return (
        <section className="home">
            <div className="intro">
                <h1>Hola, soy Diego Murias</h1>
                <p>
                    Soy un desarrollador de software apasionado por crear aplicaciones web y móviles.
                    Tengo experiencia en diversas tecnologías como Java, Python, JavaScript, y más.
                </p>
                <p>
                    Estoy siempre buscando aprender nuevas habilidades y enfrentar nuevos desafíos.
                </p>
                <a href="/projects" className="cta-button">Ver mis proyectos</a>
            </div>
            <div className="skills">
                <h2>Habilidades</h2>
                <ul>
                    <li>Java</li>
                    <li>Python</li>
                    <li>JavaScript</li>
                    <li>React</li>
                    <li>Node.js</li>
                    <li>MongoDB</li>
                    <li>CSS</li>
                    <li>HTML</li>
                    {/* Agrega más habilidades según sea necesario */}
                </ul>
            </div>
        </section>
    );
}

export default Home;
