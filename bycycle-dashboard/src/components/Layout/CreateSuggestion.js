import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

function CreateSuggestion() {
  return (
    <Box>
      <h3> Create Suggestion</h3>
      <TextField placeholder="Photo" />
      <TextField placeholder="Location" />
      <TextField placeholder="Duration" />
      <TextField placeholder="Distance" />
      <TextField placeholder="Description" />

      <Button onClick={() => console.log("heyy")}> Create</Button>
    </Box>
  );
}

export default CreateSuggestion;
