import React from "react";
import {
  HashRouter,
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";

// components
import Layout from "./Layout";

// pages
import Error from "../pages/error";
import Login from "../pages/login";

import Maps from "../pages/maps/Maps";
// context
import { useUserState } from "../context/UserContext";
import SuggestionTable from "../pages/tables/SuggestionTable";

export default function App() {
  // global
  var { isAuthenticated } = useUserState();

  return (
    <Router>
      <Switch>
        <Route exact path="/" render={() => <Redirect to="/app/dashboard" />} />
        <Route
          exact
          path="/app"
          render={() => <Redirect to="/app/dashboard" />}
        />
        <Route path="/app" component={Layout} />
        <Route path="/login" component={Login} />
        <Route component={Error} />
      </Switch>
    </Router>
  );

  // #######################################################################

  // function PrivateRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isAuthenticated ? (
  //           React.createElement(component, props)
  //         ) : (
  //           <Redirect
  //             to={{
  //               pathname: "/login",
  //               state: {
  //                 from: props.location,
  //               },
  //             }}
  //           />
  //         )
  //       }
  //     />
  //   );
  // }

  // function PublicRoute({ component, ...rest }) {
  //   return (
  //     <Route
  //       {...rest}
  //       render={(props) =>
  //         isAuthenticated ? (
  //           <Redirect
  //             to={{
  //               pathname: "/",
  //             }}
  //           />
  //         ) : (
  //           React.createElement(component, props)
  //         )
  //       }
  //     />
  //   );
  // }
}
