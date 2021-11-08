import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

function CreateStation() {
  const [Station, SetStation] = useState({
    location: "",
    numberOfBikes: 0,
    address: "",
    contact: "",
  });

  function handleChangeStation(e) {
    e.persist();
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
        onChange={handleChangeStation}
        name="location"
        placeholder="Loaction"
      ></TextField>
      <TextField
        type="number"
        onChange={handleChangeStation}
        name="numberOfBikes"
        placeholder="number of bikes"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="address"
        placeholder="address"
      ></TextField>
      <TextField
        onChange={handleChangeStation}
        name="contact"
        placeholder="contact"
      ></TextField>
      <Button
        onClick={() => {
          console.log(Station);
          axios
            .post("http://localhost:3002/station", Station)
            .then((result) => {
              console.log("station created", result.data);
            })
            .catch((err) => {
              console.log(err);
            });
        }}
      >
        {/* here i will send the station object to the database */}
        {/* I still need to handle the type of bikes number */}
        Create
      </Button>
    </Box>
  );
}

export default CreateStation;
