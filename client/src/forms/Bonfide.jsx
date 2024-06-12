import React, { useState } from "react";
import { Button, Container, Paper, TextField, Typography } from "@mui/material";
import axios from "axios";
import CloseIcon from "@mui/icons-material/Close";
import toast from "react-hot-toast";

const Bonfide = ({ apply, bus, disabled, setRequest }) => {
  const [temp, setTemp] = useState("");
  const [data, setData] = useState({
    name: "",
    rollno: "",
    phoneno: "",
    applying: apply,
    rmmno: "",
  });
  const [loading, setLoading] = useState(false);
  const handleClick = async () => {
    try {
      setLoading(true);
      const { name, rollno, phoneno, applying, rmmno } = data;
      if (applying === "Certificate") {
        const { res } = await axios.post(
          `${window.location.origin}/api/student/apply`,
          { name, rollno, phoneno, applying: temp, rmmno }
        );
      } else {
        const { res } = await axios.post(
          "http://localhost:8000/api/student/apply",
          { name, rollno, phoneno, applying, rmmno }
        );
      }

      setData({
        name: "",
        rollno: "",
        phoneno: "",
        applying: apply !== "Certificate" ? apply : temp,
        rmmno: "",
      });
      setRequest("");
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Request Successful");
      setLoading(false);
    }
  };
  return (
    <div
      style={{
        position: "absolute",
        top: "50%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        zIndex: 10,
      }}
    >
      <Container
        sx={{
          width: "100%",
        }}
      >
        <Paper
          sx={{
            padding: { xs: 3, sm: 6 },
            display: "flex",
            width: { xs: "30vh", sm: "70vh" },
            flexDirection: "column",
            borderRadius: "2rem",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Container
            sx={{
              width: "100%",
              display: "flex",
              justifyContent: "end",
              padding: -10,
            }}
          >
            <CloseIcon
              sx={{
                width: "2rem",
                height: "2rem",
                position: "fixed",
                top: "1rem",
                right: "1rem",
                marginRight: "1rem",
                cursor: "pointer",
                borderRadius: "50%",
              }}
              onClick={() => setRequest("")}
            />
          </Container>
          <Typography
            sx={{
              marginBottom: 2,
            }}
          >
            Fill The Details
          </Typography>
          <TextField
            label="Name"
            fullWidth
            onChange={(e) => setData({ ...data, name: e.target.value })}
            sx={{
              margin: 1,
            }}
          />
          <TextField
            label="Roll No"
            fullWidth
            onChange={(e) => setData({ ...data, rollno: e.target.value })}
            sx={{
              margin: 1,
            }}
          />
          <TextField
            label="Phone no"
            fullWidth
            onChange={(e) => setData({ ...data, phoneno: e.target.value })}
            sx={{
              margin: 1,
            }}
          />
          <TextField
            label="Applying"
            value={apply !== "Certificate" ? apply : temp}
            disabled={disabled}
            onChange={(e) => setTemp(e.target.value)}
            fullWidth
            sx={{
              margin: 1,
            }}
          />
          {bus && (
            <TextField
              label="RMM No"
              fullWidth
              onChange={(e) => setData({ ...data, rmmno: e.target.value })}
              sx={{
                margin: 1,
              }}
            />
          )}
          <Typography>Charges : 0 /-</Typography>
          <Button
            variant="contained"
            fullWidth
            onClick={handleClick}
            disabled={loading}
          >
            Make A payment
          </Button>
        </Paper>
      </Container>
    </div>
  );
};

export default Bonfide;
