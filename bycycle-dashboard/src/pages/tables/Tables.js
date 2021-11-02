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

const datatableData = [
  ["Sidi Boussaid", "Example Inc.", "Tunis", "2026"],
  ["La Marsa", "Example Inc.", "Tunis,Marsa", "2078"],
  ["Carthage", "Example Inc.", "Amilcar", "1054"],
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
            columns={["Station", "Availabilty", "City", "Zip"]}
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
