import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    {/* Usamos NavLink para gestionar automáticamente la clase activa */}
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'navbar-link active' : 'navbar-link'
                        }
                        to="/"
                    >
                        About
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'navbar-link active' : 'navbar-link'
                        }
                        to="/projects"
                    >
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
