import React from "react";
import { makeStyles } from "@material-ui/styles";
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
