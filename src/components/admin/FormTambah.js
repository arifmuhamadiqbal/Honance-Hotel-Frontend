import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
import { Button } from "react-bootstrap";

const FormTambah = () => {
  const {kamarBaru} = useParams();
  const idBaru = parseInt(kamarBaru) + 1;
  console.log(idBaru);
  
  // state initiation
  const [facilities, setFacilities] = useState([]);
  const [kodeKamar, setKodeKamar] = useState("");
  const [namaKamar, setNamaKamar] = useState("");
  const [deskripsiKamar, setDeskripsiKamar] = useState("");
  const [fasilitasKamar, setFasilitasKamar] = useState([]);
  const [hargaKamar, setHargaKamar] = useState("");
  const [namaFile, setNamaFile] = useState("");
  const [file, setFile] = useState();
  const [preview, setPreview] = useState();
  // end of state initiation

  const navigate = useNavigate();

  useEffect(() => {
    getFacilities();
  }, []);

  // get facilities from database through backend
  const getFacilities = async () => {
    let response = await axios.get("http://localhost:3020/facilities");
    console.log(response.data);
    setFacilities(response.data);
  }

  // get value from checked checkbox and put into state fasilitasKamar
  const handleChecked = e => {
    if (e.target.checked === true) {
      setFasilitasKamar([...fasilitasKamar, Number(e.target.value)]);
      console.log(fasilitasKamar);
    } else {
      const selectedFac = fasilitasKamar.filter(a => {
        if (a === Number(e.target.value)) return false;
        return true;
      });
      setFasilitasKamar([...selectedFac]);
      console.log(fasilitasKamar);
    }
  };

  return (
    <div className="container-fluid d-flex justify-content-center mt-5">
      <div className="row">
        <div className="col-md-10">
          <form className="form-control"
            onSubmit={ async(e) => {
              e.preventDefault();
              const formData = new FormData();
              formData.append("kodeKamar", kodeKamar);
              formData.append("namaKamar", namaKamar);
              formData.append("deskripsiKamar", deskripsiKamar);
              formData.append("fasilitasKamar", fasilitasKamar);
              formData.append("hargaKamar", hargaKamar);
              formData.append("filename", namaFile);
              formData.append("file", file);
              try {
                  await axios.all([
                    await axios.post("http://localhost:3020/addRoom", formData),
                    fasilitasKamar.forEach(async (f) => {
                      console.log(f);
                     await axios.post("http://localhost:3020/addRoomFacilities", {
                        FKid_room: idBaru,
                        FKid_facilities: f
                      })
                    })
                  ])
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
                placeholder="input room code"
                type="text"
                onChange={(e) => {
                  setKodeKamar(e.target.value);
                }} />
              <label>Room Name</label>
              <input
                className="form-control"
                placeholder="input room name"
                type="text"
                onChange={(e) => {
                  setNamaKamar(e.target.value);
                }} />
              <label>Room Desciption</label>
              <input
                className="form-control"
                placeholder="input room description"
                type="text"
                onChange={(e) => {
                  setDeskripsiKamar(e.target.value);
                }} />
              <label>Room Facilities</label>
              <div className="form-control">
                {facilities.map((n) => (
                  <div key={n.id_facilities}>
                    <input
                      className="me-2"
                      type={"checkbox"}
                      onChange={(e) => handleChecked(e)}
                      value={n.id_facilities}
                      checked={
                        fasilitasKamar.lastIndexOf(Number(n.id_facilities)) >= 0 ? true : false
                      }
                    />
                    <label for="facilities">{n.name_facilities}</label>
                  </div>
                ))}
              </div>
              <label>Room Price</label>
              <input
                className="form-control"
                placeholder="input room price"
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
                  style={{ width: "200px", height: "100px" }}
                  src={preview} alt="preview"
                />) : ("")}
                <br/>
              <Link className="btn btn-warning px-4 mb-3 mt-4" to={"/rooms"}>Back</Link>
              <Button className="btn-primary mb-3 mx-2 mt-4" type="submit">Submit</Button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default FormTambah;
