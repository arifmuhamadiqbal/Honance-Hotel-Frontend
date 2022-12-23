import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import { Button, Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBookmark, faDoorOpen, faTable } from "@fortawesome/free-solid-svg-icons";

const Rooms = () => {
    // state initiation
    const [rooms, setRooms] = useState([]);

    // use effect
    useEffect(() => {
        getRooms();
    }, []);

    // get all rooms data
    const getRooms = async () => {
        let response = await axios.get("http://localhost:3020/rooms");
        setRooms(response.data);
        console.log(response.data);
    };

    // delete room by id
    const deleteRoom = async (id_room) => {
        try {
          await axios.delete(`http://localhost:3020/rooms/delete/${id_room}`);
          getRooms();
        } catch (error) {
          console.log(error);
        }
      };

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
                            <h1 className="mt-4 mb-4 text-info"><FontAwesomeIcon icon={faDoorOpen} /> Rooms</h1>
                            <div className="card mb-4">
                                <div className="card-header py-3">
                                    <FontAwesomeIcon icon={faTable} /> All Rooms
                                    <Link
                                        to={"/rooms/addroom"}
                                        className="btn btn-primary px-2 ms-3 text-white"
                                    >
                                        Add Room
                                    </Link>
                                    <Link
                                        to={"/rooms/addfacilities"}
                                        className="btn btn-secondary px-2 ms-3 text-white"
                                    >
                                        Add Facilities
                                    </Link>
                                </div>
                                <div>
                                    <Table striped bordered className="table-sm">
                                        <thead>
                                            <tr className="text-center">
                                                <th>No.</th>
                                                <th>Room Code</th>
                                                <th>Room Name</th>
                                                <th>Room Description</th>
                                                <th>Room Facilities</th>
                                                <th>Room Price</th>
                                                <th>Room Photo</th>
                                                <th>Action</th>
                                            </tr>
                                        </thead>
                                        <tbody className="small">
                                            {rooms.map((rooms) => (
                                                <tr key={rooms.id_room}>
                                                    <td>{rooms.id_room}</td>
                                                    <td>{rooms.room_code}</td>
                                                    <td>{rooms.room_name}</td>
                                                    <td>{rooms.room_description}</td>
                                                    <td>
                                                        {rooms.facilities.map((f) => {
                                                            return (
                                                                <ul key={f} className="mb-2">
                                                                    <li>{f.name_facilities}</li>
                                                                </ul>
                                                            )
                                                        })}

                                                    </td>
                                                    <td>Rp {rooms.room_price}</td>
                                                    <td>
                                                        <img style={{ width: "200px", height: "100px" }} src={`http://localhost:3020/images/${rooms.room_photo}`} alt="foto kamar" />
                                                    </td>
                                                    <td>
                                                        <center>
                                                            <Link className="btn btn-success px-2 ms-2 mb-2 mt-2" to={`/rooms/update/${rooms.id_room}`}>Update</Link>
                                                            <Button className="btn btn-danger px-2 ms-2 mb-2 mt-2" onClick={() => deleteRoom(rooms.id_room)}>Delete</Button>
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
