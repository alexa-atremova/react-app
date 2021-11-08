import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css';

const Navbar = () => {
    return (
        <nav className="nav">
            <div>
                <NavLink to="/profile/2" style={{ textDecoration: 'none' }}>Profile</NavLink>
            </div>

            <div>
                <NavLink to="/dialogs" style={{ textDecoration: 'none' }}>Messages</NavLink>
            </div>

            <div>
                <NavLink to="/news" style={{ textDecoration: 'none' }}>News</NavLink>

            </div>

            <div>
                <NavLink to="/users" style={{ textDecoration: 'none' }}>Users</NavLink>

            </div>

            <div className="settings">

                <NavLink to="/settings" style={{ textDecoration: 'none' }}>Settings</NavLink>

            </div>
        </nav>
    )
}

export default Navbar;