import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// data
// import mock from "../dashboard/mock";
import axios from "axios";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Tables() {
  const classes = useStyles();
  const [Stations, SetStations] = useState([]);
  const [Bicycles, SetBicycles] = useState([]);

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

  var bicycleTable = Bicycles.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const getAllBicycles = () => {
    axios
      .get(`http://localhost:3002/bicycle`)
      .then((response) => {
        SetBicycles(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    getAllBicycles();
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
      <PageTitle title="Bicycles" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Bicycle List"
            data={bicycleTable}
            columns={[
              "To be removed",
              "Bike Id",
              "Category",
              "Purchase Date",
              "Description",
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

/* 
          {
          <Grid item xs={12}>

          <Widget
            title="Incoming Stats By station"
            upperTitle
            noBodyPadding
            bodyClass={classes.tableOverflow}
          >
            <Table data={mock.table} />
          </Widget>
         </Grid>
        }
        */
