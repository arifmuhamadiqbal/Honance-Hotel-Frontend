import React from "react";

class Search extends React.Component {
    render() {
        return (
            <div className="search-wrapper p-5">
                <div className="container rounded-4 border border-primary">
                    <div className="search-title pt-4">
                        <h1 className="text-center text-primary fw-bolder">
                            Honance Hotel
                        </h1>
                    </div>
                    <form action="/searchroom" className="px-5">
                        <div className="row my-3">
                            <div className="col">
                                <label
                                    for="range_harga"
                                    className="form-label fw-bold"
                                >
                                    Kategori Harga
                                </label>
                                <div className="input-group">
                                    <select
                                        required
                                        name="range_harga"
                                        id="range_harga"
                                        className="form-select border-1 border-primary py-3"
                                    >
                                        <option value="" disabled selected>
                                            Pilih Harga
                                        </option>
                                        <option value="500000">
                                            Rp 0 - Rp 500.000
                                        </option>
                                        <option value="1000000">
                                            Rp 500.000 - Rp 1.000.000
                                        </option>
                                        <option value="1500000">
                                            Rp 1.000.000 - Rp 1.500.000
                                        </option>
                                    </select>
                                </div>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col">
                                <label
                                    for="check_in"
                                    className="form-label fw-bold"
                                >
                                    Check In Date
                                </label>
                                <input
                                    type="date"
                                    name="check_in"
                                    id="check_in"
                                    className="form-control rounded-end border-1 border-primary py-3"
                                    onChange={(e) =>
                                        this.setState({
                                            checkinDate: e.target.value,
                                        })
                                    }
                                />
                            </div>
                            <div className="col">
                                <label
                                    for="check_out"
                                    className="form-label fw-bold"
                                >
                                    Check Out Date
                                </label>
                                <input
                                    type="date"
                                    name="check_out"
                                    value="check_out"
                                    className="form-control rounded-end border-1 border-primary py-3"
                                    readOnly
                                />
                            </div>
                            <div className="col">
                                <label
                                    for="durasi"
                                    className="form-label fw-bold"
                                >
                                    Duration
                                </label>
                                <input
                                    type="text"
                                    name="durasi"
                                    className="form-control rounded-end border-1 border-primary py-3"
                                    placeholder="0 Night"
                                />
                            </div>
                        </div>
                        <div className="row">
                            <div className="col d-flex justify-content-end my-4">
                                <button
                                    type="submit"
                                    className="col-3 btn btn-primary py-3 fw-bolder"
                                >
                                    Search
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
        );
    }
}

export default Search;