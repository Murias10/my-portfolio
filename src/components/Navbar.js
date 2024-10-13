import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css'; // Optional: Navbar styles

function Navbar() {
    return (
        <nav className="navbar">
            <ul className="navbar-list">

                <li className="navbar-item">
                    <Link className="navbar-link active" to="/">About</Link>
                </li>
                <li className="navbar-item">
                    <Link className="navbar-link" to="/projects">Portfolio</Link>
                </li>
            </ul>
        </nav>
    );
}

export default Navbar;
