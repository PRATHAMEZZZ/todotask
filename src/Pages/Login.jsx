import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Typography, Box, Grid } from "@mui/material";
import { login } from "../Redux/slices/authSlice";
import { useDispatch } from "react-redux";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState([
    {
      name: "email",
      msg: false,
    },
    {
      name: "password",
      msg: false,
    },
  ]);

  const dispatch = useDispatch();

  const navigate = useNavigate();
  const handleLogin = async () => {
    const newErrors = [email, password].map((ele, index) => ({
      ...error[index],
      msg: ele === "" ? true : false,
    }));
    setError(newErrors);
    if (email === "" || password === "") return;
    const userData = { name: email };
    dispatch(login(userData));
    navigate("/todo");
  };

  return (
    <div style={{ height: "100vh" }}>
      <Grid
        container
        justifyContent="center"
        alignItems="center"
        style={{
          height: "100%",
        }}
      >
        <Grid
          item
          xs={11}
          sm={6}
          md={4}
          lg={2}
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: 5,
            padding: "25px",
            boxShadow: "0px 0px 22px 1px rgba(179,177,179,1)",
            borderRadius: "10px",
            backgroundColor: "white",
          }}
        >
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              flexDirection: "column",
            }}
          >
            <Typography
              sx={{ textAlign: "center", fontWeight: 700, fontSize: "20px" }}
              variant="body1"
            >
              TODO APP
            </Typography>
            <Typography
              sx={{ textAlign: "center", fontWeight: 700, fontSize: "15px" }}
              variant="body1"
            >
              Log in to continue
            </Typography>
          </Box>
          <Box>
            <TextField
              sx={{ width: "100%" }}
              size="small"
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              variant="outlined"
              label="Email/Username"
              required
            />
            {error[0].msg && (
              <Typography
                sx={{
                  textAlign: "left",
                  color: "red",
                  pl: 1,
                  fontSize: "15px",
                }}
              >
                Email is required
              </Typography>
            )}
            <TextField
              sx={{ width: "100%", mt: 2 }}
              size="small"
              type="password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              variant="outlined"
              label="Password"
              required
            />
            {error[1].msg && (
              <Typography
                sx={{
                  textAlign: "left",
                  color: "red",
                  pl: 1,
                  fontSize: "15px",
                }}
              >
                Password is required
              </Typography>
            )}
            <Button
              variant="outlined"
              onClick={() => handleLogin()}
              sx={{
                bgcolor: "#0c66e3",
                color: "white",
                mt: 2,
                width: "100%",
                "&:hover": {
                  bgcolor: "#0C51B3",
                },
              }}
            >
              Login
            </Button>
          </Box>
        </Grid>
      </Grid>
    </div>
  );
};

export default Login;
