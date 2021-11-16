import React from "react";
import { makeStyles } from "@material-ui/styles";
import BicycleTable from "./BicycleTable";
import StationTable from "./StationTable";
import SuggestionTable from "./SuggestionTable";
import ReviewTable from "./ReviewsTable";
import EventCreator from "./todo";
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
      <EventCreator></EventCreator>
    </>
  );
}
