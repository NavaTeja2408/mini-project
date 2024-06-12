const mongoose = require("mongoose");

const { Schema } = mongoose;

const StudentSchema = new Schema({
  name: {
    type: String,
  },
  rollno: {
    type: String,
  },
  phoneno: {
    type: String,
  },
  applying: {
    type: String,
  },
  rmmno: {
    type: String,
  },
  Date: {
    type: String,
  },
  status: {
    type: String,
  },
  payment: {
    type: String,
  },
});

const StudentModel = mongoose.model("Student", StudentSchema);

module.exports = StudentModel;
