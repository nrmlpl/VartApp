import { useInputValidation } from "6pp";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import React from "react";
import { Navigate } from "react-router-dom";
import { lightGray, mahony, matteBlack, violet } from "../../constants/color";

const isAdmin = true;

const AdminLogin = () => {
  const secretKey = useInputValidation("");

  const submitHandler = (e) => {
    e.preventDefault();
    console.log("submit");
  };

  if(isAdmin) return <Navigate to="/admin/dashboard" />

  return (
    <div
      style={{
        background: mahony,
      }}
    >
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          height: "100vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
      >
        <Paper
          elevation={3}
          sx={{
            padding: 4,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            bgcolor: matteBlack,
          }}
        >
          <Typography varient="h5" color={lightGray}>
            Admin Login
          </Typography>
          <form
            style={{
              width: "100%",
              marginTop: "1rem",
            }}
            onSubmit={submitHandler}
          >
            <TextField
              required
              fullWidth
              label="password"
              type="password"
              margin="normal"
              varient="outlined"
              /*sx={{
                "& input": {
                  color: lightGray,
                }, 
              }} */
              value={secretKey.value}
              onChange={secretKey.changeHandler}
            />

            <Button
              sx={{ marginTop: "1rem" }}
              fullWidth
              variant="contained"
              color="primary"
              type="submit"
            >
              Login
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;
