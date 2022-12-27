import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import axios from "axios";
import Header from "./ClientHeader";

const FormBooking = () => {
    const [room, setRoom] = useState([]);
    const [usernameForm, setUsernameForm] = useState("");
    const [emailForm, setEmailForm] = useState("");
    const [noHpForm, setNoHpForm] = useState("");
    const [checkinForm, setCheckinForm] = useState("");
    const [checkoutForm, setCheckoutForm] = useState("");

    const roomID = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        getRoomByID();
    }, []);

    const getRoomByID = async (req, res) => {
        let response = await axios.get(
            `http://localhost:3020/roomid/${roomID.id_room}`
        );
        console.log(response.data);
        setRoom(response.data);
    };

    return (
        <>
            <Header />
            <div className="form-wrapper p-5">
                <div className="title mx-5">
                    <h2 className="fw-bolder">Formulir Reservasi</h2>
                </div>
                <div className="container align-self-center border border-primary rounded p-5">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            try {
                                axios
                                    .post("http://localhost:3020/book", {
                                        idroom: roomID.id_room,
                                        username: usernameForm,
                                        email: emailForm,
                                        nohp: noHpForm,
                                        checkin: checkinForm,
                                        checkout: checkoutForm,
                                        total: room.room_price,
                                    })
                                    .then((data) => {
                                        console.log(data);
                                    });
                            } catch (error) {
                                console.log(error.message);
                            }
                            navigate("/client");
                        }}
                        className="d-flex flex-row"
                    >
                        <div className="col">
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label
                                        for="username"
                                        className="form-label"
                                    >
                                        Username
                                    </label>
                                    <input
                                        type="text"
                                        name="username"
                                        id="username"
                                        className="form-control rounded-end border-1 border-primary"
                                        value={usernameForm}
                                        onChange={(e) => {
                                            setUsernameForm(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label for="email" className="form-label">
                                        E-Mail
                                    </label>
                                    <input
                                        type="text"
                                        name="email"
                                        id="email"
                                        className="form-control rounded-end border-1 border-primary"
                                        onChange={(e) => {
                                            setEmailForm(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label for="nohp" className="form-label">
                                        No Handphone
                                    </label>
                                    <input
                                        type="number"
                                        name="nohp"
                                        id="nohp"
                                        className="form-control rounded-end border-1 border-primary"
                                        onChange={(e) => {
                                            setNoHpForm(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label
                                        for="checkin_date"
                                        className="form-label"
                                    >
                                        Check In Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkin_date"
                                        id="checkin_date"
                                        className="form-control rounded-end border-1 border-primary"
                                        onChange={(e) => {
                                            setCheckinForm(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                            <div className="row mb-3">
                                <div className="col-8">
                                    <label
                                        for="checkout_date"
                                        className="form-label"
                                    >
                                        Check Out Date
                                    </label>
                                    <input
                                        type="date"
                                        name="checkout_date"
                                        id="checkout_date"
                                        className="form-control rounded-end border-1 border-primary"
                                        onChange={(e) => {
                                            setCheckoutForm(e.target.value);
                                        }}
                                    />
                                </div>
                            </div>
                        </div>
                        <div className="col-4 d-flex flex-column align-self-end mx-5 my-2">
                            <div className="row">
                                <h4>{room.room_name}</h4>
                            </div>
                            <div className="row my-4">
                                <h1 className="fw-bold">{room.room_price}</h1>
                            </div>
                            <div className="row">
                                <button
                                    type="submit"
                                    className="btn btn-primary py-3 fw-bolder"
                                >
                                    Bayar Sekarang
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        </>
    );
};

export default FormBooking;
