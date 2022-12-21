import axios from "axios";
import "./css/auth.css"
import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
    const [usernameLog, setUsernameLog] = useState();
    const [passwordLog, setPasswordLog] = useState();
    const [admin, setAdmin] = useState({
        usernameAdmin: "admin",
        passwordAdmin: "adminpassword",
    });

    const navigate = useNavigate();

    // get usert data
    const login = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3020/login", {
            username: usernameLog,
            password: passwordLog,
        }).then((response) => {
            if (response.data.username === "admin") {
                navigate("/admin");
            }
            else {
                navigate("/client");
            }
        });
    };

    return (
        <div className="container">
            <div className="content">
            <div className="brand">
                    <img src="./images/logo-banner.png" alt="logo-honance-hotel"/>
                    <p className="headline">Welcome To Honance Hotel</p>
                </div>
            <div className="sign-in-option">
                <div className="form">
                    <form className="form-sign" onSubmit={(e) => {
                        if (usernameLog === admin.usernameAdmin && passwordLog === admin.passwordAdmin) {
                            setAdmin({
                                usernameAdmin: "admin",
                                passwordAdmin: "adminpassword",
                            });
                        }
                        login(e);
                    }}>
                        <label>Username</label>
                        <input type="text" name="username" value={usernameLog}
                            onChange={(e) => {
                                setUsernameLog(e.target.value);
                            }} />
                            <br/>
                        <label>Password</label>
                        <input type="password" name="password" value={passwordLog}
                            onChange={(e) => {
                                setPasswordLog(e.target.value);
                            }} />
                            <br/>
                        <button className="btn-login" type="submit">Login</button>
                        <Link className="btn-login" to={"/register"}>Register</Link>
                    </form>
                </div>
            </div>
            </div>
        </div>
    );
}

export default Login;