import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

// import page admin
import Dashboard from "./components/admin/Dashboard.js";
import Bookings from "./components/admin/Bookings.js";
import Rooms from "./components/admin/Rooms.js";
import FormTambah from "./components/admin/FormTambah.js";
import FormUpdate from "./components/admin/FormUpdate.js";
import FormTambahFasilitas from "./components/admin/FormTambahFasilitas.js";
<<<<<<< HEAD

=======
>>>>>>> bdb18d9bab1552c13062046874be87753377830e

// import page authentication
import Login from "./components/auth/Login.js";
import Register from "./components/auth/Register.js";

// import page client
import FormBooking from "./components/client/FormBooking.js";
import MainPage from "./components/client/MainPage.js";
import ClientRooms from "./components/client/ClientRooms.js";
import SearchedRooms from "./components/client/SearchedRooms.js";

function App() {
    return (
        <BrowserRouter>
            <Routes>
                {/* Authentication */}
                <Route path="/" element={<Login />} />
                <Route path="/register" element={<Register />} />

                {/* Admin */}
                <Route path="/admin" element={<Dashboard />} />
                <Route path="/bookings" element={<Bookings />} />
                <Route path="/rooms" element={<Rooms />} />
<<<<<<< HEAD
                <Route path="/rooms/addRoom/:kamarBaru" element={<FormTambah />} />
=======
                <Route path="/rooms/addroom" element={<FormTambah />} />
>>>>>>> bdb18d9bab1552c13062046874be87753377830e
                <Route path="/rooms/update/:id_room" element={<FormUpdate />} />
                <Route path="/rooms/addfacilities" element={<FormTambahFasilitas />} />

                {/* Client */}
                <Route path="/client" element={<MainPage />} />
                <Route path="/client-rooms" element={<ClientRooms />} />
                <Route
                    path="/searched/:range_harga"
                    element={<SearchedRooms />}
                />
                <Route path="/formbook/:id_room" element={<FormBooking />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
