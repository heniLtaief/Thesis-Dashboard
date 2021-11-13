import React, { useState, useEffect } from "react";
import { Grid } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";
import MUIDataTable from "mui-datatables";

// components
import PageTitle from "../../components/PageTitle";
import axios from "axios";
import { Router } from "react-router";
const useStyles = makeStyles((theme) => ({
  tableOverflow: {
    overflow: "auto",
  },
}));

export default function ReviewTable() {
  const [reviews, SetReviews] = useState([]);
  var reviewTable = reviews.map(function (obj) {
    return Object.keys(obj)
      .sort()
      .map(function (key) {
        return obj[key];
      });
  });
  const GetAllreviews = () => {
    axios
      .get(`https://bycyclethesis.herokuapp.com/reviews`)
      .then((response) => {
        SetReviews(response.data);
      })
      .catch((err) => {
        console.log("err", err);
      });
  };

  useEffect(() => {
    GetAllreviews();
  }, []);

  return (
    <>
      <PageTitle title="Reviews" />
      <Grid container spacing={4}>
        <Grid item xs={12}>
          <MUIDataTable
            title="review List"
            data={reviewTable}
            columns={["User", "ReviewId", "Review Date", "Rating", "review"]}
            options={{
              filterType: "checkbox",
            }}
          />
        </Grid>
      </Grid>
    </>
  );
}
