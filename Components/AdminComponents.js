const AdminLoginModel = require("../Models/AdminLogin");
const StudentModel = require("../Models/StudentModel");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const signup = async (req, res) => {
  const { username, password } = req.body;
  try {
    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new AdminLoginModel({
      username,
      password: hashedPassword,
    });
    await user.save();
    return res.json(user.username);
  } catch (error) {
    console.log(error);
  }
};

const login = async (req, res) => {
  const { username, password } = req.body;
  try {
    if (!username) {
      return res.json({
        error: "email not entered",
      });
    }
    if (!password) {
      return res.json({
        error: "password not entered",
      });
    }
    const user = await AdminLoginModel.findOne({ username });
    if (!user) {
      return res.json({
        error: "Username dont exist",
      });
    }

    const pass = await bcrypt.compare(password, user.password);
    if (!pass) {
      return res.json({
        error: "Password didnt match",
      });
    }

    const acesstoken = await jwt.sign(
      {
        name: user.username,
        id: user._id,
      },
      "My_key",
      { expiresIn: "15d" }
    );

    res.cookie("token", acesstoken, {
      maxAge: 15 * 24 * 60 * 60 * 1000,
      httpOnly: true,
      secure: true,
      sameSite: "None",
    });

    temp = {
      username: user.username,
      id: user.id,
    };
    return res.json(temp);
  } catch (error) {
    console.log(error);
  }
};

const getdata = async (req, res) => {
  const { status } = req.body;
  try {
    let temp;
    if (status === "") {
      temp = await StudentModel.find({});
    } else {
      temp = await StudentModel.find({ status: status }).sort({ Date: -1 });
    }
    return res.json(temp);
  } catch (error) {
    console.log(error);
  }
};

const statusUpdate = async (req, res) => {
  const { id, newStatus } = req.body;
  try {
    const temp = await StudentModel.findById(id);
    temp.status = newStatus;
    await temp.save();
    return res.json(temp);
  } catch (error) {
    console.log(error);
  }
};

const logout = async (req, res) => {
  try {
    res.cookie("user", "", { maxAge: 0 });
    return res.json("cookie is deleted");
  } catch (error) {
    console.log(error);
  }
};

module.exports = { signup, login, getdata, statusUpdate, logout };
