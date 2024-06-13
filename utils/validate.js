const jwt = require("jsonwebtoken");
const AdminLoginModel = require("../Models/AdminLogin");

const verifyToken = async (req, res, next) => {
  try {
    let data = await req.cookies.token;
    if (!data) {
      return res.json("there is no cookies");
    }
    const decoded = jwt.verify(data, "My_key");
    if (!decoded) {
      return res.json("there is something wrong");
    }
    let username = decoded.username;
    const userdata = await AdminLoginModel.findOne({ username });
    console.log(decoded.name);
    if (!userdata) {
      return res.json("Internal Isuuse");
    }
    req.user = userdata;
    next();
  } catch (error) {
    console.log(error);
  }
};

module.exports = { verifyToken };
