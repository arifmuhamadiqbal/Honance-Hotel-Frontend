import React from "react";

const Header = () => {
    return (
        <div className="sb-topnav navbar navbar-expand navbar-dark bg-dark">
            <img className="sb-topnav navbar ps-3 mt-2" src="./images/logo-banner.png" alt="honance-hotel-logo" />
            <a className="navbar-brand ps-3" href="/admin">Honance Hotel Admin Service</a>
        </div>
    );
}

export default Header;