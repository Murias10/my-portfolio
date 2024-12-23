import './Sidebar.css';
import MuriasAvatar from '../assets/murias-avatar2.png';


import { IonIcon } from '@ionic/react';
import { logoGithub, logoLinkedin, chevronDown, mailOutline, phonePortraitOutline, calendarOutline, locationOutline } from 'ionicons/icons';

const toggleSidebar = () => {
    const sidebar = document.querySelector('[data-sidebar]');
    sidebar.classList.toggle('active');
}


const Sidebar = () => {
    return (
        <aside className="sidebar" data-sidebar>

            <div className="sidebar-info">

                <figure className="avatar-box">
                    <img src={MuriasAvatar} alt="Diego Murias Suárez" width="80" />
                </figure>

                <div className="info-content">
                    <h1 className="name" title="Diego Murias Suárez">Diego Murias Suárez</h1>

                    <p className="title">Developer</p>
                </div>

                <button className="info_more-btn" data-sidebar-btn onClick={toggleSidebar}>
                    <span>Show Contacts</span>
                    <IonIcon icon={chevronDown} />
                </button>

            </div>

            <div className="sidebar-info_more">

                <div className="separator"></div>

                <ul className="contacts-list">

                    <li className="contact-item">

                        <div className="icon-box">
                            <IonIcon icon={mailOutline} />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Email</p>

                            <a href="mailto:murias101010@gmail.com" className="contact-link">murias101010@gmail.com</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <IonIcon icon={phonePortraitOutline} />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Phone</p>

                            <a href="tel:+34611498446" className="contact-link">+34 611 498 446</a>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <IonIcon icon={calendarOutline} />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Birthday</p>

                            <time dateTime="1998-06-23">Feb 10, 2003</time>
                        </div>

                    </li>

                    <li className="contact-item">

                        <div className="icon-box">
                            <IonIcon icon={locationOutline} />
                        </div>

                        <div className="contact-info">
                            <p className="contact-title">Location</p>

                            <address>Gijón, Asturias, Spain</address>
                        </div>

                    </li>

                </ul>

                <div className="separator"></div>

                <ul className="social-list">
                    <li className="social-item">
                        <a href="https://github.com/Murias10" className="social-link" target="_blank" rel="noreferrer">
                            <IonIcon icon={logoGithub} />
                        </a>
                    </li>
                    <li className="social-item">
                        <a href="#" className="social-link" target="_blank" rel="noreferrer">
                            <IonIcon icon={logoLinkedin} />
                        </a>
                    </li>
                </ul>

            </div>

        </aside>

    );
}

export default Sidebar;
