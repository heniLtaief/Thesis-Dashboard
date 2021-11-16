import * as React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Redirect,
  withRouter,
} from "react-router-dom";

import classnames from "classnames";
import { IconButton, Link } from "@material-ui/core";
import Icon from "@mdi/react";
import Box from "@mui/material/Box";

//icons
import { mdiGithub as GithubIcon } from "@mdi/js";

// styles
import useStyles from "./styles";

// components
import Header from "../Header";
import Sidebar from "../Sidebar";

// pages
import Dashboard from "../../pages/dashboard";
import Typography from "../../pages/typography";
import Notifications from "../../pages/notifications";
import Maps from "../../pages/maps";
import Tables from "../../pages/tables";
import Icons from "../../pages/icons";
import Charts from "../../pages/charts";
import SuggestionTable from "../../pages/tables/SuggestionTable";
import StationTable from "../../pages/tables/StationTable";
import ReviewTable from "../../pages/tables/ReviewsTable";
import BicycleTable from "../../pages/tables/BicycleTable";
import planner from "../../pages/tables/planner";

import TodoComponent from "../../pages/tables/todo";

// context
import { useLayoutState } from "../../context/LayoutContext";
import EventCreator from "../../pages/tables/todo";

function Layout(props) {
  var classes = useStyles();

  // global
  var layoutState = useLayoutState();

  return (
    <div className={classes.root}>
      <>
        <Header />
        <Sidebar />
        <div
          className={classnames(classes.content, {
            [classes.contentShift]: layoutState.isSidebarOpened,
          })}
        >
          <div className={classes.fakeToolbar} />
          <Switch>
            <Route path="/app/dashboard" component={Dashboard} />
            <Route path="/app/typography" component={Typography} />
            <Route path="/app/tables" component={Tables} />
            <Route path="/app/notifications" component={Notifications} />
            <Route
              exact
              path="/app/ui"
              render={() => <Redirect to="/app/ui/icons" />}
            />
            <Route path="/app/ui/maps" component={Maps} />
            <Route path="/app/ui/icons" component={Icons} />
            <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/Suggestions" component={SuggestionTable} />
            <Route path="/app/Stations" component={StationTable} />
            <Route path="/app/Reviews" component={ReviewTable} />
            <Route path="/app/Bicycles" component={BicycleTable} />
            <Route path="/app/ui/todo" component={EventCreator} />
            <Route path="/app/ui/events" component={planner} />

            {/* <Route path="/app/Stations" component={StationTable} /> */}
            {/* TodoComponent */}
            {/* <Route path="/app/ui/charts" component={Charts} />
            <Route path="/app/ui/charts" component={Charts} /> */}
          </Switch>

          <Box
            mt={5}
            width={"100%"}
            display={"flex"}
            alignItems={"center"}
            justifyContent="space-between"
          >
            <div>
              <Link href={"https://github.com/ElyesBenKhoud"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://github.com/heniLtaief"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://github.com/rimamenaa"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://github.com/imadelayoubi"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
              <Link href={"https://github.com/WissemBrinis"} target={"_blank"}>
                <IconButton aria-label="github" style={{ marginRight: -12 }}>
                  <Icon path={GithubIcon} size={1} color="#6E6E6E99" />
                </IconButton>
              </Link>
            </div>
          </Box>
        </div>
      </>
    </div>
  );
}

export default withRouter(Layout);
