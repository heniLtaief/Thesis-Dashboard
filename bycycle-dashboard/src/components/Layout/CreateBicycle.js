import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function CreateBicycle() {
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
      <TextField
        onChange={handleChangeBicycle}
        name="photo"
        placeholder="Photo"
      ></TextField>
      <Button
        onClick={() => {
          console.log(Bicycle);
          //   here i will send the object bicycle to the databasa
        }}
      >
        Create
      </Button>
    </Box>
  );
}

export default CreateBicycle;
