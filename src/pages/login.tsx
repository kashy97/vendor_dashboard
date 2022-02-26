import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Box from "@mui/material/Box";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Axios from "axios";
import history from "../history/history";
import Accordion from "@mui/material/Accordion";
import AccordionSummary from "@mui/material/AccordionSummary";
import AccordionDetails from "@mui/material/AccordionDetails";
import PersonOutlineOutlinedIcon from "@mui/icons-material/PersonOutlineOutlined";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { SnackbarProvider, useSnackbar } from "notistack";
import { Paper } from "@mui/material";

function Copyright(props: any) {
  return (
    <Typography
      variant="body2"
      color="text.secondary"
      align="center"
      {...props}
    >
      {"Copyright © "}
      <Link color="inherit" href="">
        Your Website
      </Link>{" "}
      {new Date().getFullYear()}
      {"."}
    </Typography>
  );
}
const theme = createTheme();

const Login = () => {
  const { enqueueSnackbar } = useSnackbar();
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [expanded, setExpanded] = React.useState("");
  const [usernamereg, setUsernamereg] = React.useState("");
  const [passwordreg, setPasswordreg] = React.useState("");

  Axios.defaults.withCredentials = true;

  const loginSubmit = (e: any) => {
    e.preventDefault();
    Axios.post("", {
      username: username,
      password: password,
    }).then((response) => {
      if (!response) {
        enqueueSnackbar("Invalid User", {
          variant: "error",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      } else {
        history.push("/dashboard");
        enqueueSnackbar("Successful Login", {
          variant: "success",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
      }
    });
  };
  const handleChange = (panel: any) => (event: any, newExpanded: any) => {
    setExpanded(newExpanded ? panel : false);
  };

  const handleUser = (e: any) => {
    enqueueSnackbar("Kindly Register and Login below", {
      variant: "info",
      anchorOrigin: { horizontal: "right", vertical: "top" },
    });
  };

  const handleSubmit = (e: any) => {
    Axios.post("", {
      username: usernamereg,
      password: passwordreg,
    }).then((response) => {
      if (response) {
        enqueueSnackbar("User registered Successfully", {
          variant: "success",
          anchorOrigin: { horizontal: "right", vertical: "top" },
        });
        handleChange("login");
      }
    });
  };

  return (
    <div className="paper">
      <Paper elevation={5}>
          <div className="title">
            <Typography color="primary"><u><b>LOGIN</b></u></Typography>
            <div className="button">
              <Button
                color="primary"
                variant="outlined"
                startIcon={<PersonOutlineOutlinedIcon />}
                size="large"
                onClick={handleUser}
              >
                User
              </Button>
            </div>
            </div>
          <div className="container">
          <Accordion
            expanded={expanded === "register"}
            onChange={handleChange("register")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel1a-content"
              id="panel1a-header"
            >
              <Typography>Create Account As User</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Registration
                    </Typography>
                    <Box
                      component="form"
                      onSubmit={handleSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="username"
                        label="E-Mail"
                        type="email"
                        value={usernamereg}
                        onChange={(e) => setUsernamereg(e.target.value)}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={passwordreg}
                        onChange={(e) => setPasswordreg(e.target.value)}
                      />
                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Register
                      </Button>
                    </Box>
                  </Box>
                  <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
              </ThemeProvider>
            </AccordionDetails>
          </Accordion>
          <Accordion
            expanded={expanded === "login"}
            onChange={handleChange("login")}
          >
            <AccordionSummary
              expandIcon={<ExpandMoreIcon />}
              aria-controls="panel2a-content"
              id="panel2a-header"
            >
              <Typography>Login As User</Typography>
            </AccordionSummary>
            <AccordionDetails>
              <ThemeProvider theme={theme}>
                <Container component="main" maxWidth="xs">
                  <CssBaseline />
                  <Box
                    sx={{
                      marginTop: 8,
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "center",
                    }}
                  >
                    <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
                      <LockOutlinedIcon />
                    </Avatar>
                    <Typography component="h1" variant="h5">
                      Sign in
                    </Typography>
                    <Box
                      component="form"
                      onSubmit={loginSubmit}
                      noValidate
                      sx={{ mt: 1 }}
                    >
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        id="email"
                        label="E-Mail"
                        type="email"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <TextField
                        margin="normal"
                        required
                        fullWidth
                        name="password"
                        label="Password"
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <FormControlLabel
                        control={<Checkbox value="remember" color="primary" />}
                        label="Remember me"
                      />

                      <Button
                        type="submit"
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                        onClick={loginSubmit}
                      >
                        Sign in
                      </Button>
                      <Grid container>
                        <Grid item xs>
                          <Link href="#" variant="body2">
                            Forgot password?
                          </Link>
                        </Grid>
                        <Grid item>
                          <Link
                            component="button"
                            onClick={() => {
                              handleChange("register");
                            }}
                            variant="body2"
                          >
                            "Don't have an account? Sign Up"
                          </Link>
                        </Grid>
                      </Grid>
                    </Box>
                  </Box>
                  <Copyright sx={{ mt: 8, mb: 4 }} />
                </Container>
              </ThemeProvider>
            </AccordionDetails>
          </Accordion>
        </div>
      </Paper>
    </div>
  );
};

export default function IntegrationNotistack() {
  return (
    <SnackbarProvider maxSnack={5}>
      <Login />
    </SnackbarProvider>
  );
}
