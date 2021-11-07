import React from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import Widget from "../../components/Widget";
import Table from "../dashboard/components/Table/Table";

// data
import mock from "../dashboard/mock";

// this is hardcoded data for the stations
// here we fetch the data of the stations 
const datatableData = [
  ["Sidi Boussaid", "Imad", "Tunis", "25"],
  ["La Marsa", "Heni", "Tunis,Marsa", "15"],
  ["Carthage", "Elyes", "Amilcar", "10"],
];

const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function Tables() {
  const classes = useStyles();
  return (
    <>
      <PageTitle title="Stations" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="Station List"
            data={datatableData}
            columns={["Station", "Contact", "Address", "Number of bikes"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
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
      </Grid>
    </>
  );
}
