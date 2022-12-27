import React from "react";
import { Link } from "react-router-dom";

class Header extends React.Component {
    render() {
        return (
            <nav className="header-wrapper navbar navbar-expand-sm bg-dark navbar-dark px-5 sticky-top">
                <div className="header-logo">
                    <img
                        className="img-logo navbar-brand"
                        src="../../images/logo-nav.png"
                        alt="Honance Hotel"
                    />
                </div>
                <div className="header-nav">
                    <ul className="navbar-nav px-5 fw-bolder">
                        <li class="nav-link">
                            <Link to={"/client"} class="nav-link text-light">
                                Home
                            </Link>
                        </li>
                        <li class="nav-link">
                            <Link
                                to={"/client-rooms"}
                                class="nav-link text-light"
                            >
                                Daftar Kamar
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        );
    }
}

export default Header;
