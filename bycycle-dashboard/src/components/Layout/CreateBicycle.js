import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import axios from "axios";
function CreateBicycle() {
  const [open, setOpen] = React.useState(false);
  const [Bicycle, SetBicycle] = useState({
    category: "",
    description: "",
    photo: "",
  });

  function handleChangeBicycle(e) {
    e.persist();
    const { name, value } = e.target;
    SetBicycle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Box>
      <h3> Create bicycle</h3>
      <div>
        <TextField
          onChange={handleChangeBicycle}
          name="photo"
          placeholder="Photo"
          type="file"
        />
        <TextField
          onChange={handleChangeBicycle}
          name="category"
          placeholder="Category"
        ></TextField>

        <TextField
          onChange={handleChangeBicycle}
          name="description"
          placeholder="Description"
        ></TextField>

        <Button
          onClick={() => {
            console.log(Bicycle);
            axios
              .post(`https://bycyclebackend.herokuapp.com/bicycle`, Bicycle)
              .then((result) => {
                console.log("bike created", result.data);
              })
              .catch((err) => {
                console.log(err);
              });
            //   here i will send the object bicycle to the databasa
          }}
        >
          Create
        </Button>
      </div>
    </Box>
  );
}

export default CreateBicycle;
