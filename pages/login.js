import React, { useState } from "react";
import Layout from "../components/layout";
import style from "../styles/login.module.css"
import useAuth from "../auth/context";

const Login = () => {
    const { login, isAuthenticated } = useAuth();

    console.log(isAuthenticated)
    const [values, setValues] = useState({
        username: "",
        password: ""
    });

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value })
    }

    const onSubmit = event => {
        event.preventDefault();
        login(values.username, values.password)
    }

    return (
        <Layout>
            <div className={style.main}>
                <h1>Formulaire de connexion</h1>
                <form>
                    <label htmlFor="username">Nom d'utilisateur</label><br />
                    <input type="text" placeholder="username" onChange={handleChange("username")} className={style.input} /><br />

                    <label htmlFor="password">Mot de passe</label><br />
                    <input type="password" placeholder="password" onChange={handleChange("password")} className={style.input} /><br />

                    <button type="submit" onClick={onSubmit} className={style.button}>Connexion</button>
                </form>
            </div>
        </Layout>
    )
}

export default Login;