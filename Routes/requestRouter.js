const express = require("express");
const cors = require("cors");
const { apply, searchStudentData } = require("../Components/studentComponents");

const student = express.Router();

corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "https://mini-project-abc12.vercel.app"],
  optionStatus: 200,
};

student.use(cors(corsOptions));

student.get("/test", (req, res) => {
  res.json("Its a test");
});

student.post("/apply", apply);
student.post("/search", searchStudentData);

module.exports = student;
