import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBookmark, faDoorOpen, faTable } from "@fortawesome/free-solid-svg-icons";

const Bookings = () => {
    const [bookings, setBookings] = useState([]);

    useEffect(() => {
        getBookings();
    }, []);

    const getBookings = async () => {
        let response = await axios.get("http://localhost:3020/bookings");
        setBookings(response.data);
    }

    return (
        <>
            {/* Header */}
            <Header />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <div className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        {/* Sidebar menu */}
                        <div className="sb-sidenav-menu">
                            <div className="nav py-2">
                                {/* Dashboard */}
                                <Link className="nav-link" to={"/admin"}>
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon={faTachometerAlt} />
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
                            {/* Content title */}
                            <h1 className="mt-4 mb-4 text-warning"><FontAwesomeIcon icon={faBookmark} /> Bookings</h1>
                            <div className="card mb-4">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faTable} /> All Bookings
                                </div>
                                <div className="card-body">
                                    <Table striped bordered>
                                        <thead>
                                            <tr>
                                                <th>No.</th>
                                                <th>Booking Code</th>
                                                <th>Room Name</th>
                                                <th>Name</th>
                                                <th>Email</th>
                                                <th>Phone</th>
                                                <th>Date In</th>
                                                <th>Date Out</th>
                                                <th>Total</th>
                                            </tr>
                                        </thead>
                                        <tbody>
                                            {bookings.map((n, key) => (
                                                <tr key={key}>
                                                    <td>{n.id_booking}</td>
                                                    <td>{n.booking_code}</td>
                                                    <td>{n.room_name}</td>
                                                    <td>{n.user_name}</td>
                                                    <td>{n.user_email}</td>
                                                    <td>{n.user_phone}</td>
                                                    <td>{n.date_in}</td>
                                                    <td>{n.date_out}</td>
                                                    <td>Rp {n.total}</td>
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
}

export default Bookings;