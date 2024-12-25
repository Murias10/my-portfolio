import { useEffect, useState } from 'react';
import './Projects.css';
import projectsData from '../data/projects';


function Projects() {

    const [projects, setProjects] = useState([projectsData]);

    useEffect(() => {
        document.title = "My Portfolio - Projects";
        setProjects(projectsData);
    }, []); // Se ejecuta una vez cuando el componente se monta

    const handleFilterClick = (e) => {

        const category = e.target.textContent.toLowerCase();

        // Eliminar la clase active de todos los links del filtro
        const filterNavButtons = document.querySelectorAll('[data-filter-btn]');
        filterNavButtons.forEach(item => item.classList.remove('active'));
        // Añadir la clase active al link clicado
        e.target.classList.add('active');

        // Poner el texto del link clicado en el combo box
        const selectValue = document.querySelector("[data-select-value]");
        selectValue.textContent = e.target.textContent;

        filterFunction(category);
    }

    const filterFunction = (category) => {
        setProjects(projectsData.filter(project => project.category.toLowerCase() === category || category === 'all'));
    }

    return (
        <article class="portfolio active" data-page="portfolio">

            <header>
                <h2 class="h2 article-title">Portfolio</h2>
            </header>

            <section class="projects">

                <ul class="filter-list">

                    <li class="filter-item">
                        <button class="active" data-filter-btn onClick={handleFilterClick}>All</button>
                    </li>

                    <li class="filter-item">
                        <button data-filter-btn onClick={handleFilterClick}>Web development</button>
                    </li>

                    <li class="filter-item">
                        <button data-filter-btn onClick={handleFilterClick}>Web design</button>
                    </li>

                    <li class="filter-item">
                        <button data-filter-btn onClick={handleFilterClick}>Applications</button>
                    </li>

                </ul>

                <div class="filter-select-box">

                    <button class="filter-select" data-select>

                        <div class="select-value" data-select-value>Select category</div>

                        <div class="select-icon">
                            <ion-icon name="chevron-down"></ion-icon>
                        </div>

                    </button>

                    <ul class="select-list">

                        <li class="select-item">
                            <button data-select-item>All</button>
                        </li>

                        <li class="select-item">
                            <button data-select-item>Applications</button>
                        </li>

                        <li class="select-item">
                            <button data-select-item>Web development</button>
                        </li>

                    </ul>

                </div>



                <ul className="project-list">

                    {projects.map(project => (
                        <li key={project.id} className="project-item active" data-filter-item data-category={project.category}>
                            <a href={project.link} target="_blank" rel="noreferrer">
                                <figure className="project-img">
                                    <div className="project-item-icon-box">
                                        {/* <ion-icon name="eye-outline"></ion-icon> */}
                                        <ion-icon name="logo-github"></ion-icon>
                                    </div>
                                    <img src={project.image} alt={project.title} loading="lazy" />
                                </figure>
                                <h3 className="project-title">{project.title}</h3>
                                <p className="project-category">{project.category}</p>
                            </a>
                        </li>
                    ))}

                </ul>

            </section>

        </article>
    );
}

export default Projects;
