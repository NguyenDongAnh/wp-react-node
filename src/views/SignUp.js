import React, { useState } from "react";
import Avatar from "@material-ui/core/Avatar";
import Button from "@material-ui/core/Button";
import CssBaseline from "@material-ui/core/CssBaseline";
import TextField from "@material-ui/core/TextField";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Checkbox from "@material-ui/core/Checkbox";
import Link from "@material-ui/core/Link";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import LockOutlinedIcon from "@material-ui/icons/LockOutlined";
import Typography from "@material-ui/core/Typography";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Visibility from "@material-ui/icons/Visibility";
import VisibilityOff from "@material-ui/icons/VisibilityOff";
import InputAdornment from "@material-ui/core/InputAdornment";
import IconButton from "@material-ui/core/IconButton";
import DoneIcon from "@material-ui/icons/Done";
import ClearIcon from "@material-ui/icons/Clear";
import instance from "../http-common";
import { withStyles } from "@material-ui/core/styles";
import {
  MuiThemeProvider,
  createMuiTheme,
  ThemeProvider,
} from "@material-ui/core/styles";
import { propTypes } from "react-bootstrap/esm/Image";
function Copyright() {
  return (
    <Typography variant="body2" color="textSecondary" align="center">
      {"Copyright © "}
      <Link color="inherit" href="https://material-ui.com/">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}

const useStyles = makeStyles((theme) => ({
  paper: {
    marginTop: theme.spacing(8),
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  avatar: {
    margin: theme.spacing(1),
    backgroundColor: theme.palette.secondary.main,
  },
  form: {
    width: "100%", // Fix IE 11 issue.
    marginTop: theme.spacing(3),
  },
  submit: {
    margin: theme.spacing(3, 0, 2),
  },
}));

const theme = createMuiTheme({
  typography: {
    body2: {
      fontSize: "0.8rem",
    },
  },
});

theme;
export default function SignUp(props) {
  const classes = useStyles();
  const [values, setValues] = useState({
    firstname: "",
    lastname: "",
    email: "",
    password: "",
    repassword: "",
    emailValidation: false,
    showPassword: false,
  });
  let iconLetter, iconCapital, iconNumber, iconLength, iconMustMatch;
  let validLetter, validCapital, validNumber, validLength, validMustMatch;
  const handleClickShowPassword = () => {
    setValues({ ...values, showPassword: !values.showPassword });
  };
  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };
  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };
  const handlePasswordLetter = (password) => {
    var lowerCaseLetters = /[a-z]/g;
    return password.match(lowerCaseLetters);
  };
  const handlePasswordCapital = (password) => {
    var upperCaseLetters = /[A-Z]/g;
    return password.match(upperCaseLetters);
  };
  const handlePasswordNumber = (password) => {
    var numbers = /[0-9]/g;
    return password.match(numbers);
  };
  const handlePasswordLength = (password) => {
    if (password.length >= 8 && password.length <= 16) {
      return true;
    }
    return false;
  };
  const handlePasswordValidation = () => {
    if (
      validLetter &&
      validCapital &&
      validNumber &&
      validLength &&
      validMustMatch
    ) {
      return true;
    }
    return false;
  };
  const mustMatch = () => {
    if (values.password == "" || values.repassword == "") return false;
    if (values.password === values.repassword) {
      return true;
    }
    return false;
  };
  function ValidationEmail(email) {
    if (email === "") return true;
    const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  }
  let doneicon = (
    <DoneIcon
      fontSize="small"
      style={{ margin: "0 5 0 0" }}
      htmlColor="green"
      viewBox="0 0 30 30"
    />
  );
  let clearicon = (
    <ClearIcon
      fontSize="small"
      style={{ margin: "0 5 0 0" }}
      viewBox="0 0 30 30"
      color="error"
    />
  );

  validLetter = handlePasswordLetter(values.password);
  validCapital = handlePasswordCapital(values.password);
  validNumber = handlePasswordNumber(values.password);
  validLength = handlePasswordLength(values.password);
  validMustMatch = mustMatch();

  iconLetter = validLetter ? doneicon : clearicon;
  iconCapital = validCapital ? doneicon : clearicon;
  iconNumber = validNumber ? doneicon : clearicon;
  iconLength = validLength ? doneicon : clearicon;
  iconMustMatch = validMustMatch ? doneicon : clearicon;
  return (
    <MuiThemeProvider theme={theme}>
      <Container component="main" maxWidth="xs">
        <CssBaseline />
        <div className={classes.paper}>
          <Avatar className={classes.avatar}>
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <form className={classes.form} noValidate>
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={values.firstname}
                  onChange={handleChange("firstname")}
                  name="firstName"
                  variant="outlined"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  value={values.lastname}
                  onChange={handleChange("lastname")}
                  variant="outlined"
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.email}
                  error={!ValidationEmail(values.email)}
                  helperText={
                    !ValidationEmail(values.email) ? "Invalid Email !" : ""
                  }
                  onChange={handleChange("email")}
                  variant="outlined"
                  margin="normal"
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoFocus
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.password}
                  onChange={handleChange("password")}
                  variant="outlined"
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={values.showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="off"
                  // InputProps={{
                  //   endAdornment: (
                  //     <InputAdornment position="end">
                  //       <IconButton
                  //         aria-label="toggle password visibility"
                  //         onClick={handleClickShowPassword}
                  //         onMouseDown={handleMouseDownPassword}
                  //       >
                  //         {values.showPassword ? (
                  //           <Visibility />
                  //         ) : (
                  //           <VisibilityOff />
                  //         )}
                  //       </IconButton>
                  //     </InputAdornment>
                  //   ),
                  // }}
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  value={values.repassword}
                  variant="outlined"
                  required
                  fullWidth
                  name="re-password"
                  label="Re-password"
                  type="password"
                  id="re-password"
                  onChange={handleChange("repassword")}
                  autoComplete="off"
                />
              </Grid>
              <Grid item xs={12}>
                {iconLetter}
                <Typography
                  component="span"
                  variant="body2"
                  style={validLetter ? { color: "green" } : { color: "red" }}
                >
                  At least a <b>lowercase</b> letter
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {iconCapital}
                <Typography
                  component="span"
                  variant="body2"
                  style={validCapital ? { color: "green" } : { color: "red" }}
                >
                  At least a <b>uppercase</b> letter
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {iconNumber}
                <Typography
                  component="span"
                  variant="body2"
                  style={validNumber ? { color: "green" } : { color: "red" }}
                >
                  At least a <b>number</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {iconLength}
                <Typography
                  component="span"
                  variant="body2"
                  style={validLength ? { color: "green" } : { color: "red" }}
                >
                  Minimum <b>8 characters</b> and Maximum <b>16 characters</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                {iconMustMatch}
                <Typography
                  component="span"
                  variant="body2"
                  style={mustMatch() ? { color: "green" } : { color: "red" }}
                >
                  Password and re-password must match
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={(e) => {
                e.preventDefault();
                // if (handlePasswordValidation()) {
                //   console.log(true);

                // }
                if (
                  handlePasswordValidation() &&
                  ValidationEmail(values.email) &&
                  values.email != ""
                ) {
                  console.log(true);
                  instance({
                    method: "post",
                    url: "/blog/create",
                    data: {
                      firstname: document.getElementById("firstName").value,
                      lastname: document.getElementById("lastName").value,
                      email: document.getElementById("email").value,
                      password: document.getElementById("password").value,
                    },
                  }).then((response) => {
                    console.log(response.data);
                  });
                }
              }}
            >
              Sign Up
            </Button>
            <Grid container justify="flex-end">
              <Grid item>
                <Link
                  href="/signin"
                  variant="body2"
                  onClick={(e) => {
                    e.preventDefault();
                    props.history.push("/signin");
                  }}
                >
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </form>
        </div>
        <Box mt={5}>
          <Copyright />
        </Box>
      </Container>
    </MuiThemeProvider>
  );
}
