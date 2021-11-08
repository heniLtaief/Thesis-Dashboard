import React, { useState } from "react";
import {
  Grid,
  CircularProgress,
  Typography,
  Button,
  Tabs,
  Tab,
  TextField,
  Fade,
} from "@material-ui/core";
import { withRouter } from "react-router-dom";
import classnames from "classnames";
import axios from "axios";

// styles
import useStyles from "./styles";

// logo
import google from "../../images/google.svg";
import bg from "../../images/Onboarding.png";

// context
import { useUserDispatch, loginUser } from "../../context/UserContext";

function Login(props) {
  var classes = useStyles();

  // global
  var userDispatch = useUserDispatch();

  // local
  var [isLoading, setIsLoading] = useState(false);
  var [error, setError] = useState(null);
  var [activeTabId, setActiveTabId] = useState(0);

  var [RegisterAdmin, setRegisterAdmin] = useState({
    User: "",
    Password: "",
    Email: "",
  });
  function handleRegister(e) {
    e.persist();
    const { name, value } = e.target;
    setRegisterAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  var [LoginAdmin, setLoginAdmin] = useState({
    User: "",
    Password: "",
  });
  function handleLogin(e) {
    e.persist();
    const { name, value } = e.target;
    setLoginAdmin((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  }

  // var [nameValue, setNameValue] = useState("Elyes Ben khoud");
  // var [loginValue, setLoginValue] = useState("elyes@gmail.com");
  // var [passwordValue, setPasswordValue] = useState("elyes");

  return (
    <Grid container className={classes.container}>
      <div className={classes.logotypeContainer}>
        <img src={bg} alt="picture" className={classes.logotypeImage} />
      </div>
      <div className={classes.formContainer}>
        <div className={classes.form}>
          <Tabs
            value={activeTabId}
            onChange={(e, id) => setActiveTabId(id)}
            indicatorColor="primary"
            textColor="primary"
            centered
          >
            <Tab label="Login" classes={{ root: classes.tab }} />
            <Tab label="Register" classes={{ root: classes.tab }} />
          </Tabs>
          {activeTabId === 0 && (
            <React.Fragment>
              <TextField
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                // value={loginValue}
                name="User"
                onChange={handleLogin}
                margin="normal"
                placeholder="Username"
                type="text"
                fullWidth
              />
              <TextField
                // id="password"
                name="Password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                // value={passwordValue}
                onChange={handleLogin}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.formButtons}>
                {isLoading ? (
                  <CircularProgress size={26} className={classes.loginLoader} />
                ) : (
                  <Button
                    disabled={
                      LoginAdmin.User.length === 0 ||
                      LoginAdmin.Password.length === 0
                    }
                    onClick={
                      () => {
                        console.log(LoginAdmin);
                        axios
                          .post("http://localhost:3002/admin/check", {
                            LoginAdmin,
                          })
                          .then((adminLogged) => {
                            console.log(adminLogged.data);
                          })
                          .catch((err) => {
                            console.log(err);
                          });
                      }
                      // loginUser(
                      //   userDispatch,
                      //   loginValue,
                      //   passwordValue,
                      //   props.history,
                      //   setIsLoading,
                      //   setError,
                      // )
                    }
                    variant="contained"
                    color="primary"
                    size="large"
                  >
                    Login
                  </Button>
                )}
                <Button
                  color="primary"
                  size="large"
                  className={classes.forgetButton}
                >
                  Forget Password
                </Button>
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button size="large" className={classes.googleButton}>
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )}
          {activeTabId === 1 && (
            <React.Fragment>
              <Fade in={error}>
                <Typography color="secondary" className={classes.errorMessage}>
                  Something is wrong with your login or password :(
                </Typography>
              </Fade>
              <TextField
                id="name"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                // value={nameValue}
                name="User"
                onChange={handleRegister}
                margin="normal"
                placeholder="Full Name"
                type="text"
                fullWidth
              />
              <TextField
                name="Email"
                id="email"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                // value={loginValue}
                onChange={handleRegister}
                margin="normal"
                placeholder="Email Adress"
                type="email"
                fullWidth
              />
              <TextField
                // id="password"
                name="Password"
                InputProps={{
                  classes: {
                    underline: classes.textFieldUnderline,
                    input: classes.textField,
                  },
                }}
                // value={passwordValue}
                onChange={handleRegister}
                margin="normal"
                placeholder="Password"
                type="password"
                fullWidth
              />
              <div className={classes.creatingButtonContainer}>
                {isLoading ? (
                  <CircularProgress size={26} />
                ) : (
                  <Button
                    // onClick={()=>{
                    //   console.log(RegisterAdmin);
                    // }}

                    // loginUser(
                    //   userDispatch,
                    //   loginValue,
                    //   passwordValue,
                    //   props.history,
                    //   setIsLoading,
                    //   setError,
                    // )
                    disabled={
                      RegisterAdmin.User.length === 0 ||
                      RegisterAdmin.Password.length === 0 ||
                      RegisterAdmin.Email.length === 0
                    }
                    // post request here to register
                    onClick={() => {
                      console.log(RegisterAdmin);
                      axios
                        .post("http://localhost:3002/admin", {
                          RegisterAdmin,
                        })
                        .then((admin) => {
                          console.log(admin);
                        })
                        .catch((err) => {
                          console.log(err);
                        });
                    }}
                    size="large"
                    variant="contained"
                    color="primary"
                    fullWidth
                    className={classes.createAccountButton}
                  >
                    Create your account
                  </Button>
                )}
              </div>
              <div className={classes.formDividerContainer}>
                <div className={classes.formDivider} />
                <Typography className={classes.formDividerWord}>or</Typography>
                <div className={classes.formDivider} />
              </div>
              <Button
                size="large"
                className={classnames(
                  classes.googleButton,
                  classes.googleButtonCreating,
                )}
              >
                <img src={google} alt="google" className={classes.googleIcon} />
                &nbsp;Sign in with Google
              </Button>
            </React.Fragment>
          )}
        </div>
      </div>
    </Grid>
  );
}

export default withRouter(Login);
