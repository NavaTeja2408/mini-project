import React, { useState } from "react";
import { TextField } from "@mui/material";
import axios from "axios";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import CircularProgress from "@mui/material/CircularProgress";

const Tracker = () => {
  const [searchInput, setSearchInput] = useState("");
  const [studentData, setStudentData] = useState([]);
  const [loading, setLoading] = useState(false);
  const handleSearch = async () => {
    try {
      setLoading(true);
      const res = await axios.post(
        `${window.location.origin}/api/student/search`,
        {
          searchInput,
        }
      );
      setStudentData(res.data);
      setSearchInput("");
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="flex space-x-2">
        <TextField
          id="outlined-text-input"
          label="Search Rollno"
          type="text"
          margin="normal"
          fullWidth
          value={searchInput}
          onChange={(e) => setSearchInput(e.target.value)}
        />
        <button
          className="w-18 h-10 p-2 px-4 mt-6 bg-headblue text-white rounded-lg"
          onClick={handleSearch}
        >
          {loading ? <CircularProgress color="secondary" /> : "Search"}
        </button>
      </div>
      <div>
        {studentData.length === 0 ? (
          <h1 className=" p-4 text-2xl text-slate-700">
            Search your Roll no. for data
          </h1>
        ) : (
          <TableContainer
            component={Paper}
            sx={{
              marginTop: "1rem",
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
                    Applying
                  </TableCell>
                  <TableCell
                    sx={{
                      color: "white",
                    }}
                    align="right"
                  >
                    Status
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
                      component="th"
                      scope="row"
                      sx={{
                        fontWeight: "bold",
                      }}
                    >
                      {row.name}
                    </TableCell>
                    {/* <TableCell align="right">{row.name}</TableCell> */}
                    <TableCell align="right">{row.applying}</TableCell>
                    <TableCell
                      align="right"
                      sx={{
                        color:
                          row.status === "Pending"
                            ? "black"
                            : row.status === "Completed"
                            ? "green"
                            : "red",
                        fontWeight: "bold",
                      }}
                    >
                      {row.status}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </TableContainer>
        )}
      </div>
    </div>
  );
};

export default Tracker;
