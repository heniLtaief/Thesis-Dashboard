import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function CreateStation() {
  const [Station, SetStation] = useState({
    location: "",
    numberOfBikes: 0,
    address: "",
    contact: "",
  });

  function handleChangeBicycle(e) {
    const { name, value } = e.target;
    SetStation((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  return (
    <Box>
      <h3> Create Station</h3>
      <TextField
        onChange={handleChangeBicycle}
        name="location"
        placeholder="Loaction"
      ></TextField>
      <TextField
        type="number"
        onChange={handleChangeBicycle}
        name="numberOfBikes"
        placeholder="number of bikes"
      ></TextField>
      <TextField
        onChange={handleChangeBicycle}
        name="address"
        placeholder="address"
      ></TextField>
      <TextField
        onChange={handleChangeBicycle}
        name="contact"
        placeholder="contact"
      ></TextField>
      <Button onClick={() => console.log(Station)}>
        {/* here i will send the station object to the database */}
        {/* I still need to handle the type of bikes number */}
        Create
      </Button>
    </Box>
  );
}

export default CreateStation;
