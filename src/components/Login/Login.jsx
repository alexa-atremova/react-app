
import React from "react";
import { NavLink } from "react-router-dom";
import style from "./login.module.css"

const Login = (prors) => {
    return <>
        <div className={style.loginForm}>

            <div className={style.loginData}>
                <h1 className={style.loginTitle}>LOGIN</h1>
                <input placeholder="Enter your email..." />
                <input placeholder="Enter your password..." />
                <button type="submit">Sing in</button>


            </div>
            <div className={style.singUpButton}>

            <NavLink to="/regisrtation" >Sing Up</NavLink>
            <NavLink to="/change_Password">Forgot Password</NavLink>
            </div>


        </div>
    </>
}

export default Login;