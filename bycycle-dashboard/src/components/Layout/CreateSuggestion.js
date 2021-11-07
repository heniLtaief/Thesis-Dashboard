import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import { DropzoneDialog } from "material-ui-dropzone";
import { DropzoneArea } from "material-ui-dropzone";
function CreateSuggestion() {
  const [open, setOpen] = React.useState(false);
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
      <div>
        {/* <TextField
          onChange={handleChangeBicycle}
          name="photo"
          placeholder="Photo"
        /> */}
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
        <div>
          <Button
            variant="contained"
            color="primary"
            onClick={() => setOpen(true)}
          >
            Add Image
          </Button>
          <DropzoneDialog
            acceptedFiles={["image/*"]}
            cancelButtonText={"cancel"}
            submitButtonText={"submit"}
            maxFileSize={5000000}
            open={open}
            onClose={() => setOpen(false)}
            onSave={(files) => {
              console.log("Files:", files);
              setOpen(false);
            }}
            showPreviews={true}
            showFileNamesInPreview={true}
          />
        </div>
        <Button onClick={() => console.log(Suggestion)}> Create</Button>
      </div>
    </Box>
  );
}

export default CreateSuggestion;
