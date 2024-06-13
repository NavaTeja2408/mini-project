import { Container, Paper, TextField, Typography, Button } from "@mui/material";
import React, { useContext, useState } from "react";
import axios from "axios";
import { UserContext, UserContextProvider } from "../utils/Context";
import toast from "react-hot-toast";
import { CircularProgress } from "@mui/material";

const AdminLogin = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const { setAuthUser } = useContext(UserContext);
  const handleLogin = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      const config = {
        withCredentials: true,
      };
      const res = await axios.post(
        `${window.location.origin}/api/admin/login`,
        { username, password },
        config
      );
      let temp = res.data;

      if (temp.error) {
        toast.error(temp.error);
      } else {
        if (temp !== undefined) {
          localStorage.setItem("user", JSON.stringify(temp));
          setAuthUser(temp);
          toast.success("Successful Login");
        }
      }
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };
  return (
    <div>
      <Container
        component={"main"}
        maxWidth="xs"
        sx={{
          display: "flex",
          paddingTop: "5rem",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Paper
          elevation={4}
          sx={{
            padding: 3,
            bgcolor: "rgba(123 , 190 , 252 , 0.8)",
            display: "flex",
            flexDirection: "column",
            borderRadius: "2rem",
            alignItems: "center",
            color: "white",
          }}
        >
          <Typography variant="h5" gutterBottom>
            Login
          </Typography>
          <form onSubmit={handleLogin}>
            <TextField
              id="outlined-text-input"
              label="Username"
              type="username"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              margin="normal"
              onChange={(e) => setUsername(e.target.value)}
              fullWidth
              required
            />

            <TextField
              id="outlined-password-input"
              label="Password"
              type="password"
              sx={{
                input: { color: "white" },
                label: { color: "white" },
                "& label.Mui-focused": { color: "white" },
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "white" },
                  "&:hover fieldset": { borderColor: "white" },
                  "&.Mui-focused fieldset": { borderColor: "white" },
                },
              }}
              margin="normal"
              onChange={(e) => setPassword(e.target.value)}
              fullWidth
              required
            />
            <Button
              sx={{
                marginTop: "1rem",
                color: "white",
                borderColor: "white",
                backgroundColor: "rgba(0, 0, 0, 0.2)",
                "&:hover": {
                  borderColor: "white",
                  backgroundColor: "rgba(255, 255, 255, 0.4)",
                },
              }}
              type="submit"
              fullWidth
            >
              {loading ? <CircularProgress /> : "Login"}
            </Button>
          </form>
        </Paper>
      </Container>
    </div>
  );
};

export default AdminLogin;

