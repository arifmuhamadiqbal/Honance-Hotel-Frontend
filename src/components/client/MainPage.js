import React from "react";
import Header from "./ClientHeader";
import Search from "./Search";
import "bootstrap/dist/css/bootstrap.min.css";

const MainPage = () => {
    return (
        <div>
            <Header />
            <Search />
        </div>
    );
};

export default MainPage;
