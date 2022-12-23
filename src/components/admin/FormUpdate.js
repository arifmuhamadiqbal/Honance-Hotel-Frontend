import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const FormUpdate = () => {
    const { id_room } = useParams();
    console.log(id_room);
    const [room, setRoom] = useState([]);

    useEffect(() => {
        getRoom();
    }, []);


    // get selected room
    const getRoom = async () => {
        let response = await axios.get(`http://localhost:3020/rooms/update/${id_room}`);
        console.log(response.data);
        setRoom(response.data);
    };

    /*     const handleChecked = (e) => {
            // to get the checked value
            // const checkedValue = e.target.value;
            // console.log(checkedValue);
    
            // to get the checked name
            const checkedName = e.target.name;
            // console.log(checkedName);
    
            setFasilitasKamar(checkedName);
            console.log(fasilitasKamar);
        } */

    return (
        <div className="container-fluid mt-5" style={{ width: "50%" }}>
            <div className="row">
                <div className="col">
                    <Form className="form-control ">
                        <div>
                            <label>Room Code</label>
                            <input
                                className="form-control"
                                type={"text"}
                                value={room.room_code}
                            />
                            <label>Room Name</label>
                            <input
                                className="form-control"
                                type={"text"}
                                value={room.room_name}
                            />
                            <label>Room Desciption</label>
                            <input
                                className="form-control"
                                type={"text"}
                                value={room.room_description}
                            />
                            <label>Room Facilities</label>
                            {/* {room.facilities.map((f) => {
                                console.log("ini nilai f");
                                console.log(f);
                                return (
                                    <ul key={f}>
                                        <input
                                            type={"checkbox"}
                                        />
                                        <label>{f.name_facilities}</label>
                                    </ul>
                                );
                            })} */}
                            <label>Room Price</label>
                            <input
                                className="form-control"
                                type={"number"}
                                value={room.room_price}
                            />
                            <label>Room Photo</label>
                            <input
                                className="form-control"
                                type={"file"}
                            />
                            <label>Recent Photo :</label>
                            <img className="form-control"
                                style={{ width: "200px", height: "100px" }}
                                src={"http://localhost:3020/images/" + room.room_photo} alt="recent" />
                        </div>
                        <Link className="btn btn-danger px-4 mb-3 mt-4" to={"/rooms"}>Back</Link>
                        <Button className="btn btn-success mb-3 mx-2 mt-4">Update</Button>
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default FormUpdate;