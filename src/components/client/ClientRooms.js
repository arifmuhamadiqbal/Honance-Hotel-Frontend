import React, { useState, useEffect } from "react";
import axios from "axios";
import Header from "./ClientHeader";
import { Link } from "react-router-dom";

const ClientRooms = () => {
    /* const roomsServerHost = "http://localhost:3020/rooms"; */
    const [rooms, setRooms] = useState([]);

    useEffect(() => {
        getRooms();
    }, []);

    const getRooms = async () => {
        let response = await axios.get("http://localhost:3020/rooms");
        setRooms(response.data);
    };

    return (
        <>
            <Header />
            <div className="rooms-wrapper">
                <div className="container py-4 text-primary">
                    <h1 className="fw-bolder">Daftar Kamar</h1>
                </div>
                {rooms.map((n, key) => (
                    <div
                        className="container d-flex flex-row border border-primary rounded-3 mb-5"
                        style={{ height: "700px" }}
                        key={key}
                    >
                        <div className="col-3 d-flex flex-column px-4 py-4 me-1">
                            <div className="row-3 bg-primary me-1 rounded py-1">
                                <h3 className="fw-bolder text-center text-white">
                                    {n.room_name}
                                </h3>
                            </div>
                            <div className="row-3 mb-auto">
                                <div className="px-3 py-4">
                                    <ul>
                                        <li>{n.room_facilities}</li>
                                        <li>Wifi</li>
                                        <li>Wifi</li>
                                        <li>Wifi</li>
                                    </ul>
                                </div>
                            </div>
                            <div className="row-3 me-1 mb-2">
                                <div className="text-center">
                                    <h2 className="fw-bolder">
                                        Rp {n.room_price}
                                    </h2>
                                </div>
                            </div>
                        </div>
                        <div className="col border-start border-primary px-5">
                            <div className="row border h-50 my-5">
                                <div className="img-room">
                                    <img
                                        src={`http://localhost:3020/images/${n.room_photo}`}
                                        alt="room-image"
                                    />
                                </div>
                            </div>
                            <div className="row" style={{ height: "140px" }}>
                                <p>{n.room_description}</p>
                            </div>
                            <form>
                                <div className="row">
                                    <div className="col d-flex justify-content-end my-4">
                                        <Link
                                            to={`/formbayar/${n.id_room}`}
                                            className="col-5 btn btn-primary fw-bolder py-2"
                                        >
                                            Book Now
                                        </Link>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
};

export default ClientRooms;
