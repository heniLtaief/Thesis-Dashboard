import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
// import { DropzoneDialog } from "material-ui-dropzone";
import axios from "axios";
// import { Input } from "@material-ui/core";
function EventCreator() {
  const [Event, SetEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    location: "",
  });

  function handleChangeEvent(e) {
    e.persist();
    const { name, value } = e.target;
    SetEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
  console.log(Event);
  return (
    <Box>
      <h3> Create Event</h3>
      <div>
        <TextField
          onChange={handleChangeEvent}
          name="title"
          placeholder="title"
          type="text"
        ></TextField>
        {/* {
    title: "Install New Router in Dev Room",
    startDate: new Date(2021, 5, 25, 14, 30),
    endDate: new Date(2021, 5, 25, 15, 35),
    id: 2,
    location: "Room 2",
  }, */}
        <TextField
          onChange={handleChangeEvent}
          name="startDate"
          placeholder="startDate"
          type="Date"
        ></TextField>
        <TextField
          onChange={handleChangeEvent}
          name="endDate"
          placeholder="endDate"
          type="Date"
        ></TextField>
        <TextField
          onChange={handleChangeEvent}
          name="location"
          placeholder="location"
          type="text"
        ></TextField>

        <Button
          onClick={async () => {
            await axios
              .post("https://bycyclethesis.herokuapp.com/Event", Event)
              .then((res) => {
                console.log(res.data);
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

export default EventCreator;
