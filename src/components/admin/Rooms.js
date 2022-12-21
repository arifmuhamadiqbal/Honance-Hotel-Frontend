import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
    faTachometerAlt,
    faBookmark,
    faDoorOpen,
    faTable,
} from "@fortawesome/free-solid-svg-icons";

const Rooms = () => {
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        let response = await axios.get("http://localhost:3020/rooms");
        setRooms(response.data);
    };

    const deleteRoom = async (id_room) => {
        try {
            await axios.delete(`http://localhost:3020/delete/${id_room}`);
            getRooms();
        } catch (error) {
            console.log(error.message);
        }
    }

    return (
        <>
            {/* Header */}
            <Header />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <div
                        className="sb-sidenav accordion sb-sidenav-dark"
                        id="sidenavAccordion"
                    >
                        {/* Sidebar menu */}
                        <div className="sb-sidenav-menu">
                            <div className="nav py-2">
                                {/* Dashboard */}
                                <Link className="nav-link" to={"/admin"}>
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon
                                            icon={faTachometerAlt}
                                        />
                                    </div>
                                    Dashboard
                                </Link>
                                {/* Bookings */}
                                <Link className="nav-link" to={"/bookings"}>
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>
                                    Bookings
                                </Link>
                                {/* Rooms */}
                                <Link className="nav-link" to={"/rooms"}>
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon={faDoorOpen} />
                                    </div>
                                    Rooms
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
                {/* Content */}
                <div id="layoutSidenav_content">
                    <main>
                        <div className="container-fluid px-4">
                            <h1 className="mt-4">Rooms</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">
                                    Rooms
                                </li>
                            </ol>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faTable} /> All Rooms
                                    <Link
                                        to={"/formtambah"}
                                        className="btn btn-info px-4 ms-3 fw-bold text-white"
                                    >
                                        Add
                                    </Link>
                                </div>
                                <div className="card-body">
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Room Code</th>
                                                <th>Room Name</th>
                                                <th>Room Description</th>
                                                <th>Room Price</th>
                                                <th>Room Photo</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {rooms.map((n, key) => (
                                                <tr key={key}>
                                                    <td>{n.id_room}</td>
                                                    <td>{n.room_code}</td>
                                                    <td>{n.room_name}</td>
                                                    <td>{n.room_description}</td>
                                                    <td>{n.room_price}</td>
                                                    <td>
                                                        <img src={`http://localhost:3020/images/${n.room_photo}`}/>
                                                    </td>
                                                    <td>
                                                        <center>
                                                            <Link
                                                                to={`/formupdate/${n.id}`}
                                                                className="btn btn-success fw-bold px-4 ms-3"
                                                            >
                                                                Update
                                                            </Link>
                                                            <Link
                                                                to={`/delete/${n.id}`}
                                                                className="btn btn-danger fw-bold px-4 ms-3"
                                                            >
                                                                Delete
                                                            </Link>
                                                        </center>
                                                    </td>
                                                </tr>
                                            ))}
                                        </tbody>
                                    </Table>
                                </div>
                            </div>
                        </div>
                    </main>
                </div>
            </div>
            {/* Footer */}
            <Footer />
        </>
    );
};

export default Rooms;
