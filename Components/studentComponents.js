const StudentModel = require("../Models/StudentModel");

const apply = async (req, res) => {
  const { name, rollno, phoneno, applying, rmmno } = req.body;
  try {
    const studentData = new StudentModel({
      name,
      rollno,
      phoneno,
      applying,
      rmmno,
      Date: new Date(),
      status: "Pending",
      payment: "success",
    });

    await studentData.save();

    return res.json("Suceesful");
  } catch (error) {
    console.log(error);
  }
};

const searchStudentData = async (req, res) => {
  const { searchInput } = req.body;
  try {
    const data = await StudentModel.find({ rollno: searchInput });
    res.json(data);
  } catch (error) {
    console.log(error);
  }
};

module.exports = { apply, searchStudentData };
