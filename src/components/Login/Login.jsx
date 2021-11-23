
import React from "react";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import style from "./login.module.css"

const LoginForm = (props) => {
    return <form onSubmit ={props.handleSubmit}>
        <div className={style.loginForm}>

            <div className={style.loginData}>
            <h1 className={style.loginTitle}>LOGIN</h1>
                <Field placeholder="Enter your email..." name={"login"} component={"input"} />
                <Field placeholder="Enter your password..." name={"password"} component={"input"} />
                <div className={style.checkbox} ><Field type={"checkbox"} name={"rememberMe"} component={"input"} /> rememder me</div>
                <button type="submit">Sing in</button>
            </div>


            <div className={style.singUpButton}>

                <NavLink to="/regisrtation" >Sing Up</NavLink>
                <NavLink to="/change_Password">Forgot Password</NavLink>
            </div>


        </div>
    </form>
}
const LoginReduxForm = reduxForm({
    form: 'login'
})(LoginForm)

const Login = (props) => {
    const onSubmit =(formData) =>{
        console.log(formData);
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default Login;