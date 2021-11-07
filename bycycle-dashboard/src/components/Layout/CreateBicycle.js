import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function CreateBicycle() {
  const [Bicyle, SetBicycle] = useState({
    category: "",
    description: "",
    photo: "",
  });

  function handleChangeBicycle(e) {
    const { name, value } = e.target;
    SetBicycle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
    console.log(value);
  }

  return (
    <Box>
      <h3> Create bicycle</h3>
      <TextField
        handleChangeBicycle={handleChangeBicycle}
        name="category"
        placeholder="Category"
      ></TextField>
      <TextField
        handleChangeBicycle={handleChangeBicycle}
        name="description"
        placeholder="Description"
      ></TextField>
      <TextField
        handleChangeBicycle={handleChangeBicycle}
        name="photo"
        placeholder="Photo"
      ></TextField>
      <Button onClick={() => console.log(Bicyle)}> Create</Button>
    </Box>
  );
}

export default CreateBicycle;
