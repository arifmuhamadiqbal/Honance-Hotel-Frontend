import React, { useEffect, useState } from "react";
import axios from "axios";
<<<<<<< HEAD
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button, Form } from "react-bootstrap";

const FormUpdate = () => {
    // state initiation
    const { id_room } = useParams(); // ngambil parameter id room
    // console.log("id room : ", id_room);

    const [room, setRoom] = useState([]); // wadah data room yang akan di update
    const [roomFac, setRoomFac] = useState([]);

    const [facilities, setFacilities] = useState([]); // wadah seluruh fasilitas

    // wadah inputan
    const [newCode, setNewCode] = useState("");
    const [newName, setNewName] = useState("");
    const [newDesc, setNewDesc] = useState("");
    const [newFac, setNewFac] = useState([]);
    const [newPrice, setNewPrice] = useState("");
    const [newFilename, setNewFilename] = useState("");
    const [file, setFile] = useState();

    const [preview, setPreview] = useState();
    const navigate = useNavigate();

    useEffect(() => {
        getRoomById();
        getFacilities();
        getFacilitiesById();
    }, []);


    // get room by id
    const getRoomById = async () => {
        let response = await axios.get(`http://localhost:3020/rooms/${id_room}`);
        //console.log(response.data);
        setRoom(response.data);
    };

    // get all facilities
    const getFacilities = async () => {
        let res = await axios.get("http://localhost:3020/facilities")
        //console.log(res.data);
        setFacilities(res.data);
    }

    // get room facilities by id
    const getFacilitiesById = async () => {
        let fasKamar = await axios.get(`http://localhost:3020/getRoomFacilitiesById/${id_room}`)
        //console.log(fasKamar.data);
        setRoomFac(fasKamar.data)
    }

    console.log("ini data room : ", room);
    console.log("ini room facilities : ", roomFac);
    console.log("ini data facilities : ", facilities);

    // get value from checked checkbox and put into state fasilitasKamar
    const handleChecked = (e) => {
        if (e.target.checked === true) {
            setNewFac([...newFac, Number(e.target.value)]);
            console.log(newFac);
        } else {
            const selectedFac = newFac.filter(a => {
                if (a === Number(e.target.value)) return false;
                return true;
            });
            setNewFac([...selectedFac]);
            console.log(newFac);
        }
    };
=======
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
>>>>>>> bdb18d9bab1552c13062046874be87753377830e

    return (
        <div className="container-fluid mt-5" style={{ width: "50%" }}>
            <div className="row">
                <div className="col">
<<<<<<< HEAD
                    <Form className="form-control"
                        onSubmit={async (e) => {
                            e.preventDefault();
                            const formData = new FormData();
                            formData.append("newCode", newCode);
                            formData.append("newName", newName);
                            formData.append("newDesc", newDesc);
                            formData.append("newFac", newFac);
                            formData.append("newPrice", newPrice);
                            formData.append("newFilename", newFilename);
                            formData.append("file", file);
                            try {
                                await axios.all([
                                    await axios.put(`http://localhost:3020/rooms/update/${id_room}`, formData),
                                    newFac.forEach(async (rf) => {
                                        console.log(rf);
                                        await axios.put(`http://localhost:3020/updateRoomFacilities/${id_room}`,
                                            {
                                                FKid_room: id_room,
                                                FKid_facilities: rf
                                            })
                                    })
                                ])
                            } catch (error) {
                                console.log(error.message);
                            }
                            navigate("/rooms");
                        }}>
=======
                    <Form className="form-control ">
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                        <div>
                            <label>Room Code</label>
                            <input
                                className="form-control"
                                type={"text"}
<<<<<<< HEAD
                                defaultValue={room.room_code}
                                onChange={(e) => {
                                    setNewCode(e.target.value)
                                }}
=======
                                value={room.room_code}
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                            />
                            <label>Room Name</label>
                            <input
                                className="form-control"
                                type={"text"}
<<<<<<< HEAD
                                defaultValue={room.room_name}
                                onChange={(e) => {
                                    setNewName(e.target.value);
                                }}
=======
                                value={room.room_name}
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                            />
                            <label>Room Desciption</label>
                            <input
                                className="form-control"
                                type={"text"}
<<<<<<< HEAD
                                defaultValue={room.room_description}
                                onChange={(e) => {
                                    setNewDesc(e.target.value);
                                }}
                            />
                            <label>Room Facilities</label>
                            <div className="form-control">
                                {facilities.map((f) => {
                                    return (
                                        <ul key={f} className="mt-2">
                                            <input
                                                type={"checkbox"}
                                                onChange={(e) => handleChecked(e)}
                                                value={f.id_facilities}
                                            /* checked={
                                                newFac.lastIndexOf(Number(f.id_facilities)) >= 0 ? true : false
                                            } */
                                            autoComplete={roomFac.includes((f.id_facilities))}
                                            />
                                            <label className="px-2">{f.name_facilities}</label>
                                        </ul>
                                    );
                                })}
                            </div>
=======
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
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                            <label>Room Price</label>
                            <input
                                className="form-control"
                                type={"number"}
<<<<<<< HEAD
                                defaultValue={room.room_price}
                                onChange={(e) => {
                                    setNewPrice(e.target.value);
                                }}
=======
                                value={room.room_price}
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                            />
                            <label>Room Photo</label>
                            <input
                                className="form-control"
                                type={"file"}
<<<<<<< HEAD
                                name="file"
                                onChange={(e) => {
                                    const foto = e.target.files[0]
                                    setPreview(URL.createObjectURL(foto));
                                    setFile(foto);
                                    setNewFilename(foto.name);
                                }}
                            />
                            <br />
                            {preview ? (
                                <img className="mb-3"
                                    style={{ width: "200px", height: "100px" }}
                                    src={preview} alt="preview"
                                />) : ("")}
                            <br />
=======
                            />
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                            <label>Recent Photo :</label>
                            <img className="form-control"
                                style={{ width: "200px", height: "100px" }}
                                src={"http://localhost:3020/images/" + room.room_photo} alt="recent" />
                        </div>
<<<<<<< HEAD
                        <Link className="btn btn-warning px-4 mb-3 mt-4" to={"/rooms"}>Back</Link>
                        <Button className="btn btn-success mb-3 mx-2 mt-4" type="submit">Update</Button>
=======
                        <Link className="btn btn-danger px-4 mb-3 mt-4" to={"/rooms"}>Back</Link>
                        <Button className="btn btn-success mb-3 mx-2 mt-4">Update</Button>
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                    </Form>
                </div>
            </div>
        </div>
    );
}

export default FormUpdate;