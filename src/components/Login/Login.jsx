
import React from "react";
import style from "./login.module.css"

const Login = (prors) => {
    return <>
        <div className={style.loginForm}>
            <h1 className={style.loginTitle}>LOGIN</h1>

            <div className={style.loginData}>
                <input placeholder="Enter your email..."/>
                <input placeholder="Enter your password..."/>
                
                <button type="submit">Enter</button>
            </div>


        </div>
    </>
}

export default Login;