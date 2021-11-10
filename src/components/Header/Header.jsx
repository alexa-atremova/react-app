import React from 'react';
import { NavLink } from 'react-router-dom';
import style from './header.module.css'

const Header = (props) => {
    return (
        <header className={style.header}>
            <img src='./pixel.png'></img>

            <div className={style.login}>
                {props.isAuth ? props.login
                : <NavLink to ={'/login'}>Login </NavLink>}
            
            </div>
        </header>
    )
} 

export default Header;