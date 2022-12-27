import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./Header";
import Footer from "./Footer";
import { Link, useNavigate } from "react-router-dom";
import { Table } from "react-bootstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTachometerAlt, faBookmark, faDoorOpen, faTable } from "@fortawesome/free-solid-svg-icons";

const Rooms = () => {
    // state initiation
    const [rooms, setRooms] = useState([]);

    const navigate = useNavigate();

    // use effect
    useEffect(() => {
        getRooms();
    }, []);

    // get all rooms data
    const getRooms = async () => {
        let response = await axios.get("http://localhost:3020/rooms");
        setRooms(response.data);
    };

    // delete room by id
    const deleteRoom = async (id_room) => {
        await axios.delete(`http://localhost:3020/rooms/delete/${id_room}`)
        console.log("Room has been deleted !");
        getRooms();
    };

    // get last index from id_room
    const toAddRoom = () => {
        let kamarBaru = (rooms.slice(-1).pop().id_room);
        console.log("ini kamar baru ", kamarBaru);
        navigate(`/rooms/addRoom/${kamarBaru}`);
    }

    return (
        <>
            <Header />
            <div id="layoutSidenav">
                <div id="layoutSidenav_nav">
                    <div className="sb-sidenav accordion sb-sidenav-dark" id="sidenavAccordion">
                        <div className="sb-sidenav-menu">
                            <div className="nav py-2">
                                <Link className="nav-link" to={"/admin"}>
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon={faTachometerAlt} />
                                    </div>
                                    Dashboard
                                </Link>
                                <Link className="nav-link" to={"/bookings"}>
                                    <div className="sb-nav-link-icon">
                                        <FontAwesomeIcon icon={faBookmark} />
                                    </div>
                                    Bookings
                                </Link>
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
                <div id="layoutSidenav_content">
                    <div className="container-fluid px-4">
                        <h1 className="mt-4 mb-4 text-info"><FontAwesomeIcon icon={faDoorOpen} /> Rooms</h1>
                        <div className="card mb-4">
                            <div className="card-header py-3">
                                <FontAwesomeIcon icon={faTable} /> All Rooms
                                <button
                                    onClick={toAddRoom}
                                    className="btn btn-primary px-2 ms-3 text-white">
                                    Add Room
                                </button>
                                <Link
                                    to={"/rooms/addfacilities"}
                                    className="btn btn-secondary px-2 ms-3 text-white">
                                    Add Facilities
                                </Link>
                            </div>
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
                                    {rooms.map((rooms, index) => {
                                        return (
                                            <tr key={rooms}>
                                                <td>{index + 1}</td>
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
                                                    <img className="rounded mt-4" style={{ width: "200px", height: "100px"}} src={`http://localhost:3020/images/${rooms.room_photo}`} alt="foto kamar" />
                                                </td>
                                                <td>
                                                    <center className="mt-4">
                                                        <Link className="btn btn-success px-2 ms-2 mb-2 mt-2" to={`/rooms/update/${rooms.id_room}`}>Update</Link>
                                                        <button className="btn btn-danger px-2 ms-2 mb-2 mt-2"
                                                            onClick={e => {
                                                                e.preventDefault();
                                                                deleteRoom(rooms.id_room);
                                                            }}>
                                                            Delete
                                                        </button>
                                                    </center>
                                                </td>
                                            </tr>
                                        )
                                    })}
                                </tbody>
                            </Table>
                        </div>
                    </div>
                </div>
            </div>
            <Footer />
        </>
    );
};

export default Rooms;
