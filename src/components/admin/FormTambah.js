import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { Form, Button } from "react-bootstrap";

const FormTambah = () => {
  /* const [kodeKamar, setKodeKamar] = useState("");
  const [namaKamar, setNamaKamar] = useState("");
  const [deskripsiKamar, setDeskripsiKamar] = useState("");
  const [hargaKamar, setHargaKamar] = useState("");
  const [namaFoto, setNamaFoto] = useState("");
  const [urlFoto, setUrlFoto] = useState("");
  const [file, setFile] = useState("");
  const [preview, setPreview] = useState("");
  const navigate = useNavigate();

  console.log(kodeKamar);
  console.log(namaKamar);
  console.log(deskripsiKamar);
  console.log(hargaKamar);
  console.log(file);

  const loadImage = (e) => {
    const image = e.target.files[0];
    setFile(image);
    setPreview(URL.createObjectURL(image));
  };

  const tambah = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("kodeKamar", kodeKamar);
    formData.append("namaKamar", namaKamar);
    formData.append("deskripsiKamar", deskripsiKamar);
    formData.append("hargaKamar", hargaKamar);
    console.log("isi file adalah ", file);
    try {
      await axios.post("http://localhost:3020/addRooms", formData);
    } catch (error) {
      console.log(error.message);
    }
  };

  return ( */
    {/*  {preview ? (
              <img
                style={{ width: "200px", height: "250px" }}
                src={preview}
                alt="preview"
              />
            ) : (
              ""
            )} */}
    {/* <div className="container mt-5">
      <div className="row">
        <div className="col-md-7">
        <form className="space-y-6"
                onSubmit={(event) => {
                  var formdata = new FormData();

                  formdata.append("nama", newProduct.nama);
                  formdata.append("detail", newProduct.detail);
                  formdata.append("kuantitas", newProduct.kuantitas);
                  formdata.append("harga", newProduct.harga);
                  formdata.append("id_jenis", newProduct.id_jenis);
                  formdata.append("filename", newProduct.filename);
                  formdata.append("file", newProductFile);
                  axios
                    .post(`http://localhost:4000/tambah-produk`, formdata)
                    .then((data) => {
                      console.log("gege");
                      console.log(data);
                    });
                }}
              />
              <div>
                  <label
                    htmlFor="nama-produk"
                    className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                  >
                    Nama Produk
                  </label>
                  <input
                    onChange={(event) => {
                      let val = event.target.value;
                      setNewProduct({
                        nama: val,
                        detail: newProduct.detail,
                        kuantitas: newProduct.kuantitas,
                        harga: newProduct.harga,
                        id_jenis: newProduct.id_jenis,
                        filename: newProduct.filename,
                      });
                    }}
                    type="text"
                    name="nama-produk"
                    id="nama-produk"
                    className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-600 dark:border-gray-500 dark:placeholder-gray-400 dark:text-white"
                    placeholder="apa kek yang keren"
                    required
                  />
                </div>

            <Button variant="primary" type="submit" className="d-block mt-2">
              Submit
            </Button>
        </div>
      </div>
    </div> */}
 /*  ); */
};

export default FormTambah;
