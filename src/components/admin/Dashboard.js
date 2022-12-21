import React, {useState, useEffect} from "react";
import "./css/admin.css";
import Header from "./Header";
import Footer from "./Footer";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBookmark, faDoorOpen, faAngleRight, faTable } from "@fortawesome/free-solid-svg-icons";

const Dashboard = () => {
    const bookingServerHost = "http://localhost:3020/bookings";
    const roomsServerHost = "http://localhost:3020/rooms";
    const [bookings, setBookings] = useState([]);
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getBookings();
        getRooms();
    }, []);

    const getBookings = async () => {
        let response = await axios.get(bookingServerHost);
        setBookings(response.data);
    }

    const getRooms = async () => {
        let response = await axios.get(roomsServerHost);
        setRooms(response.data);
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
                            <h1 className="mt-4">Dashboard</h1>
                            <ol className="breadcrumb mb-4">
                                <li className="breadcrumb-item active">Dashboard</li>
                            </ol>
                            <div className="row">
                                {/* Room types */}
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-primary text-white mb-4">
                                        <div className="card-body d-flex align-items-center justify-content-between">
                                            <h3>Room Types</h3>
                                            <h1>
                                                {rooms.length}
                                            </h1>
                                        </div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to={"/rooms"}>View Details</Link>
                                            <div className="small text-white"><FontAwesomeIcon icon={faAngleRight} /></div>
                                        </div>
                                    </div>
                                </div>
                                {/* New Bookings */}
                                <div className="col-xl-3 col-md-6">
                                    <div className="card bg-warning text-white mb-4">
                                        <div className="card-body d-flex align-items-center justify-content-between">
                                            <h3>Bookings</h3>
                                            <h1>
                                                {bookings.length}
                                            </h1>
                                        </div>
                                        <div className="card-footer d-flex align-items-center justify-content-between">
                                            <Link className="small text-white stretched-link" to={"/bookings"}>View Details</Link>
                                            <div className="small text-white"><FontAwesomeIcon icon={faAngleRight} /></div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Latest Bookings */}
                            <div className="card mb-4">
                                <div className="card-header">
                                    <FontAwesomeIcon icon={faTable} /> Latest Bookings
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
                                                    <td>{n.date_in.slice(0,10)}</td>
                                                    <td>{n.date_out.slice(0,10)}</td>
                                                    <td>{n.total}</td>
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

export default Dashboard;