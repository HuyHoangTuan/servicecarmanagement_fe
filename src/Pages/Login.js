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


const useStyles = makeStyles((theme) => ({
    body: {
      display: "flex",
      position : "fixed",
      flexDirection: "column",
      alignItems: "center",
      background: 'linear-gradient(45deg, rgba(2,0,36,1) 0%, rgba(9,9,121,1) 0%, rgba(0,212,255,1) 100%)',
      spacing: 10,
      width : "100vw",
      height : "100vh",
      top : "0%",
      left : "0%",

  },
  paper: {
    //background: "white",
    marginTop: theme.spacing(8),
    position : "absolute",
    flexDirection: "column",
    alignItems: "center",
    
  },
  form: {
    marginTop: theme.spacing(1),
    flexDirection: "column",
    alignItems: "center",
    position : 'relative',
    minWidth: 300,
    maxWidth: 400,
  },
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
        });
  };

  return (
    <div className = {classes.body}>
    <Box
      className = {classes.paper}
    >
      
      <Typography component="h1" variant="h4" p = {10}>
        Sign in
      </Typography>
      <form className={classes.form} onSubmit={handleSubmit} noValidate>
        <TextField
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
            type="submit"
            variant="contained"
            color="primary"
            onClick={handleSubmit}
          >
            Login
          </Button>
        )}
      </form>
    <Grid container justify="center">
        <Grid item>
          <Button> Forgot password?</Button>
          <Button> Register</Button>
        </Grid>
      </Grid>
    </Box>
    </div>
  );
}

export default withRouter(Login);
