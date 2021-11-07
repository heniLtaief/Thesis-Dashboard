import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

function CreateSuggestion() {
  const [Suggestion, SetSuggestion] = useState({
    photo: "",
    location: "",
    duration: "",
    distance: "",
    description: "",
  });

  function handleChangeBicycle(e) {
    e.persist();
    const { name, value } = e.target;
    SetSuggestion((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  return (
    <Box>
      <h3> Create Suggestion</h3>
      <TextField
        onChange={handleChangeBicycle}
        name="photo"
        placeholder="Photo"
      />
      <TextField
        name="location"
        onChange={handleChangeBicycle}
        placeholder="Location"
      />
      <TextField
        name="duration"
        onChange={handleChangeBicycle}
        placeholder="Duration"
      />
      <TextField
        name="distance"
        onChange={handleChangeBicycle}
        placeholder="Distance"
      />
      <TextField
        name="description"
        onChange={handleChangeBicycle}
        placeholder="Description"
      />

      <Button onClick={() => console.log(Suggestion)}> Create</Button>
    </Box>
  );
}

export default CreateSuggestion;
