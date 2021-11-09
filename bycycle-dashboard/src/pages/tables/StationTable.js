import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import axios from "axios";
const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function StationTable() {
  const [Stations, SetStations] = useState([]);
  var stationTable = Stations.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const getAllStations = () => {
    axios
      .get(`http://localhost:3002/allstations`)
      .then((response) => {
        SetStations(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getAllStations();
  }, []);

  return (
    <>
      <PageTitle title="Stations" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Station List"
            data={stationTable}
            columns={[
              "Number of bikes",
              "City",
              "Email",
              "Income",
              "Status",
              "Name",
              "Situation",
              "StationId",
              "CreatedA",
              "UpdatedAt",
            ]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
