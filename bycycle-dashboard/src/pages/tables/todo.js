import * as React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useState } from "react";
import axios from "axios";

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
          onClick={() => {
            axios
              .post("http://localhost:3002/event", Event)
              .then((res) => {
                console.log(res.data);
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
