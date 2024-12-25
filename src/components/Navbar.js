import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">
                <li className="navbar-item">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'navbar-link active' : 'navbar-link'
                        }
                        to="/portfolio"
                        end
                    >
                        About
                    </NavLink>
                </li>
                <li className="navbar-item">
                    <NavLink
                        className={({ isActive }) =>
                            isActive ? 'navbar-link active' : 'navbar-link'
                        }
                        to="/portfolio/projects"
                    >
                        Projects
                    </NavLink>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
