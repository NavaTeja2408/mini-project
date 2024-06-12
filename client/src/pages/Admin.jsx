import React, { useContext, useEffect, useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import { UserContext } from "../utils/Context";
import CloseIcon from "@mui/icons-material/Close";
import DoneIcon from "@mui/icons-material/Done";
import toast from "react-hot-toast";

const Admin = () => {
  const [searchInput, setSearchInput] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [trigger, setTrigger] = useState(0);
  const [status, setStatus] = useState("");
  const { setAuthUser, authUser } = useContext(UserContext);
  const handleSearch = async () => {
    try {
      const res = await axios.post(
        `${window.location.origin}/api/student/search`,
        {
          searchInput,
        }
      );
      console.log(res.data);
      setStudentData(res.data);
      setSearchInput("");
    } catch (error) {
      console.log(error);
    }
  };

  const fetchAllData = async () => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.post(
        `${window.location.origin}/api/admin/getdata`,
        { status },
        config
      );
      if (data.error) {
        toast.error("Error Fetching data");
      } else {
        setStudentData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  const handleComplete = async (id) => {
    try {
      const newStatus = "Completed";
      const { data } = await axios.post(
        `${window.location.origin}/api/admin/update`,
        { id, newStatus }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setTrigger(trigger + 1);
      toast.success("Request has been completed");
    }
  };
  const handleCancel = async (id) => {
    try {
      const newStatus = "Canceled";
      const { data } = await axios.post(
        `${window.location.origin}/api/admin/update`,
        { id, newStatus }
      );
    } catch (error) {
      console.log(error);
    } finally {
      setTrigger(trigger + 1);
      toast.error("Request has been canceled");
    }
  };

  const handleLogOut = async () => {
    try {
      const config = {
        withCredentials: true,
      };
      const { data } = await axios.get(
        `${window.location.origin}/api/admin/logout`,
        config
      );
      if (data.error) {
        console.log(data.error);
      } else {
        localStorage.removeItem("user");
        setAuthUser();
      }
    } catch (error) {
      console.log(error);
    } finally {
      toast.success("Logged Out Successfully");
    }
  };

  useEffect(() => {
    fetchAllData();
  }, [status, trigger]);
  const formatDate = (dateString) => {
    const date = new Date(dateString);
    const year = date.getFullYear();
    const month = (date.getMonth() + 1).toString().padStart(2, "0"); // Months are zero-based
    const day = date.getDate().toString().padStart(2, "0");
    return `${day}-${month}-${year}`;
  };

  const handleReset = () => {
    setSearchInput("");
    setStatus("");
    setTrigger(trigger + 1);
  };

  return (
    <div>
      <div className="h-20 bg-headblue w-full flex items-center justify-center">
        <h1 className="text-white text-5xl font-bold">Admin</h1>
      </div>
      <div className="fixed top-3 right-5">
        <div>
          <h1>Username : {authUser.username}</h1>
          <button
            className="p-2 ml-2 bg-white text-headblue hover:bg-blue-100 rounded-lg"
            onClick={handleLogOut}
          >
            Logout
          </button>
        </div>
      </div>
      <div className="p-10">
        <div className="flex ">
          <TextField
            id="outlined-text-input"
            label="Search Rollno"
            type="text"
            margin="normal"
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
            fullWidth
            onChange={(e) => setSearchInput(e.target.value)}
          />
          <button
            className="ml-3 w-18 h-10 p-2 px-4 mt-6 bg-headblue text-white rounded-lg"
            onClick={handleSearch}
          >
            Search
          </button>
        </div>

        <FormControl variant="standard" sx={{ m: 1, minWidth: 120 }}>
          <InputLabel id="demo-simple-select-standard-label">Filter</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={status}
            onChange={(e) => setStatus(e.target.value)}
            label="Filter"
          >
            <MenuItem value="Pending">Pending</MenuItem>
            <MenuItem value="Completed">Completed</MenuItem>
            <MenuItem value="Canceled">Canceled</MenuItem>
          </Select>
        </FormControl>
        <button
          className="ml-3  w-18 h-10 p-2 px-4 mt-6 bg-headblue text-white rounded-lg"
          onClick={handleReset}
        >
          Reset
        </button>
        <div>
          {studentData.length === 0 ? (
            <h1>There is No data Available</h1>
          ) : (
            <TableContainer
              component={Paper}
              sx={{
                height: "60vh",
                display: "flex",
                flexDirection: "column",
                marginTop: "1rem",
                overflowY: "auto ",
              }}
            >
              <Table sx={{ minWidth: 650 }} aria-label="simple table">
                <TableHead
                  sx={{
                    bgcolor: "gray",
                  }}
                >
                  <TableRow>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                    >
                      Student Name
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                      align="right"
                    >
                      Roll No.
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                      align="right"
                    >
                      Applying
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                      align="right"
                    >
                      Payment
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                      align="right"
                    >
                      Rmm No.
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                      align="right"
                    >
                      Status
                    </TableCell>
                    <TableCell
                      sx={{
                        color: "white",
                      }}
                      align="right"
                    >
                      Date
                    </TableCell>
                  </TableRow>
                </TableHead>
                <TableBody>
                  {studentData.map((row, index) => (
                    <TableRow
                      key={index}
                      sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                    >
                      <TableCell
                        sx={{
                          fontWeight: "bold",
                        }}
                        component="th"
                        scope="row"
                      >
                        {row.name}
                      </TableCell>
                      {/* <TableCell align="right">{row.name}</TableCell> */}
                      <TableCell align="right">{row.rollno}</TableCell>
                      <TableCell align="right">{row.applying}</TableCell>
                      <TableCell
                        sx={{
                          color: row.payment === "success" ? "green" : "red",
                          fontWeight: "bold",
                        }}
                        align="right"
                      >
                        {row.payment}
                      </TableCell>
                      <TableCell align="right">{row.rmmno}</TableCell>
                      <TableCell
                        sx={{
                          color:
                            row.status === "Pending"
                              ? "black"
                              : row.status === "Completed"
                              ? "green"
                              : "red",
                          fontWeight: "bold",
                        }}
                        align="right"
                      >
                        {row.status}{" "}
                        <div>
                          {row.status === "Pending" && (
                            <div className="space-x-2">
                              <button
                                className="bg-green-400 hover::bg-greem-500"
                                onClick={() => handleComplete(row._id)}
                              >
                                <DoneIcon />
                              </button>
                              <button
                                className="bg-red-400 hover:bg-red-500"
                                onClick={() => handleCancel(row._id)}
                              >
                                <CloseIcon />
                              </button>
                            </div>
                          )}
                        </div>
                      </TableCell>
                      <TableCell align="right">
                        {row.Date ? formatDate(row.Date) : "-"}
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </TableContainer>
          )}
        </div>
      </div>
    </div>
  );
};

export default Admin;
