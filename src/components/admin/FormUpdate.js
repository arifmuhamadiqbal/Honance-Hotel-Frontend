import React from "react";

const FormUpdate = () => {
    return (
        <div class="container">
            <div class="row justify-content-center mt-5">
                <div class="col-md-8">
                    <h2 class="text-center">Form Update</h2>
                </div>
            </div>
            <div class="row justify-content-center">
                <div class="col-md-8">
                    <form action="/update:id" method="POST">
                        <input type="hidden" name="id_room2" value="<%= d.id_room %>" />
                        <div class="mb-3">
                            <label for="id_room" class="form-label">Id Room</label>
                            <input type="text" class="form-control" value="-" id="id_room" name="id_room" aria-describedby="emailHelp" />
                        </div>
                        <div class="mb-3">
                            <label for="name_room" class="form-label">Name Room</label>
                            <input type="text" class="form-control" value="-" id="name_room" name="name_room" />
                        </div>
                        <div class="mb-3">
                            <label for="facilities" class="form-label">Id Facilities</label>
                            <input type="number" class="form-control" value="-" id="facilities" name="facilities" />
                        </div>
                        <div class="mb-3">
                            <label for="quantity" class="form-label">Quantity</label>
                            <input type="number" class="form-control" value="-" id="quantity" name="quantity" />
                        </div>
                        <div class="mb-3">
                            <label for="price" class="form-label">Price</label>
                            <input type="number" class="form-control" value="-" id="price" name="price" />
                        </div>
                        <center>
                            <button type="submit" class="btn btn-success px-4 mt-5">Update</button>
                        </center>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default FormUpdate;