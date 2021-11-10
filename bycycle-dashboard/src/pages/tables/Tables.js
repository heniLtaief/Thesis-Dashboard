import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";
import BicycleTable from "./BicycleTable";
import StationTable from "./StationTable";
import SuggestionTable from "./SuggestionTable";
import ReviewTable from "./ReviewsTable";

// components
import PageTitle from "../../components/PageTitle";
// import Widget from "../../components/Widget";
// import Table from "../dashboard/components/Table/Table";

// data
// import mock from "../dashboard/mock";

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <SuggestionTable></SuggestionTable>
      <StationTable></StationTable>
      <BicycleTable></BicycleTable>
      <ReviewTable></ReviewTable>
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
