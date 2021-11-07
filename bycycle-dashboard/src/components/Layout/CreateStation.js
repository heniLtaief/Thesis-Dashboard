import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreateStation() {
  return (
    <Box>
      <h3> Create Station</h3>
      <TextField placeholder="Loaction" />
      <TextField placeholder="number of bikes" />
      <TextField placeholder="address" />
      <TextField placeholder="contact" />
      <Button onClick={() => console.log("heyy")}> Create</Button>
    </Box>
  );
}

export default CreateStation;
