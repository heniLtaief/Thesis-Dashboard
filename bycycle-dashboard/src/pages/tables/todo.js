import * as React from "react";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import { useEffect, useState } from "react";
import axios from "axios";
import Calendar from "./planner";

import moment from "moment";
import { appointments } from "./appointment-data/appointments";

function EventCreator({ data }) {
  const currentDate = moment();
  let date = currentDate.date();

  const makeTodayAppointment = (startDate, endDate) => {
    const days = moment(startDate).diff(endDate, "days");
    const nextStartDate = moment(startDate)
      .year(currentDate.year())
      .month(currentDate.month())
      .date(date);
    const nextEndDate = moment(endDate)
      .year(currentDate.year())
      .month(currentDate.month())
      .date(date + days);

    return {
      startDate: nextStartDate.toDate(),
      endDate: nextEndDate.toDate(),
    };
  };

  {
    data &&
      data.map(({ startDate, endDate, ...restArgs }) => {
        const result = {
          ...makeTodayAppointment(startDate, endDate),
          ...restArgs,
        };
        date += 1;
        if (date > 31) date = 1;
        return result;
      });
  }

  const [events, setEvent] = useState([]);
  var eventsData = [];
  const getEvents = () => {
    axios
      .get(`http://localhost:3002/event`)
      .then((response) => {
        console.log("response", response.data);
        setEvent(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };
  useEffect(() => {
    getEvents();
  }, []);

  console.log(eventsData);
  const [Event, SetEvent] = useState({
    title: "",
    startDate: "",
    endDate: "",
    location: "",
  });
  console.log("eventssss", data);
  function handleChangeEvent(e) {
    e.persist();
    const { name, value } = e.target;
    SetEvent((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }
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
      <br></br>
      <br></br>
      <br></br>
      <br></br>
      <br></br>

      <Calendar data={events}></Calendar>
      
    </Box>
  );
}

export default EventCreator;
