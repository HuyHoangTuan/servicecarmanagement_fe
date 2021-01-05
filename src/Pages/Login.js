import React, { useState } from "react";
import { withRouter } from "react-router-dom";
import axios from "axios";
import { setUserSession } from "../Utils/Common";
import Button from "@material-ui/core/Button";
import CircularProgress from "@material-ui/core/CircularProgress";
import TextField from "@material-ui/core/TextField";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import { InputAdornment, Grid, Box } from "@material-ui/core";
import { AccountCircle, LockRounded, PlayCircleFilledWhite } from "@material-ui/icons";
import truck from "../Image/truck.jpg"

const useStyles = makeStyles((theme) => ({
    body: {
      display: "flex",
      position : "fixed",
      flexDirection: "column",
      //alignItems: "center",
      backgroundImage: `url(${truck})`,
      spacing: 10,
      width : "100vw",
      height : "100vh",
      top : "0%",
      left : "0%",

  },
  box: {
    background: "white",
    //marginTop: "25vh",
    marginLeft: '67vw',
    position : "absolute",
    flexDirection: "column",
    alignItems: "center",
    width: '33vw',
    height: '100vh',
    paddingBottom: theme.spacing(5),
    paddingLeft: theme.spacing(10),
    paddingRight: theme.spacing(10),
    paddingTop:'35vh',
  },
  form: {
    marginTop: theme.spacing(1),
    alignItems: "center",
    minWidth: 300,
    maxWidth: 400,
  },
  button: {
      background: 'linear-gradient(45deg, rgba(255,228,132,1) 0%, rgba(255,202,24,1) 100%)',
  },
  textField: {
      //color: 'white',
  }
}));

function Login(props) {
  const classes = useStyles();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const handleUsernameChange = (event) => {
    //setIsTyping(true);
    setUsername(event.target.value);
  };

  const handlePasswordChange = (event) => {
    //setIsTyping(true);
    setPassword(event.target.value);
  };
  // handle button click of login form
  const handleSubmit = () => {
    setError(null);
    setLoading(true);
    axios
      .post("http://localhost:8080/users/login",{
        username: username,
        password: password,
      })
      .then((response) => {
        console.log(response);
        if(response.data.status === 401)
        {
          setLoading(false);
          setError(response.data.message) ;    
        }
        else
        {
          if(response.data.status === 0)
          {
            setLoading(false);
            setUserSession(response.data.token, response.data.user);
            props.history.push("/");
          }
        }
        })
        .catch((error)=>{
          console.log(error.response);
          setError("Something went wrong. Please try again later.");
          setLoading(false);
        });
  };

  return (
    <div className = {classes.body}>
    <Box
      ///borderRadius={8}
      boxShadow={4}
      borderColor = "white"
      className = {classes.box}
    >
      
      <Typography component="h1" variant="h4" p = {10}>
        Sign in
      </Typography>
        <TextField
          className = {classes.textField}
          autoComplete='off'
          variant="outlined"
          margin="normal"
          fullWidth
          id="user"
          label="Username"
          name="user"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <AccountCircle />
              </InputAdornment>
            ),
          }}
          onChange={handleUsernameChange}
          autoFocus
        />

        <TextField
          className = {classes.textField}
          autoComplete='off'
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          InputProps={{
            startAdornment: (
              <InputAdornment position="start">
                <LockRounded />
              </InputAdornment>
            ),
          }}
          onChange={handlePasswordChange}
          autoComplete="current-password"
        />
        {loading === true ? (
          <Button
            disabled={true}
            fullWidth
            type="submit"
            variant="contained"
            color="primary"
          >
            <CircularProgress />
            Login
          </Button>
        ) : (
          <Button
            fullWidth
            className = {classes.button}
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Login
          </Button>
        )}
    <Grid container justify="center">
        <Grid item>
          <Button> Forgot password?</Button>
          <Button> Register</Button>
        </Grid>
      </Grid>
      {error && <><small style={{ color: 'red' }}>{error}</small><br /></>}<br />
    </Box>
    </div>
  );
}

export default withRouter(Login);
