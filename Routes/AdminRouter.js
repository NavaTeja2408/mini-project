const express = require("express");
const cors = require("cors");
const {
  signup,
  login,
  getdata,
  statusUpdate,
  logout,
} = require("../Components/AdminComponents");
const { verifyToken } = require("../utils/validate");

const admin = express.Router();

corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000", "https://mini-project-abc12.vercel.app"],
  optionStatus: 200,
};

admin.use(cors(corsOptions));

admin.post("/signup", signup);
admin.post("/login", login);
admin.post("/getdata", getdata);
admin.post("/update", statusUpdate);
admin.get("/logout", logout);

module.exports = admin;
