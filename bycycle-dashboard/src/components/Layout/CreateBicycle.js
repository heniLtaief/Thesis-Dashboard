import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import { DropzoneDialog } from "material-ui-dropzone";
import axios from "axios";
import { Input } from "@material-ui/core";
function CreateBicycle() {
  const [open, setOpen] = React.useState(false);
  const [Bicycle, SetBicycle] = useState({
    category: "",
    description: "",
    photo: "",
  });
  const [image, setImage] = useState("");
  const [respo, setRespo] = useState("");

  function handleChangeBicycle(e) {
    e.persist();
    const { name, value } = e.target;
    SetBicycle((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  const uploadAndGetImageUrl = () => {
    const fd = new FormData();
    fd.append("file", image);
    axios
      .post("http://localhost:3000/bicycle/upload", fd)
      .then((res) => setRespo(res.data.url));
  };
  return (
    <Box>
      <h3> Create bicycle</h3>
      <div>
        <input
          name="photo"
          placeholder="Photo"
          type="file"
          onChange={(e) => setImage(e.target.files[0])}
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
          onClick={async () => {
            uploadAndGetImageUrl();
            Bicycle.photo = respo;
            await axios
              .post("http://localhost:3000/bicycle", Bicycle)
              .then((res) => {
                console.log(res);
              })
              .then(() => {
                window.location.reload();
              })
              .catch((err) => {
                console.log(err);
              });
          }}
        >
          Click Here to Create
        </Button>
      </div>
    </Box>
  );
}

export default CreateBicycle;
