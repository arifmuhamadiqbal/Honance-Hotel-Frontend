import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";

const FormTambahFasilitas = () => {
    const [facilities, setFacilities] = useState([]);
    const [addFacilities, setAddFacilities] = useState();

    useEffect(() => {
        getFacilities();
    }, [])

    const getFacilities = async () => {
        let response = await axios.get("http://localhost:3020/facilities");
        setFacilities(response.data);
    }

    const deleteFacilities = async (id_facilities) => {
        await axios.delete(`http://localhost:3020/deleteFacilities/${id_facilities}`);
        console.log("Delete facility successful !");
        getFacilities();
    }

    return (
        <div className="container-fluid text-center card mt-5" style={{ width: "500px" }}>
            <h2 className="mt-2">All Room Facilities</h2>
            <Table striped bordered className="table-sm mt-2">
                <thead>
                    <tr className="text-center">
                        <th>No.</th>
                        <th>Nama Fasilitas</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody className="small">
                    {facilities.map((f, index) => (
                        <tr key={f}>
                            <td>{index + 1}</td>
                            <td>{f.name_facilities}</td>
                            <td>
                                <center>
                                    <button className="btn btn-danger" onClick={ e => {
                                        e.preventDefault()
                                        deleteFacilities(f.id_facilities)}
                                    } 
                                    >Delete</button>
                                </center>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <form className="form-control mb-4"
                onSubmit={ async (e) => {
                    try {
                        e.preventDefault();
                        await axios.post("http://localhost:3020/addFacilities", {
                            name_facilities: addFacilities
                        }).then((data) => {
                            console.log(data);
                            console.log("Added facility successful !");
                        }).then(()=> {
                            getFacilities();
                        })
                    } catch (error) {
                        console.log(error.message);
                    }
                }}>
                <label className="mb-2 mt-4">Nama Fasilitias</label>
                <input
                    className="form-control"
                    type={"text"}
                    placeholder="Masukkan nama fasilitas"
                    onChange={(e) => {
                        setAddFacilities(e.target.value);
                        console.log(addFacilities);
                    }} />
                <Link className="btn btn-warning px-4 mt-4 mb-4" to={"/rooms"}>Back</Link>
                <button className="btn btn-primary  mx-2 mt-4 mb-4">Submit</button>
            </form>
        </div>
    );
};

export default FormTambahFasilitas;