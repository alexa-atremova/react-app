
import React from "react";
import { connect } from "react-redux";
import { NavLink } from "react-router-dom";
import { Field, reduxForm } from "redux-form";
import style from "./login.module.css" 
import login from "../../redux/auth-reducer" 
import { Input } from "../common/FormsControls/FormsControls";
import { requiredField } from "../Validators/validators";


const LoginForm = (props) => {
    return <form onSubmit ={props.handleSubmit}>
        <div className={style.loginForm}>

            <div className={style.loginData}>
            <h1 className={style.loginTitle}>LOGIN</h1>
                <Field placeholder="Enter your email..." name={"email"} component={Input} validate ={requiredField} />
                <Field placeholder="Enter your password..." name={"password"} component={Input} type ={"password"} validate ={requiredField}/>
                <div className={style.checkbox} ><Field type={"checkbox"} name={"rememberMe"} component={Input} /> rememder me</div>
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
        props.login(formData.email,formData.password,formData.rememberMe);
    }
    return <div>
        <LoginReduxForm onSubmit={onSubmit}/>
    </div>
}

export default connect(null,{login})(Login);