import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

const Register = () => {
    const [usernameReg, setUsernameReg] = useState();
    const [emailReg, setEmailReg] = useState();
    const [passwordReg, setPasswordReg] = useState();
    const navigate = useNavigate()

    // send to backend adduser
    const register = (e) => {
        e.preventDefault();
        axios.post("http://localhost:3020/adduser", {
            username: usernameReg,
            email: emailReg,
            password: passwordReg,
        }).then((response) => {
            navigate("/login");
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
                <form className="form-sign" onSubmit={register}>
                    <label>Username</label>
                    <input type="text" id="username" name="username" value={usernameReg}
                        onChange={(e) => {
                            setUsernameReg(e.target.value);
                        }} />
                    <label>Email</label>
                    <input type="text" id="email" name="email" value={emailReg}
                        onChange={(e) => {
                            setEmailReg(e.target.value);
                        }} />
                    <label>Password</label>
                    <input type="password" id="password" name="password" value={passwordReg}
                        onChange={(e) => {
                            setPasswordReg(e.target.value);
                        }} />
                    <button className="btn-login" type="submit">Register</button>
                </form>
                <div className="already-have">
                    <p>Already have account ?</p>
                    <Link className="login" to={"/"}>Login</Link>
                    </div>
            </div>
            </div>
            </div>
        </div>
    );
}

export default Register;