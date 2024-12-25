import { useEffect } from "react";
import "./About.css";
import avatar1 from '../assets/avatar-1.png';
import avatar2 from '../assets/avatar-2.png';
import avatar3 from '../assets/avatar-3.png';
import avatar4 from '../assets/avatar-4.png';
import logo1 from '../assets/logo-1-color.png';
import logo2 from '../assets/logo-2-color.png';
import logo3 from '../assets/logo-3-color.png';
import logo4 from '../assets/logo-4-color.png';
import appIcon from '../assets/icon-app.svg';
import cameraIcon from '../assets/icon-photo.svg';
import designIcon from '../assets/icon-design.svg';
import devIcon from '../assets/icon-dev.svg';
import quoteIcon from '../assets/icon-quote.svg';


function About() {

    useEffect(() => {
        document.title = "My Portfolio - About";
    }, []); // Se ejecuta una vez cuando el componente se monta

    return (
        <article class="about active" data-page="about">

            <header>
                <h2 class="h2 article-title">About me</h2>
            </header>

            <section class="about-text">
                <p>
                    Soy Diego Murias Suárez, un desarrollador apasionado por transformar ideas en soluciones prácticas. Disfruto enfrentando retos tecnológicos, explorando nuevas maneras de mejorar procesos y creando sistemas que realmente marquen la diferencia. Cada proyecto es una oportunidad para aprender, innovar y aportar valor con soluciones funcionales y bien diseñadas.
                </p>

                <p>
                    Más allá del código, me motiva colaborar con equipos dinámicos y trabajar en proyectos que tengan un impacto real. Creo en la mejora constante, en el poder de las ideas frescas y en documentar cada paso del camino para crecer profesionalmente y ayudar a otros a hacerlo también. Siempre estoy listo para el próximo desafío.
                </p>
            </section>


            <section class="service">

                <h3 class="h3 service-title">What i'm doing</h3>

                <ul class="service-list">

                    {/* <li class="service-item">

                        <div class="service-icon-box">
                            <img src={designIcon} alt="design icon" width="40" />
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Web design</h4>

                            <p class="service-item-text">
                                The most modern and high-quality design made at a professional level.
                            </p>
                        </div>

                    </li> */}

                    <li class="service-item">

                        <div class="service-icon-box">
                            <img src={devIcon} alt="Web development icon" width="40" />
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Web development</h4>

                            <p class="service-item-text">
                                High-quality development of sites at the professional level.
                            </p>
                        </div>

                    </li>

                    <li class="service-item">

                        <div class="service-icon-box">
                            <img src={appIcon} alt="mobile app icon" width="40" />
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Mobile apps</h4>

                            <p class="service-item-text">
                                Professional development of applications for iOS and Android.
                            </p>
                        </div>

                    </li>

                    {/* <li class="service-item">

                        <div class="service-icon-box">
                            <img src={cameraIcon} alt="camera icon" width="40" />
                        </div>

                        <div class="service-content-box">
                            <h4 class="h4 service-item-title">Photography</h4>

                            <p class="service-item-text">
                                I make high-quality photos of any category at a professional level.
                            </p>
                        </div>

                    </li> */}

                </ul>

            </section>


            {/* <section class="testimonials">

                <h3 class="h3 testimonials-title">Testimonials</h3>

                <ul class="testimonials-list has-scrollbar">

                    <li class="testimonials-item">
                        <div class="content-card" data-testimonials-item>

                            <figure class="testimonials-avatar-box">
                                <img src={avatar1} alt="Daniel lewis" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 class="h4 testimonials-item-title" data-testimonials-title>Daniel lewis</h4>

                            <div class="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                    <li class="testimonials-item">
                        <div class="content-card" data-testimonials-item>

                            <figure class="testimonials-avatar-box">
                                <img src={avatar2} alt="Jessica miller" width="60" data-testimonials-avatar />
                            </figure>

                            <h4 class="h4 testimonials-item-title" data-testimonials-title>Jessica miller</h4>

                            <div class="testimonials-text" data-testimonials-text>
                                <p>
                                    Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                    lot of experience
                                    and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                    consectetur adipiscing
                                    elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                                </p>
                            </div>

                        </div>
                    </li>

                </ul>

            </section> */}


            <div class="modal-container" data-modal-container>

                <div class="overlay" data-overlay></div>

                <section class="testimonials-modal">

                    <button class="modal-close-btn" data-modal-close-btn>
                        <ion-icon name="close-outline"></ion-icon>
                    </button>

                    <div class="modal-img-wrapper">
                        <figure class="modal-avatar-box">
                            <img src="./assets/images/avatar-1.png" alt="Daniel lewis" width="80" data-modal-img />
                        </figure>

                        <img src={quoteIcon} alt="quote icon" />
                    </div>

                    <div class="modal-content">

                        <h4 class="h3 modal-title" data-modal-title>Daniel lewis</h4>

                        <time datetime="2021-06-14">14 June, 2021</time>

                        <div data-modal-text>
                            <p>
                                Richard was hired to create a corporate identity. We were very pleased with the work done. She has a
                                lot of experience
                                and is very concerned about the needs of client. Lorem ipsum dolor sit amet, ullamcous cididt
                                consectetur adipiscing
                                elit, seds do et eiusmod tempor incididunt ut laborels dolore magnarels alia.
                            </p>
                        </div>

                    </div>

                </section>

            </div>


            {/* <section class="clients">

                <h3 class="h3 clients-title">Clients</h3>

                <ul class="clients-list has-scrollbar">

                    <li class="clients-item">
                        <a href="#">
                            <img src={logo1} alt="client logo" />
                        </a>
                    </li>

                    <li class="clients-item">
                        <a href="#">
                            <img src={logo2} alt="client logo" />
                        </a>
                    </li>

                    <li class="clients-item">
                        <a href="#">
                            <img src={logo3} alt="client logo" />
                        </a>
                    </li>

                    <li class="clients-item">
                        <a href="#">
                            <img src={logo4} alt="client logo" />
                        </a>
                    </li>

                </ul>

            </section> */}

        </article>
    );
}

export default About;