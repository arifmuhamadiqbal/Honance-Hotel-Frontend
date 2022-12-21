import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const FormTambah = () => {
  const [kodeKamar, setKodeKamar] = useState("");
  const [namaKamar, setNamaKamar] = useState("");
  const [deskripsiKamar, setDeskripsiKamar] = useState("");
  const [hargaKamar, setHargaKamar] = useState("");
  const [namaFile, setNamaFile] = useState("");
  const [file, setFile] = useState();
  const navigate = useNavigate();

  /* const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  }; */

  /* const tambah = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kodeKamar", kodeKamar);
    formData.append("namaKamar", namaKamar);
    formData.append("deskripsiKamar", deskripsiKamar);
    formData.append("hargaKamar", hargaKamar);
    formData.append("filename", namaFile);
    formData.append("file", fileKamar);
    try {
      await axios.post("http://localhost:3020/addRooms", formData)
        .then((data) => {
          console.log(data);
        })
    } catch (error) {
      console.log(error.message);
    }
  }; */

  {/*  {preview ? (
              <img
                style={{ width: "200px", height: "250px" }}
                src={preview}
                alt="preview"
              />
            ) : (
              ""
            )} */}

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
          <form className="space-y-6"
            onSubmit={(event) => {
              const formData = new FormData();
              formData.append("kodeKamar", kodeKamar);
              formData.append("namaKamar", namaKamar);
              formData.append("deskripsiKamar", deskripsiKamar);
              formData.append("hargaKamar", hargaKamar);
              formData.append("filename", namaFile);
              formData.append("file", file);
              try {
                axios.post("http://localhost:3020/addRoom", formData)
                  .then((data) => {
                    console.log(data);
                  })
              } catch (error) {
                console.log(error.message);
              }
            }}
          />
          <div>
            <label>Room Code</label>
            <input
            type="text"
            name="kodeKamar" 
            value={kodeKamar}
              onChange={(e) => {
                setKodeKamar(e.target.value);
              }} />
            <label>Room Name</label>
            <input
            type="text" 
            name="namaKamar"
            value={namaKamar}
              onChange={(e) => {
                setNamaKamar(e.target.value);
              }} />
            <label>Room Desciption</label>
            <input
            type="text"
            name="deskripsiKamar"
            value={deskripsiKamar}
              onChange={(e) => {
                setDeskripsiKamar(e.target.value);
              }} />
            <label>Room Price</label>
            <input
            type="number"
            name="hargaKamar"
            value={hargaKamar}
              onChange={(e) => {
                setHargaKamar(e.target.value);
              }} />
            <label>Rooom Photo</label>
            <input
            type="file"
              onChange={(e) => {
                const foto = e.target.files[0]
                setFile(foto);
                setNamaFile(foto.name);
              }} />
          </div>
          <Button type="submit">
            Submit
          </Button>
        </div>
      </div>
    </div>
  );
};

export default FormTambah;
