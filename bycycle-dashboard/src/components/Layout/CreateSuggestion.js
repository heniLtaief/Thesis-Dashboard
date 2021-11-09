import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";

import { DropzoneDialog } from "material-ui-dropzone";
import { DropzoneArea } from "material-ui-dropzone";

import axios from "axios";
function CreateSuggestion() {
  const [open, setOpen] = React.useState(false);
  const [Suggestion, SetSuggestion] = useState({
    photo: "",
    location: "",
    duration: "",
    distance: "",
    description: "",
  });

  function handleChangeSuggestion(e) {
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
        <TextField
          onChange={handleChangeSuggestion}
          name="photo"
          placeholder="Photo"
          type="file"
        />
        <TextField
          name="location"
          onChange={handleChangeSuggestion}
          placeholder="Location"
        />
        <TextField
          name="duration"
          onChange={handleChangeSuggestion}
          placeholder="Duration"
        />
        <TextField
          name="distance"
          onChange={handleChangeSuggestion}
          placeholder="Distance"
        />
        <TextField
          name="description"
          onChange={handleChangeSuggestion}
          placeholder="Description"
        />
        {/* <div>
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
        </div> */}
        <Button
          onClick={() => {
            axios
              .post("http://localhost:3002/addsuggestion", Suggestion)
              .then((result) => {
                console.log("suggestion created", result.data);
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Create
        </Button>
      </div>
    </Box>
  );
}

export default CreateSuggestion;
