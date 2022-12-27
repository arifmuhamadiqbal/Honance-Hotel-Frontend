import React, { useState } from "react";
import { Link } from "react-router-dom";

const Search = () => {
    const [rangeHarga, setRangeHarga] = useState();

    return (
        <div className="search-wrapper p-5">
            <div className="container rounded-4 border border-primary">
                <form className="px-5">
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
                                    onChange={(e) => {
                                        setRangeHarga(e.target.value);
                                    }}
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
                        <div className="col d-flex justify-content-end my-4">
                            <Link
                                to={`/searched/${rangeHarga}`}
                                className="col-3 btn btn-primary py-3 fw-bolder"
                            >
                                Search
                            </Link>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default Search;
