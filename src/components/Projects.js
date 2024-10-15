import { useEffect } from 'react';
import './Projects.css';
import projects from '../data/projects';
import Project1 from '../assets/project-1.jpg';
import Project2 from '../assets/project-2.png';
import Project3 from '../assets/project-3.jpg';
import Project4 from '../assets/project-4.png';
import Project5 from '../assets/project-5.png';
import Project6 from '../assets/project-6.png';
import Project7 from '../assets/project-7.png';
import Project8 from '../assets/project-8.jpg';
import Project9 from '../assets/project-9.png';


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

}



function Projects() {

    useEffect(() => {
        document.title = "Projects - My Portfolio";
    }, []); // Se ejecuta una vez cuando el componente se monta

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
                            <button data-select-item>Web design</button>
                        </li>

                        <li class="select-item">
                            <button data-select-item>Applications</button>
                        </li>

                        <li class="select-item">
                            <button data-select-item>Web development</button>
                        </li>

                    </ul>

                </div>

                <ul class="project-list">

                    <li class="project-item  active" data-filter-item data-category="web development">
                        <a href="#">

                            <figure class="project-img">
                                <div class="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={Project7} alt="summary" loading="lazy" />
                            </figure>

                            <h3 class="project-title">Summary</h3>

                            <p class="project-category">Web development</p>

                        </a>
                    </li>

                    <li class="project-item  active" data-filter-item data-category="applications">
                        <a href="#">

                            <figure class="project-img">
                                <div class="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={Project8} alt="task manager" loading="lazy" />
                            </figure>

                            <h3 class="project-title">Task Manager</h3>

                            <p class="project-category">Applications</p>

                        </a>
                    </li>

                    <li class="project-item  active" data-filter-item data-category="web development">
                        <a href="#">

                            <figure class="project-img">
                                <div class="project-item-icon-box">
                                    <ion-icon name="eye-outline"></ion-icon>
                                </div>

                                <img src={Project9} alt="arrival" loading="lazy" />
                            </figure>

                            <h3 class="project-title">Arrival</h3>

                            <p class="project-category">Web development</p>

                        </a>
                    </li>

                </ul>

            </section>

        </article>
    );
}

export default Projects;
