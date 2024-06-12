const express = require("express");
const cors = require("cors");
const student = require("./Routes/requestRouter");
const admin = require("./Routes/AdminRouter");
const mongoose = require("mongoose");
const path = require("path");

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: false }));
corsOptions = {
  credentials: true,
  origin: ["http://localhost:3000"],
  optionStatus: 200,
};

app.use(cors(corsOptions));

mongoose
  .set("strictQuery", false)
  .connect(
    "mongodb+srv://teja29204:Uq9eCCnCUo08dLwJ@mini.iwwe2ag.mongodb.net/?retryWrites=true&w=majority&appName=mini"
  )
  .then(() => console.log("Database is connected"))
  .catch(() => console.log("database not connected"));

app.use("/api/student", student);
app.use("/api/admin", admin);

app.get("/", (req, res) => {
  app.use(express.static(path.resolve(__dirname, "client", "build")));
  res.sendFile(path.resolve(__dirname, "client", "build", "index.html"));
});

app.listen(8000, () => {
  console.log("Server is Connected");
});
