import React, { useEffect, useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Button } from "react-bootstrap";

const FormTambah = () => {
  const [facilities, setFacilities] = useState([]);
  const [kodeKamar, setKodeKamar] = useState("");
  const [namaKamar, setNamaKamar] = useState("");
  const [deskripsiKamar, setDeskripsiKamar] = useState("");
  const [fasilitasKamar, setFasilitasKamar] = useState([]);
  const [hargaKamar, setHargaKamar] = useState("");
  const [namaFile, setNamaFile] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  useEffect(() => {
    getFacilities();
  }, []);

  const getFacilities = async () => {
    let response = await axios.get("http://localhost:3020/facilities");
    console.log(response.data);
    setFacilities(response.data);
  }

  const handleChecked = (e) => {
    // to get the checked value
    // const checkedValue = e.target.value;
    // console.log(checkedValue);

    // to get the checked name
    const checkedName = e.target.name;
    // console.log(checkedName);

    setFasilitasKamar(checkedName);
    console.log(fasilitasKamar);
  }

  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="row">
        <div className="col-md-10">
          <form className="form-control"
            onSubmit={(e) => {
              e.preventDefault();
              const formData = new FormData();
              formData.append("kodeKamar", kodeKamar);
              formData.append("namaKamar", namaKamar);
              formData.append("deskripsiKamar", deskripsiKamar);
              formData.append("hargaKamar", hargaKamar);
              formData.append("filename", namaFile);
              formData.append("file", file);
              console.log(kodeKamar);
              try {
                axios.post("http://localhost:3020/addRoom", formData)
                  .then((data) => {
                    console.log(data);
                  })
              } catch (error) {
                console.log(error.message);
              }
              navigate("/rooms");
            }}
          >
            <div>
              <label>Room Code</label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setKodeKamar(e.target.value);
                }} />
              <label>Room Name</label>
              <input
                className="form-control"
                type="text"
                onChange={(e) => {
                  setNamaKamar(e.target.value);
                }} />
              <label>Room Desciption</label>
              <input
                className="form-control "
                type="text"
                onChange={(e) => {
                  setDeskripsiKamar(e.target.value);
                }} />
              <label>Room Facilities</label>
              <div className="form-control">
                {facilities.map((n, index) => (
                  <div key={index}>
                    <input
                      className="me-2"
                      name={n.name_facilities}
                      type={"checkbox"}
                      value={n.id_facilities}
                      onChange={handleChecked}
                    />
                    <label for="facilities">{n.name_facilities}</label>
                  </div>
                ))}
              </div>
              <label>Room Price</label>
              <input
                className="form-control"
                type="number"
                onChange={(e) => {
                  setHargaKamar(e.target.value);
                }} />
              <label>Room Photo</label>
              <input
                className="form-control"
                type="file"
                name="file"
                onChange={(e) => {
                  const foto = e.target.files[0]
                  setPreview(URL.createObjectURL(foto));
                  setFile(foto);
                  setNamaFile(foto.name);
                }} />
              <br />
              {preview ? (
                <img className="mb-3"
                  style={{ width: "250px", height: "150px" }}
                  src={preview} alt="preview"
                />) : ("")}
              <Button className="mb-3" type="submit">
                Submit
              </Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTambah;
