const mongoose = require("mongoose");

const { Schema } = mongoose;

const AdminLoginSchema = new Schema({
  username: {
    type: String,
  },
  password: {
    type: String,
  },
});

const AdminLoginModel = mongoose.model("AdminLogin", AdminLoginSchema);

module.exports = AdminLoginModel;
